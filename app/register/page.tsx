import { Phone } from "lucide-react";
import RegistrationForm from "@/components/RegistrationForm";
import { getSiteSettings } from "@/lib/content";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Register your team",
  description:
    "Register your team for Path to Glory — Chapter 2. Fill in the team sheet and secure one of ten slots.",
  path: "/register",
});

export default async function RegisterPage() {
  const site = await getSiteSettings();
  return (
    <section className="register" aria-labelledby="register-title">
      <div className="container">
        <div className="register__head">
          <h1 id="register-title">REGISTER NOW</h1>
          <span className="eyebrow">Your Path to Glory starts here.</span>
        </div>
        <RegistrationForm />

        <div className="register__contact">
          <p className="register__contact-label">For any queries, please contact</p>
          <div className="register__contact-list">
            {site.contacts.map(({ name, phone, tel }) => (
              <a className="register__contact-item" href={`tel:${tel}`} key={tel}>
                <Phone aria-hidden="true" />
                <span>
                  <strong>{name}</strong> — {phone}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
