import type { Prize } from "@/lib/content";
import Icon from "./Icon";

export default function PrizeCard({ prize }: { prize: Prize }) {
  const { title, amount, badge, icon, tier } = prize;
  const variant = tier === "award" ? "award" : tier;
  return (
    <article className={`prize-card prize-card--${variant}`}>
      <div className="prize-card__head">
        <div className="prize-card__icon">
          <Icon name={icon} />
        </div>
        <span className={`badge${tier === "gold" ? " badge--accent" : ""}`}>
          {badge.toUpperCase()}
        </span>
      </div>
      <h3 className="prize-card__title">{title}</h3>
      <p className="prize-card__amount gradient-text">{amount}</p>
    </article>
  );
}
