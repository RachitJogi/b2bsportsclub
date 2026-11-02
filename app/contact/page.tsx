import PageHero from "@/components/ui/PageHero";
import Icon from "@/components/ui/Icon";
import { getSiteSettings } from "@/lib/content";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact us",
  description:
    "Get in touch with the B2B Sports Club organisers for registrations, sponsorships and tournament queries.",
  path: "/contact",
});

export default async function ContactPage() {
  const site = await getSiteSettings();
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk"
        description="Questions about registration, sponsorship or tournament day? Reach out to the organisers directly."
      />
      <section className="section" aria-label="Contact details">
        <div className="container">
          <ul className="grid grid--3 list-reset">
            {site.contacts.map((c) => (
              <li className="feature" key={c.tel}>
                <div className="broadcast__icon">
                  <Icon name="phone" />
                </div>
                <h3>{c.name}</h3>
                <p>
                  <a className="text-link" href={`tel:${c.tel}`}>
                    {c.phone}
                  </a>
                </p>
              </li>
            ))}
            <li className="feature">
              <div className="broadcast__icon">
                <Icon name="mail" />
              </div>
              <h3>Email</h3>
              <p>
                <a className="text-link" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </p>
            </li>
            <li className="feature">
              <div className="broadcast__icon">
                <Icon name="camera" />
              </div>
              <h3>Instagram</h3>
              <p>
                <a className="text-link" href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
                  Follow our match-day stories
                </a>
              </p>
            </li>
            <li className="feature">
              <div className="broadcast__icon">
                <Icon name="play" />
              </div>
              <h3>YouTube</h3>
              <p>
                <a className="text-link" href={site.youtubeUrl} target="_blank" rel="noopener noreferrer">
                  Watch live broadcasts
                </a>
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
