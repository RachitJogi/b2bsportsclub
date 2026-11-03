interface Props {
  title: string;
  kicker?: string;
  lede?: string;
  as?: "h1" | "h2";
  id?: string;
}

export default function SectionHeading({ title, kicker, lede, as: Tag = "h2", id }: Props) {
  return (
    <div className="section-head">
      <Tag className="section-heading" id={id}>
        {title}
      </Tag>
      {kicker && (
        <div className="section-kicker">
          <span className="eyebrow">{kicker}</span>
        </div>
      )}
      {lede && <p className="section-lede">{lede}</p>}
    </div>
  );
}
