import Image from "next/image";
import Link from "next/link";
import CtaBanner from "@/components/ui/CtaBanner";
import EventCard from "@/components/ui/EventCard";
import FactStrip from "@/components/ui/FactStrip";
import Icon from "@/components/ui/Icon";
import PrizeCard from "@/components/ui/PrizeCard";
import SectionHeading from "@/components/ui/SectionHeading";
import TournamentCard from "@/components/ui/TournamentCard";
import {
  getFeaturedTournament,
  getHomeContent,
  getTournaments,
  getUpcomingEvents,
} from "@/lib/content";
import { pageMetadata } from "@/lib/site";
import logo from "@/public/logo.png";

export const revalidate = 3600;

export const metadata = pageMetadata({
  title: "B2B Sports Club — Cricket tournaments, auctions & events",
  description:
    "Register your team for Path to Glory, B2B Sports Club's flagship cricket tournament with live auctions, icon players and a ₹3,50,000 prize pool.",
  path: "/",
});

export default async function HomePage() {
  const [home, featured, tournaments, events] = await Promise.all([
    getHomeContent(),
    getFeaturedTournament(),
    getTournaments(),
    getUpcomingEvents(),
  ]);

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__glow" aria-hidden="true" />
        <div className="container hero__inner">
          <Image src={logo} alt="B2B Sports Club crest" className="hero__crest" priority />
          <span className="hero__chapter">{home.heroEyebrow.toUpperCase()}</span>
          <h1 id="hero-title">
            {home.heroTitle}
            <br />
            <span className="gradient-text">{home.heroHighlight}</span>
          </h1>
          <p className="hero__body">{home.heroBody}</p>
          <div className="hero__actions">
            <Link className="btn btn--primary" href="/register">
              Register now
            </Link>
            <Link className="btn btn--ghost" href="/tournaments">
              Explore tournaments
            </Link>
          </div>
        </div>
      </section>

      {featured && <FactStrip facts={featured.facts} />}

      <section className="section" aria-labelledby="features-title">
        <div className="container">
          <SectionHeading
            id="features-title"
            title="WHY PLAY WITH B2B"
            kicker="A tournament experience, not just a match."
          />
          <ul className="grid grid--4 list-reset">
            {home.features.map((f) => (
              <li className="feature" key={f.title}>
                <div className="broadcast__icon">
                  <Icon name={f.icon} />
                </div>
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="steps-title">
        <div className="container">
          <SectionHeading id="steps-title" title="HOW IT WORKS" kicker="Three steps to the turf." />
          <ol className="grid grid--3 list-reset">
            {home.steps.map((s, i) => (
              <li className="step" key={s.title}>
                <span className="step__index">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {featured && (
        <section className="section" aria-labelledby="prizes-title">
          <div className="container">
            <SectionHeading
              id="prizes-title"
              title="THE GLORY HAS A PRICE"
              kicker={`What's on the table at ${featured.name}.`}
            />
            <div className="grid grid--3 list-reset">
              {featured.prizes.slice(0, 3).map((p) => (
                <PrizeCard prize={p} key={p.title} />
              ))}
            </div>
            <p className="section-more">
              <Link className="text-link" href={`/tournaments/${featured.slug}`}>
                See all prizes →
              </Link>
            </p>
          </div>
        </section>
      )}

      <section className="section" aria-labelledby="tournaments-title">
        <div className="container">
          <SectionHeading id="tournaments-title" title="TOURNAMENTS" kicker="Past and present chapters." />
          <div className="grid grid--2">
            {tournaments.slice(0, 2).map((t) => (
              <TournamentCard tournament={t} key={t.slug} />
            ))}
          </div>
          <p className="section-more">
            <Link className="text-link" href="/tournaments">
              All tournaments →
            </Link>
          </p>
        </div>
      </section>

      {events.length > 0 && (
        <section className="section" aria-labelledby="events-title">
          <div className="container">
            <SectionHeading id="events-title" title="UPCOMING EVENTS" kicker="Mark your calendar." />
            <div className="stack">
              {events.slice(0, 3).map((e) => (
                <EventCard event={e} key={e.slug} />
              ))}
            </div>
            <p className="section-more">
              <Link className="text-link" href="/events">
                All events →
              </Link>
            </p>
          </div>
        </section>
      )}

      <CtaBanner title={home.ctaTitle} body={home.ctaBody} />
    </>
  );
}
