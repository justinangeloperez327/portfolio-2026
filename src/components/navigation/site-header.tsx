import Link from "next/link";
import { PrimaryNavigation } from "./primary-navigation";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="site-brand" href="/" aria-label="Justin Angelo Perez, home">
          <span>JAP</span><span className="site-brand__role">Justin Angelo Perez</span>
        </Link>
        <PrimaryNavigation />
      </div>
    </header>
  );
}
