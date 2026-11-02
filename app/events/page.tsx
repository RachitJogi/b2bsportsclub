import EventCard from "@/components/ui/EventCard";
import PageHero from "@/components/ui/PageHero";
import { getUpcomingEvents } from "@/lib/content";
import { pageMetadata } from "@/lib/site";

export const revalidate = 3600;

export const metadata = pageMetadata({
  title: "Upcoming events",
  description:
    "Auctions, tournament days and community meetups — see what's coming up at B2B Sports Club.",
  path: "/events",
});

export default async function EventsPage() {
  const events = await getUpcomingEvents();
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Upcoming events"
        description="Auctions, match days and meetups — mark your calendar."
      />
      <section className="section" aria-label="Events list">
        <div className="container">
          {events.length === 0 ? (
            <p className="section-lede">No upcoming events right now. Check back soon.</p>
          ) : (
            <div className="stack">
              {events.map((e) => (
                <EventCard event={e} key={e.slug} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
