import type { ReactNode } from "react";

type SplitLayoutProps = {
  primary: ReactNode;
  secondary: ReactNode;
  className?: string;
};

export function SplitLayout({
  primary,
  secondary,
  className = "",
}: SplitLayoutProps) {
  return (
    <div className={`split-layout ${className}`.trim()}>
      <div className="split-layout__primary">{primary}</div>
      <aside className="split-layout__secondary">{secondary}</aside>
    </div>
  );
}
