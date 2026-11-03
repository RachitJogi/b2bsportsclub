import type { Fact } from "@/lib/content";
import Icon from "./Icon";

export default function FactStrip({ facts }: { facts: Fact[] }) {
  return (
    <section className="scoreboard" aria-label="Key facts">
      <div className="container">
        <dl className="scoreboard__grid">
          {facts.map(({ label, value, icon }) => (
            <div className="scoreboard__cell" key={label}>
              <dt className="scoreboard__label">
                <Icon name={icon} />
                {label.toUpperCase()}
              </dt>
              <dd className="scoreboard__value">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
