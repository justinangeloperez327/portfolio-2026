import type { ReactNode } from "react";

type DisplayHeadingProps = {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2";
};

export function DisplayHeading({
  children,
  className = "",
  as: Component = "h1",
}: DisplayHeadingProps) {
  return <Component className={`display ${className}`.trim()}>{children}</Component>;
}
