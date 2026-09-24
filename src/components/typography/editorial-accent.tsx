import type { ReactNode } from "react";

type EditorialAccentProps = {
  children: ReactNode;
  className?: string;
};

export function EditorialAccent({
  children,
  className = "",
}: EditorialAccentProps) {
  return (
    <span className={`editorial-accent ${className}`.trim()}>{children}</span>
  );
}
