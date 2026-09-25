import type { ReactNode } from "react";

type TechnicalLabelProps = {
  children: ReactNode;
  className?: string;
};

export function TechnicalLabel({
  children,
  className = "",
}: TechnicalLabelProps) {
  return (
    <span className={`type-technical-label ${className}`.trim()}>
      {children}
    </span>
  );
}
