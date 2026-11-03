import CtaBanner from "@/components/ui/CtaBanner";
import Icon from "@/components/ui/Icon";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { getAboutContent } from "@/lib/content";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About us",
  description:
    "Learn about B2B Sports Club — a community of players running professional, high-energy cricket tournaments built on brotherhood.",
  path: "/about",
});

export default async function AboutPage() {
  const about = await getAboutContent();
  return (
    <>
      <PageHero eyebrow="About us" title={about.headline} />

      <section className="section" aria-labelledby="story-title">
        <div className="container prose">
          <h2 className="visually-hidden" id="story-title">Our story</h2>
          {about.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <blockquote className="prose__quote">{about.mission}</blockquote>
        </div>
      </section>

      <section className="scoreboard" aria-label="Club in numbers">
        <div className="container">
          <dl className="scoreboard__grid scoreboard__grid--3">
            {about.stats.map((s) => (
              <div className="scoreboard__cell" key={s.label}>
                <dt className="scoreboard__label">{s.label.toUpperCase()}</dt>
                <dd className="scoreboard__value">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section" aria-labelledby="values-title">
        <div className="container">
          <SectionHeading id="values-title" title="WHAT WE STAND FOR" />
          <ul className="grid grid--3 list-reset">
            {about.values.map((v) => (
              <li className="feature" key={v.title}>
                <div className="broadcast__icon">
                  <Icon name={v.icon} />
                </div>
                <h3>{v.title}</h3>
                <p>{v.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner
        title="Join the brotherhood."
        body="Bring your team and write the next chapter with us."
      />
    </>
  );
}
