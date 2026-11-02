import Link from "next/link";

export default function TournamentNotFound() {
  return (
    <section className="section">
      <div className="container prose">
        <h1 className="section-heading">TOURNAMENT NOT FOUND</h1>
        <p>We couldn&apos;t find that tournament.</p>
        <Link className="btn btn--primary" href="/tournaments">
          Browse tournaments
        </Link>
      </div>
    </section>
  );
}
