"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import { CheckCircle2, Send } from "lucide-react";
import paymentQr from "@/public/payment-qr.jpeg";

const MAX_FILE_MB = 15;

function fileToBase64(
  file: File
): Promise<{ name: string; type: string; data: string }> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      resolve({ name: file.name, type: file.type, data: result.split(",")[1] });
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function compressImage(file: File, maxDim = 1600, quality = 0.8) {
  try {
    const bitmap = await createImageBitmap(file);
    const scale = Math.min(1, maxDim / Math.max(bitmap.width, bitmap.height));
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(bitmap.width * scale);
    canvas.height = Math.round(bitmap.height * scale);
    canvas
      .getContext("2d")!
      .drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    bitmap.close();

    const blob = await new Promise<Blob>((resolve, reject) =>
      canvas.toBlob(
        (b) => (b ? resolve(b) : reject(new Error("toBlob failed"))),
        "image/jpeg",
        quality
      )
    );

    const base = file.name.replace(/\.[^.]+$/, "") || "image";
    return fileToBase64(
      new File([blob], `${base}.jpg`, { type: "image/jpeg" })
    );
  } catch {
    // Format the browser can't decode (e.g. HEIC on Chrome): send the original
    return fileToBase64(file);
  }
}

type FormState = {
  fullName: string;
  dateOfBirth: string;
  whatsapp: string;
  instagram: string;
  cricherosProfile: string;
  playingRole: string;
  playingStyle: string;
  playerPhoto: File | null;
  paymentScreenshot: File | null;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  fullName: "",
  dateOfBirth: "",
  whatsapp: "",
  instagram: "",
  cricherosProfile: "",
  playingRole: "",
  playingStyle: "",
  playerPhoto: null,
  paymentScreenshot: null,
};

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!values.fullName.trim()) errors.fullName = "Enter your full name.";
  if (!values.dateOfBirth.trim())
    errors.dateOfBirth = "Enter your date of birth.";
  if (!values.whatsapp.trim()) {
    errors.whatsapp = "Enter your WhatsApp number.";
  } else if (!/^[+\d][\d\s-]{7,14}$/.test(values.whatsapp.trim())) {
    errors.whatsapp = "Enter a valid WhatsApp number.";
  }
  if (!values.instagram.trim()) errors.instagram = "Enter your Instagram ID.";
  if (!values.cricherosProfile.trim())
    errors.cricherosProfile = "Enter your Cricheros profile link.";
  if (!values.playingRole.trim())
    errors.playingRole = "Select your playing role.";
  if (!values.playingStyle.trim())
    errors.playingStyle = "Select your playing style.";
  if (!values.playerPhoto) errors.playerPhoto = "Upload a clear player photo.";
  else if (values.playerPhoto.size > MAX_FILE_MB * 1024 * 1024)
    errors.playerPhoto = `Photo must be under ${MAX_FILE_MB} MB.`;

  if (!values.paymentScreenshot)
    errors.paymentScreenshot = "Upload the payment screenshot.";
  else if (values.paymentScreenshot.size > MAX_FILE_MB * 1024 * 1024)
    errors.paymentScreenshot = `Screenshot must be under ${MAX_FILE_MB} MB.`;

  return errors;
}

