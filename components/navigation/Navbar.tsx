import Image from "next/image";

const navItems = [
  {
    label: "Layanan",
    href: "/services",
    dropdown: [
      {
        label: "Desain",
        href: "/services/design",
      },
      {
        label: "IT",
        href: "/services/it",
      },
    ],
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
  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <a href="/" className="navbar-logo" aria-label="NEXKARA">
          <Image
            src="/images/nexkara-logo.png"
            alt="NEXKARA Studio"
            width={150}
            height={48}
            priority
          />
        </a>

        <div className="navbar-links">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              <span>{item.label}</span>

              {item.dropdown && (
                <span className="navbar-chevron" aria-hidden="true">
                  ↓
                </span>
              )}
            </a>
          ))}
        </div>

        <a href="/contact" className="navbar-contact">
          Kontak
        </a>

        <button className="navbar-menu" aria-label="Buka menu">
          Menu
        </button>
      </nav>
    </header>
  );
}