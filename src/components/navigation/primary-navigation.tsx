import Link from "next/link";
import { siteConfig } from "@/config/site";

export function PrimaryNavigation() {
  return (
    <nav className="primary-navigation" aria-label="Primary navigation">
      <ul>
        {siteConfig.navigation.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
        <li className="primary-navigation__external">
          <a href={siteConfig.social.github} target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