export default function RegistrationForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function handleFileChange(
    key: "playerPhoto" | "paymentScreenshot",
    file: File | null
  ) {
    update(key, file);

    if (file && file.size > MAX_FILE_MB * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        [key]: `File must be under ${MAX_FILE_MB} MB.`,
      }));
    } else {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);

    try {
      const payload = {
        fullName: values.fullName,
        dateOfBirth: values.dateOfBirth,
        whatsapp: values.whatsapp,
        instagram: values.instagram,
        cricherosProfile: values.cricherosProfile,
        playingRole: values.playingRole,
        playingStyle: values.playingStyle,
        playerPhoto: await compressImage(values.playerPhoto!),
        paymentScreenshot: await compressImage(values.paymentScreenshot!),
      };

      console.log("Calling:", process.env.NEXT_PUBLIC_APPS_SCRIPT_URL);

      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // ---- replaced section starts here ----
      const text = await response.text();
      let result: { status?: string; message?: string };
      try {
        result = JSON.parse(text);
      } catch {
        console.error("Non-JSON response", response.status, text.slice(0, 300));
        alert(`Server returned ${response.status}. Check the console.`);
        return;
      }

      if (result.status === "success") {
        setSubmitted(true);
      } else {
        console.error(result);
        alert(result.message ?? "Failed to submit the form. Please try again.");
      }
      // ---- replaced section ends here ----
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className='sheet'>
        <div className='sheet__success'>
          <div className='sheet__success-mark'>
            <CheckCircle2 aria-hidden='true' />
          </div>
          <h3>Player registered</h3>
          <p>
            Thank you, {values.fullName}! Your registration is complete. We will
            contact you via WhatsApp at {values.whatsapp}.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className='sheet' onSubmit={handleSubmit} noValidate>
      <div className='sheet__grid'>
        <div className='field'>
          <label htmlFor='fullName'>
            Full Name <span className='req'>*</span>
          </label>
          <input
            id='fullName'
            name='fullName'
            type='text'
            placeholder='e.g. John Doe'
            value={values.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            aria-invalid={Boolean(errors.fullName)}
          />
          <span className='field-error'>{errors.fullName}</span>
        </div>

        <div className='field'>
          <label htmlFor='dateOfBirth'>
            Date of Birth <span className='req'>*</span>
          </label>
          <input
            id='dateOfBirth'
            name='dateOfBirth'
            type='date'
            value={values.dateOfBirth}
            onChange={(e) => update("dateOfBirth", e.target.value)}
            aria-invalid={Boolean(errors.dateOfBirth)}
          />
          <span className='field-error'>{errors.dateOfBirth}</span>
        </div>

        <div className='field'>
          <label htmlFor='whatsapp'>
            WhatsApp No. <span className='req'>*</span>
          </label>
          <input
            id='whatsapp'
            name='whatsapp'
            type='tel'
            placeholder='+91 98765 43210'
            value={values.whatsapp}
            onChange={(e) => update("whatsapp", e.target.value)}
            aria-invalid={Boolean(errors.whatsapp)}
          />
          <span className='field-error'>{errors.whatsapp}</span>
        </div>

        <div className='field'>
          <label htmlFor='instagram'>
            Instagram ID <span className='req'>*</span>
          </label>
          <input
            id='instagram'
            name='instagram'
            type='text'
            placeholder='@yourhandle'
            value={values.instagram}
            onChange={(e) => update("instagram", e.target.value)}
            aria-invalid={Boolean(errors.instagram)}
          />
          <span className='field-error'>{errors.instagram}</span>
        </div>

        <div className='field'>
          <label htmlFor='cricherosProfile'>
            Cricheros Profile Link <span className='req'>*</span>
          </label>
          <input
            id='cricherosProfile'
            name='cricherosProfile'
            type='url'
            placeholder='https://cricheros.com/your-profile'
            value={values.cricherosProfile}
            onChange={(e) => update("cricherosProfile", e.target.value)}
            aria-invalid={Boolean(errors.cricherosProfile)}
          />
          <span className='field-error'>{errors.cricherosProfile}</span>
        </div>

        <div className='field'>
          <label htmlFor='playingRole'>
            Playing Role <span className='req'>*</span>
          </label>
          <select
            id='playingRole'
            name='playingRole'
            value={values.playingRole}
            onChange={(e) => update("playingRole", e.target.value)}
            aria-invalid={Boolean(errors.playingRole)}
          >
            <option value=''>Select</option>
            <option value='Batting'>Batting</option>
            <option value='Bowler'>Bowler</option>
            <option value='All rounder'>All rounder</option>
            <option value='Batting All rounder'>Batting All rounder</option>
            <option value='Bowling All rounder'>Bowling All rounder</option>
          </select>
          <span className='field-error'>{errors.playingRole}</span>
        </div>

        <div className='field'>
          <label htmlFor='playingStyle'>
            Playing Style <span className='req'>*</span>
          </label>
          <select
            id='playingStyle'
            name='playingStyle'
            value={values.playingStyle}
            onChange={(e) => update("playingStyle", e.target.value)}
            aria-invalid={Boolean(errors.playingStyle)}
          >
            <option value=''>Select</option>
            <option value='Right handed batsman & bowler'>
              Right handed batsman & bowler
            </option>
            <option value='Left handed batsman & bowler'>
              Left handed batsman & bowler
            </option>
            <option value='Right handed batsman & left handed bowler'>
              Right handed batsman & left handed bowler
            </option>
            <option value='Left handed batsman & right handed bowler'>
              Left handed batsman & right handed bowler
            </option>
          </select>
          <span className='field-error'>{errors.playingStyle}</span>
        </div>

        <div className='field'>
          <label htmlFor='playerPhoto'>
            Player Photo <span className='req'>*</span>
          </label>
          <input
            id='playerPhoto'
            name='playerPhoto'
            type='file'
            accept='image/*'
            onChange={(e) =>
              handleFileChange("playerPhoto", e.target.files?.[0] || null)
            }
            aria-invalid={Boolean(errors.playerPhoto)}
          />
          <span className='field-hint'>
            Maximum file size: {MAX_FILE_MB}MB.
          </span>
          <span className='field-error'>{errors.playerPhoto}</span>
        </div>

        <div className='field'>
          <p>
            <strong>Player Registration Fee:</strong> ₹1500
          </p>
          <p>
            <strong>UPI number:</strong> 8828287246
          </p>
          <p>
            <strong>UPI ID:</strong> b2bsportsconnect@okhdfcbank
          </p>
          <Image
            src={paymentQr}
            alt='QR Code for Payment'
            width={200}
            height={300}
          />
        </div>

        <div className='field'>
          <label htmlFor='paymentScreenshot'>
            Payment Screenshot <span className='req'>*</span>
          </label>
          <input
            id='paymentScreenshot'
            name='paymentScreenshot'
            type='file'
            accept='image/*'
            onChange={(e) =>
              handleFileChange("paymentScreenshot", e.target.files?.[0] || null)
            }
            aria-invalid={Boolean(errors.paymentScreenshot)}
          />
          <span className='field-error'>{errors.paymentScreenshot}</span>
        </div>

        <div className='field field--full'>
          <p>
            <strong>Disclaimer:</strong> By submitting this form, you agree to
            the terms and conditions of the registration process.
          </p>
        </div>
      </div>

      <div className='sheet__submit'>
        <button
          className='btn btn--primary'
          type='submit'
          disabled={submitting}
        >
          <Send size={16} aria-hidden='true' />
          {submitting ? "Registering…" : "Register"}
        </button>
      </div>
    </form>
  );
}
