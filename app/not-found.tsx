import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container prose">
        <h1 className="section-heading">PAGE NOT FOUND</h1>
        <p>The page you are looking for doesn&apos;t exist.</p>
        <Link className="btn btn--primary" href="/">
          Back home
        </Link>
      </div>
    </section>
  );
}
