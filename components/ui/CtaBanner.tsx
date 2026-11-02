import Link from "next/link";

interface Props {
  title: string;
  body: string;
  href?: string;
  label?: string;
}

export default function CtaBanner({ title, body, href = "/register", label = "Register now" }: Props) {
  return (
    <section className="statement" aria-labelledby="cta-title">
      <div className="container">
        <h2 id="cta-title">{title}</h2>
        <p>{body}</p>
        <div className="statement__actions">
          <Link className="btn btn--primary" href={href}>
            {label}
          </Link>
        </div>
      </div>
    </section>
  );
}
