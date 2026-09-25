"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";

function isCurrentRoute(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileNavigation() {
  const pathname = usePathname();

  return (
    <details className="mobile-navigation">
      <summary aria-label="Open navigation">
        <span>Menu</span>
        <span aria-hidden="true">＋</span>
      </summary>
      <nav aria-label="Mobile navigation">
        <ul>
          {siteConfig.navigation.map((item, index) => (
            <li key={item.href}>
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <Link
                href={item.href}
                aria-current={isCurrentRoute(pathname, item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <span aria-hidden="true">05</span>
            <a href={siteConfig.social.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </li>
        </ul>
      </nav>
    </details>
  );
}
