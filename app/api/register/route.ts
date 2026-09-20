import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const maxDuration = 60;

export async function POST(req: Request) {
  const url = process.env.APPS_SCRIPT_URL;
  if (!url) {
    return NextResponse.json(
      { status: "error", message: "Server is not configured." },
      { status: 500 }
    );
  }

  try {
    const body = await req.text();

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body,
      redirect: "follow",
    });

    const text = await res.text();
    try {
      return NextResponse.json(JSON.parse(text));
    } catch {
      console.error(
        "Apps Script non-JSON response",
        res.status,
        text.slice(0, 300)
      );
      return NextResponse.json(
        {
          status: "error",
          message: `Upstream returned ${res.status}, not JSON.`,
        },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("Apps Script request failed", err);
    return NextResponse.json(
      { status: "error", message: "Could not reach the registration service." },
      { status: 502 }
    );
  }
}
