import Link from "next/link";
import { siteConfig } from "@/config/site";

export function PrimaryNavigation() {
  return (
    <nav className="primary-navigation" aria-label="Primary navigation">
      <ul>
        {siteConfig.navigation.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
