import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FactStrip from "@/components/ui/FactStrip";
import PageHero from "@/components/ui/PageHero";
import PrizeCard from "@/components/ui/PrizeCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { STATUS_LABEL } from "@/components/ui/TournamentCard";
import { getTournamentBySlug, getTournaments } from "@/lib/content";
import { formatDate } from "@/lib/format";
import { pageMetadata } from "@/lib/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = true;

export async function generateStaticParams() {
  const tournaments = await getTournaments();
  return tournaments.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const t = await getTournamentBySlug(slug);
  if (!t) return {};
  return pageMetadata({ title: t.name, description: t.summary, path: `/tournaments/${t.slug}` });
}

export default async function TournamentPage({ params }: Props) {
  const { slug } = await params;
  const t = await getTournamentBySlug(slug);
  if (!t) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: t.name,
    description: t.summary,
    startDate: t.startDate,
    sport: t.sport,
    location: { "@type": "Place", name: t.venue, address: t.city },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <PageHero eyebrow={STATUS_LABEL[t.status]} title={t.name} description={t.tagline}>
        {t.status === "registration-open" && (
          <div className="hero__actions">
            <Link className="btn btn--primary" href="/register">
              Register your team
            </Link>
          </div>
        )}
      </PageHero>

      <FactStrip facts={t.facts} />

      <section className="section" aria-labelledby="about-title">
        <div className="container prose">
          <h2 className="visually-hidden" id="about-title">About this tournament</h2>
          {t.description.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="prizes-title">
        <div className="container">
          <SectionHeading id="prizes-title" title="PRIZE POOL" kicker="What's on the table." />
          <div className="grid grid--3">
            {t.prizes.map((p) => (
              <PrizeCard prize={p} key={p.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="schedule-title">
        <div className="container">
          <SectionHeading id="schedule-title" title="SCHEDULE" />
          <ol className="timeline list-reset">
            {t.schedule.map((s) => (
              <li className="timeline__item" key={s.title}>
                <time dateTime={s.date}>{formatDate(s.date)}</time>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="rules-title">
        <div className="container prose">
          <SectionHeading id="rules-title" title="RULES" />
          <ul className="prose__list">
            {t.rules.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
          <p className="section-more">
            <Link className="text-link" href="/tournaments">
              ← All tournaments
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
