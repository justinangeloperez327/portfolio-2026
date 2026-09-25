"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";

function isCurrentRoute(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function PrimaryNavigation() {
  const pathname = usePathname();

  return (
    <nav className="primary-navigation" aria-label="Primary navigation">
      <ul>
        {siteConfig.navigation.map((item) => {
          const active = isCurrentRoute(pathname, item.href);

          return (
            <li key={item.href}>
              <Link href={item.href} aria-current={active ? "page" : undefined}>
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
        <li className="primary-navigation__external">
          <a href={siteConfig.social.github} target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
