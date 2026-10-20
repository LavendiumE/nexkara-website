import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer-main">
          <div className="site-footer-brand">
            <Link href="/" className="site-footer-logo" aria-label="NEXKARA Studio, beranda">
              <Image className="site-footer-symbol" src="/images/nexkara.png" alt="" width={649} height={649} />
              <Image className="site-footer-wordmark" src="/images/nexkara-logo.png" alt="NEXKARA Studio" width={186} height={27} />
            </Link>
            <p>Ide, desain, produk, dan teknologi dalam satu kolaborasi.</p>
          </div>
          <nav className="site-footer-navigation" aria-label="Navigasi footer">
            <p className="site-footer-heading">Jelajahi</p>
            <ul>
              <li><Link href="/services">Layanan</Link></li><li><Link href="/products">Produk</Link></li>
              <li><Link href="/portfolio">Portofolio</Link></li><li><Link href="/about">Tentang</Link></li>
              <li><Link href="/blog">Blog</Link></li><li><Link href="/contact">Kontak</Link></li>
            </ul>
          </nav>
        </div>
        <div className="site-footer-bottom"><p>© 2026 NEXKARA Studio</p><p>Made with intention.</p></div>
      </div>
    </footer>
  );
}
