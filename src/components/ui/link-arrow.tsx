import Link from "next/link";
import type { ReactNode } from "react";

type LinkArrowProps = {
  children: ReactNode;
  href: string;
  className?: string;
};

export function LinkArrow({ children, href, className = "" }: LinkArrowProps) {
  return (
    <Link className={`link-arrow ${className}`.trim()} href={href}>
      <span>{children}</span>
      <span aria-hidden="true">↗</span>
    </Link>
  );
}
