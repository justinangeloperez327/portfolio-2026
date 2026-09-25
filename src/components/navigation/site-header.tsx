import Link from "next/link";
import { PrimaryNavigation } from "./primary-navigation";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="site-brand" href="/" aria-label="Justin Angelo Perez, home">
          <img
            src="/logo.png"
            alt=""
            className="site-brand__logo"
            aria-hidden="true"
          />
        </Link>
        <PrimaryNavigation />
      </div>
    </header>
  );
}
