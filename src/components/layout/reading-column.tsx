import type { ReactNode } from "react";

type ReadingColumnProps = {
  children: ReactNode;
  className?: string;
};

export function ReadingColumn({
  children,
  className = "",
}: ReadingColumnProps) {
  return (
    <div className={`reading-column ${className}`.trim()}>{children}</div>
  );
}
