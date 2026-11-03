import Image from "next/image";
import Link from "next/link";
import HeroArt from "@/components/home/HeroArt";
import Reveal from "@/components/home/Reveal";
import Icon from "@/components/ui/Icon";
import { getHomeStory } from "@/lib/content";
import { pageMetadata } from "@/lib/site";
import logo from "@/public/logo.png";
import "./home.css";

export const revalidate = 3600;

export const metadata = pageMetadata({
  title: "B2B Sports Club — Mumbai's turf cricket community",
  description:
    "B2B Sports Club is a Mumbai-based turf cricket community organizing tournaments, leagues and player auctions. Path to Glory – Chapter 2 is coming on 28 November 2026.",
  path: "/",
});

export default async function HomePage() {
  const s = await getHomeStory();
  const { hero, welcome, brotherhood, journey, comingSoon, why, final } = s;
  const ticker = Array.from({ length: 6 }, () => welcome.banner);

  return (
    <>
      {/* 1 — Hero */}
      <section className="hero-full" aria-labelledby="hero-title">
        <HeroArt />
        <div className="container hero-full__inner">
          <Image src={logo} alt="B2B Sports Club crest" className="hero-full__crest" priority />
          <span className="hero-full__brand">{hero.brand.toUpperCase()}</span>
          <h1 id="hero-title">
            {hero.title}
            <br />
            <span className="gradient-text">{hero.highlight}</span>
          </h1>
          <p className="hero-full__tagline">{hero.tagline}</p>
          <div className="hero-full__actions">
            <Link className="btn btn--primary" href={`/tournaments/${comingSoon.tournamentSlug}`}>
              Path to Glory – Chapter 2
            </Link>
            <Link className="btn btn--ghost" href="/about">
              About the club
            </Link>
          </div>
        </div>
        <span className="hero-full__cue" aria-hidden="true">
          <i />
        </span>
      </section>

      {/* 2 — Welcome */}
      <section className="hs hs--welcome" aria-labelledby="welcome-title">
        <div className="container">
          <div className="welcome">
            <Reveal fx="left" className="welcome__copy">
              <h2 id="welcome-title" className="welcome__lead">
                {welcome.paragraphs[0]}
              </h2>
              <p className="hs__text">{welcome.paragraphs[1]}</p>
            </Reveal>
            <ol className="welcome__refrain list-reset">
              {welcome.refrain.map((line, i) => (
                <Reveal as="li" fx="right" i={i} key={line} className="refrain">
                  <span className="refrain__n">{String(i + 1).padStart(2, "0")}</span>
                  {line}
                </Reveal>
              ))}
            </ol>
          </div>
          <Reveal as="p" className="welcome__closing">
            {welcome.closing}
          </Reveal>
        </div>
        <div className="ticker" role="note" aria-label={welcome.banner}>
          <div className="ticker__track" aria-hidden="true">
            {ticker.map((t, i) => (
              <span key={i}>
                {t}
                <b>◆</b>
              </span>
            ))}
          </div>
          <span className="sr-only">{welcome.banner}</span>
        </div>
      </section>

      {/* 3 — Brotherhood */}
      <section className="hs hs--raised" aria-labelledby="brotherhood-title">
        <div className="hs__bg hs__bg--a" aria-hidden="true" />
        <div className="container">
          <Reveal className="hs__head">
            <h2 id="brotherhood-title" className="hs__title">
              {brotherhood.title}
            </h2>
            <div className="hs__cols">
              {brotherhood.paragraphs.map((p) => (
                <p className="hs__text" key={p}>
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal as="h3" className="hs__subtitle">
            {brotherhood.pointsTitle}
          </Reveal>
          <ul className="points list-reset">
            {brotherhood.points.map((p, i) => (
              <Reveal as="li" fx="zoom" i={i} key={p.title} className="point">
                <span className="point__n">{String(i + 1).padStart(2, "0")}</span>
                <span className="point__icon">
                  <Icon name={p.icon} />
                </span>
                <h4>{p.title}</h4>
                <p>{p.description}</p>
              </Reveal>
            ))}
          </ul>
          <Reveal as="p" className="hs__pull">
            {brotherhood.closing}
          </Reveal>
        </div>
      </section>

      {/* 4 — Journey */}
      <section className="hs" aria-labelledby="journey-title">
        <div className="container journey">
          <div className="journey__side">
            <Reveal>
              <h2 id="journey-title" className="hs__title">
                {journey.title}
              </h2>
              <p className="journey__intro">{journey.intro}</p>
            </Reveal>
          </div>
          <div className="journey__main">
            <ol className="timeline list-reset">
              {journey.milestones.map((m, i) => (
                <Reveal as="li" fx="right" i={i} key={m.label} className="milestone">
                  <span className="milestone__icon">
                    <Icon name={m.icon} />
                  </span>
                  <div>
                    <span className="milestone__label">{m.label}</span>
                    <h3>{m.title}</h3>
                    <p>{m.description}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
            {journey.paragraphs.map((p) => (
              <Reveal as="p" className="hs__text" key={p}>
                {p}
              </Reveal>
            ))}
            <ul className="journey__closing list-reset">
              {journey.closing.map((c, i) => (
                <Reveal as="li" i={i} key={c} className="gradient-text">
                  {c}
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5 — Coming soon */}
      <section className="hs hs--poster" aria-labelledby="coming-title">
        <div className="poster__glow" aria-hidden="true" />
        <div className="container">
          <Reveal className="poster__head">
            <span className="poster__tag">{comingSoon.tagline}</span>
            <h2 id="coming-title" className="hs__title hs__title--xl">
              {comingSoon.title}
            </h2>
            <p className="poster__sub gradient-text">{comingSoon.subtitle}</p>
          </Reveal>
          <div className="hs__cols">
            {comingSoon.paragraphs.map((p, i) => (
              <Reveal as="p" i={i} className="hs__text" key={p}>
                {p}
              </Reveal>
            ))}
          </div>
          <Reveal as="h3" className="hs__subtitle">
            {comingSoon.highlightsTitle}
          </Reveal>
          <ul className="highlights list-reset">
            {comingSoon.highlights.map((h, i) => (
              <Reveal as="li" fx="zoom" i={i % 4} key={h.label} className="highlight">
                <span className="highlight__icon">
                  <Icon name={h.icon} />
                </span>
                <span className="highlight__label">{h.label}</span>
                <strong>{h.value}</strong>
              </Reveal>
            ))}
          </ul>
          <Reveal className="poster__foot">
            <h3>{comingSoon.closingTitle}</h3>
            <p>{comingSoon.closing}</p>
            <Link className="btn btn--primary" href={`/tournaments/${comingSoon.tournamentSlug}`}>
              View tournament details
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 6 — Why B2B */}
      <section className="hs hs--raised" aria-labelledby="why-title">
        <div className="hs__bg hs__bg--b" aria-hidden="true" />
        <div className="container why">
          <Reveal fx="left" className="why__copy">
            <h2 id="why-title" className="hs__title">
              {why.title}
            </h2>
            <p className="why__sub gradient-text">{why.subtitle}</p>
            {why.paragraphs.map((p) => (
              <p className="hs__text" key={p}>
                {p}
              </p>
            ))}
            <ul className="chips list-reset" aria-label="What we bring together">
              {why.elements.map((e) => (
                <li key={e.title}>
                  <Icon name={e.icon} />
                  {e.title}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal fx="right" className="mission">
            <span className="mission__label">{why.missionLabel}</span>
            <blockquote>{why.mission}</blockquote>
          </Reveal>
        </div>
      </section>

      {/* Closing section */}
      <section className="finale" aria-labelledby="final-title">
        <div className="finale__ring" aria-hidden="true" />
        <div className="container finale__inner">
          <Reveal as="h2" className="finale__title">
            <span id="final-title" className="gradient-text">
              {final.title}
            </span>
          </Reveal>
          {final.paragraphs.map((p) => (
            <Reveal as="p" className="hs__text" key={p}>
              {p}
            </Reveal>
          ))}
          <Reveal as="p" className="finale__actions-text">
            {final.actions}
          </Reveal>
          <Reveal className="finale__buttons">
            <Link className="btn btn--primary" href="/tournaments">
              Explore tournaments
            </Link>
            <Link className="btn btn--ghost" href="/contact">
              Join the community
            </Link>
          </Reveal>
          <Reveal as="p" className="finale__signoff">
            {final.signoff}
          </Reveal>
        </div>
      </section>
    </>
  );
}
