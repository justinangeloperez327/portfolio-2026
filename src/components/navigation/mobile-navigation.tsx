import Link from "next/link";
import { siteConfig } from "@/config/site";

export function MobileNavigation() {
  return (
    <details className="mobile-navigation">
      <summary>Menu</summary>
      <nav aria-label="Mobile navigation">
        <ul>
          {siteConfig.navigation.map((item, index) => (
            <li key={item.href}>
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </details>
  );
}
