import Image from "next/image";
import Link from "next/link";
import { PrimaryNavigation } from "./primary-navigation";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="site-brand" href="/" aria-label="Justin Angelo Perez, home">
          <span className="site-brand__mark" aria-hidden="true">
            <Image
              src="/logo.png"
              alt=""
              fill
              sizes="80px"
              className="site-brand__logo"
            />
          </span>
        </Link>
        <PrimaryNavigation />
      </div>
    </header>
  );
}
