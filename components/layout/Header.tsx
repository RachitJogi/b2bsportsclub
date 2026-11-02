"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import logoMark from "@/public/logo-mark.png";
import { NAV_LINKS } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="topbar">
      <div className="topbar__inner">
        <Link href="/" className="topbar__brand" aria-label="B2B Sports Club home">
          <Image src={logoMark} alt="" height={32} width={46} priority />
          B2B SPORTS CLUB
        </Link>

        <button
          type="button"
          className="topbar__toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <nav
          id="primary-nav"
          className={`nav${open ? " nav--open" : ""}`}
          aria-label="Primary"
        >
          <ul className="nav__list">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="nav__link"
                  onClick={() => setOpen(false)}
                  aria-current={isActive(href) ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/register" className="btn btn--primary nav__cta"
            onClick={() => setOpen(false)}>
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
}
