import Link from "next/link";
import { siteConfig } from "@/config/site";
import { BrushDivider, RedSeal } from "@/components/visual";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <BrushDivider className="site-footer__brush" />
      <div className="site-footer__top">
        <div>
          <span className="site-footer__eyebrow">Software Developer · Portfolio 2026</span>
          <p className="footer-title"><span>Justin</span><span>Angelo Perez</span></p>
        </div>
        <RedSeal />
      </div>

      <div className="site-footer__inner">
        <div className="site-footer__identity">
          <span>{siteConfig.title}</span>
          <span>{siteConfig.location}</span>
        </div>

        <nav aria-label="Footer navigation">
          <ul>
            {siteConfig.navigation.map((item) => (
              <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
            ))}
          </ul>
        </nav>

        <div className="footer-meta">
          <a href={siteConfig.social.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href={siteConfig.social.email}>Email ↗</a>
          <span>© 2026</span>
        </div>
      </div>
    </footer>
  );
}
