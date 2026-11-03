import Link from "next/link";
import type { EventItem } from "@/lib/content";
import { formatDate, getDay, getMonthShort } from "@/lib/format";
import Icon from "./Icon";

export default function EventCard({ event }: { event: EventItem }) {
  const { title, summary, date, time, venue, city, category, tournamentSlug, icon } = event;
  return (
    <article className="event">
      <div className="event__date" aria-hidden="true">
        <span className="event__day">{getDay(date)}</span>
        <span className="event__month">{getMonthShort(date).toUpperCase()}</span>
      </div>
      <div className="event__body">
        <div className="card__top">
          <span className="badge">{category.toUpperCase()}</span>
          <Icon name={icon} />
        </div>
        <h3 className="card__title">{title}</h3>
        <p className="card__text">{summary}</p>
        <p className="event__meta">
          <time dateTime={date}>{formatDate(date)}</time> · {time} · {venue}, {city}
        </p>
        {tournamentSlug && (
          <Link className="text-link" href={`/tournaments/${tournamentSlug}`}>
            View tournament →
          </Link>
        )}
      </div>
    </article>
  );
}
