import type { ReactNode } from "react";

type LedeProps = {
  children: ReactNode;
  className?: string;
};

export function Lede({ children, className = "" }: LedeProps) {
  return <p className={`type-lede ${className}`.trim()}>{children}</p>;
}
