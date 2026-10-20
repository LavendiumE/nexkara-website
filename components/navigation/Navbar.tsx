"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";

const navItems = [
  {
    label: "Layanan",
    href: "/services",
  },
  {
    label: "Produk",
    href: "/products",
  },
  {
    label: "Portofolio",
    href: "/portfolio",
  },
  {
    label: "Tentang",
    href: "/about",
  },
  {
    label: "Blog",
    href: "/blog",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  const closeMobileMenu = () => {
    mobileMenuRef.current?.removeAttribute("open");
  };

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <Link
          href="/"
          className="navbar-logo"
          aria-label="NEXKARA Studio, beranda"
          aria-current={pathname === "/" ? "page" : undefined}
          onClick={closeMobileMenu}
        >
          <Image
            src="/images/nexkara-logo.png"
            alt="NEXKARA Studio"
            width={150}
            height={48}
            priority
          />
        </Link>

        <div className="navbar-links">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="navbar-contact"
          aria-current={isActive("/contact") ? "page" : undefined}
        >
          Kontak
        </Link>

        <details className="navbar-mobile" ref={mobileMenuRef}>
          <summary className="navbar-menu" aria-label="Menu navigasi">
            Menu
          </summary>
          <div className="navbar-mobile-panel">
            {navItems.map((item) => (
              <div className="navbar-mobile-item" key={item.label}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              </div>
            ))}
            <Link
              href="/contact"
              className="navbar-mobile-contact"
              aria-current={isActive("/contact") ? "page" : undefined}
              onClick={closeMobileMenu}
            >
              Kontak
            </Link>
          </div>
        </details>
      </nav>
    </header>
  );
}
