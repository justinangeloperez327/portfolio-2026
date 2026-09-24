import Link from "next/link";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container-page site-footer__inner">
        <div>
          <p className="eyebrow">Portfolio 2026</p>
          <p className="site-footer__name">{siteConfig.name}</p>
        </div>
        <nav aria-label="Footer navigation">
          <ul>
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="site-footer__location">{siteConfig.location}</p>
      </div>
    </footer>
  );
}
