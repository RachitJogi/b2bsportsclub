import Image from "next/image";
import Link from "next/link";
import logoMark from "@/public/logo-mark.png";
import { getSiteSettings } from "@/lib/content";
import { NAV_LINKS } from "@/lib/site";

export default async function Footer() {
  const site = await getSiteSettings();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__col">
          <div className="footer__brand">
            <Image src={logoMark} alt="" height={28} width={41} />
            <span>{site.name.toUpperCase()}</span>
          </div>
          <p className="footer__meta">{site.tagline}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="footer__links">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
            <li>
              <Link href="/register">Registration</Link>
            </li>
          </ul>
        </nav>
        <ul className="footer__links">
          <li>
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
          <li>
            <a href={site.youtubeUrl} target="_blank" rel="noopener noreferrer">
              YouTube
            </a>
          </li>
        </ul>
      </div>
      <p className="container footer__copy">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </p>
    </footer>
  );
}
