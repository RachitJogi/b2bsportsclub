import PageHero from "@/components/ui/PageHero";
import TournamentCard from "@/components/ui/TournamentCard";
import { getTournaments } from "@/lib/content";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Tournaments",
  description:
    "Browse B2B Sports Club tournaments — current registrations, prize pools, venues and past chapters.",
  path: "/tournaments",
});

export default async function TournamentsPage() {
  const tournaments = await getTournaments();
  return (
    <>
      <PageHero
        eyebrow="Tournaments"
        title="Every chapter. One club."
        description="Find your next tournament, check the prize pool and register your team."
      />
      <section className="section" aria-label="All tournaments">
        <div className="container grid grid--2">
          {tournaments.map((t) => (
            <TournamentCard tournament={t} key={t.slug} />
          ))}
        </div>
      </section>
    </>
  );
}
