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
        <div className="footer__brand">
          <Image src={logoMark} alt="" height={32} width={47} />
          <div>
            <strong>{site.name.toUpperCase()}</strong>
            <small>{site.tagline}</small>
          </div>
        </div>
        <nav aria-label="Footer">
          <ul className="footer__nav">
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
        <div className="footer__social">
          <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href={site.youtubeUrl} target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
        </div>
      </div>
      <p className="container footer__copy">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </p>
    </footer>
  );
}
