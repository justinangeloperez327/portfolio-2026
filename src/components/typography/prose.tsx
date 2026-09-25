import type { ReactNode } from "react";

type ProseProps = {
  children: ReactNode;
  className?: string;
};

export function Prose({ children, className = "" }: ProseProps) {
  return <div className={`type-prose ${className}`.trim()}>{children}</div>;
}
