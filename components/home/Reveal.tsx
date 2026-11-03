import type { CSSProperties, ElementType, ReactNode } from "react";

interface Props {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Reveal style. */
  fx?: "up" | "left" | "right" | "zoom";
  /** Index used to stagger siblings. */
  i?: number;
}

/**
 * Wraps content with a scroll-driven reveal. Rendering is plain server HTML;
 * the animation is pure CSS (animation-timeline: view()) and only applies
 * where supported and motion is allowed, so content is always visible.
 */
export default function Reveal({ children, as: Tag = "div", className = "", fx = "up", i = 0 }: Props) {
  return (
    <Tag className={`fx fx--${fx} ${className}`.trim()} style={{ "--i": i } as CSSProperties}>
      {children}
    </Tag>
  );
}
