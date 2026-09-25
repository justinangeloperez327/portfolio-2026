import type { ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode;
  className?: string;
  as?: "h2" | "h3";
};

export function SectionHeading({
  children,
  className = "",
  as: Component = "h2",
}: SectionHeadingProps) {
  return (
    <Component className={`type-section-heading ${className}`.trim()}>
      {children}
    </Component>
  );
}
