import Link from "next/link";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-title">JUSTIN<br />ANGELO<br />PEREZ</div>
      <div className="site-footer__inner">
        <div><span>Software Developer</span><span>{siteConfig.location}</span></div>
        <nav aria-label="Footer navigation"><ul>{siteConfig.navigation.map((item) => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}</ul></nav>
        <div className="footer-meta"><a href="https://github.com/justinangeloperez327" target="_blank" rel="noreferrer">GitHub ↗</a><span>© 2026</span></div>
      </div>
    </footer>
  );
}
