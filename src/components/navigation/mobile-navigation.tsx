import Link from "next/link";
import { siteConfig } from "@/config/site";

export function MobileNavigation() {
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
              <Link href={item.href}>{item.label}</Link>
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
