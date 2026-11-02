import type { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

export default function PageHero({ eyebrow, title, description, children }: Props) {
  return (
    <section className="page-hero" aria-labelledby="page-title">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container page-hero__inner">
        {eyebrow && <span className="eyebrow">{eyebrow.toUpperCase()}</span>}
        <h1 id="page-title">{title}</h1>
        {description && <p className="page-hero__lede">{description}</p>}
        {children}
      </div>
    </section>
  );
}
