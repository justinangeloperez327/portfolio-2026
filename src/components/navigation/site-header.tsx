import Link from "next/link";
import { siteConfig } from "@/config/site";
import { PrimaryNavigation } from "./primary-navigation";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container-page site-header__inner">
        <Link className="site-brand" href="/" aria-label="Justin Angelo Perez, home">
          <span>JAP</span>
          <span className="site-brand__role">{siteConfig.title}</span>
        </Link>
        <PrimaryNavigation />
      </div>
    </header>
  );
}
