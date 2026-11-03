import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Tournament, TournamentStatus } from "@/lib/content";
import { formatDate } from "@/lib/format";
import Icon from "./Icon";

export const STATUS_LABEL: Record<TournamentStatus, string> = {
  "registration-open": "Registrations open",
  upcoming: "Upcoming",
  completed: "Completed",
};

export default function TournamentCard({ tournament }: { tournament: Tournament }) {
  const { slug, name, summary, status, startDate, venue, city, teams, sport } = tournament;
  return (
    <article className="card">
      <div className="card__top">
        <span className={`badge${status === "registration-open" ? " badge--accent" : ""}`}>
          {STATUS_LABEL[status].toUpperCase()}
        </span>
        <span className="card__meta">{sport}</span>
      </div>
      <h3 className="card__title">
        <Link href={`/tournaments/${slug}`} className="card__link">
          {name}
        </Link>
      </h3>
      <p className="card__text">{summary}</p>
      <ul className="card__facts">
        <li>
          <Icon name="calendar" />
          <time dateTime={startDate}>{formatDate(startDate)}</time>
        </li>
        <li>
          <Icon name="map-pin" />
          {venue}, {city}
        </li>
        <li>
          <Icon name="users" />
          {teams} teams
        </li>
      </ul>
      <span className="card__cta" aria-hidden="true">
        View tournament <ArrowRight />
      </span>
    </article>
  );
}
