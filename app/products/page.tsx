import Link from "next/link";

const productCategories = [
  {
    number: "01",
    name: "Media Promosi",
    description: "Media cetak untuk membantu menyampaikan informasi dan mendukung kebutuhan promosi.",
    products: ["Spanduk / Banner", "X-Banner", "Bendera", "Cetak A3+"],
    motif: "promotion",
  },
  {
    number: "02",
    name: "Stiker & Label",
    description: "Pilihan untuk identitas kemasan, informasi produk, dan kebutuhan segel.",
    products: ["Stiker Cutting", "Stiker Label Produk", "Stiker Kemasan", "Stiker Segel"],
    motif: "labels",
  },
  {
    number: "03",
    name: "Kartu & Stationery",
    description: "Kebutuhan cetak untuk komunikasi, undangan, serta penandaan sederhana.",
    products: ["Kartu Nama", "Undangan", "Stempel"],
    motif: "stationery",
  },
  {
    number: "04",
    name: "ID & Identitas",
    description: "Perlengkapan identitas untuk kegiatan, organisasi, dan kebutuhan operasional.",
    products: ["ID Card", "Lanyard"],
    motif: "identity",
  },
  {
    number: "05",
    name: "Apparel & Merchandise",
    description: "Pilihan produk untuk kebutuhan komunitas, acara, brand, dan personal.",
    products: ["Sablon Kaos", "Sablon Gelas / Mug", "Hang Tag"],
    motif: "merchandise",
  },
];

const orderingSteps = [
  ["01", "Pilih produk dan sampaikan kebutuhan."],
  ["02", "Konfirmasi ukuran, bahan, jumlah, desain, dan estimasi biaya."],
  ["03", "Setujui detail pesanan sebelum produksi dimulai."],
];

export default function ProductsPage() {
  return (
    <main className="inner-page container products-page">
      <section className="products-hero" aria-labelledby="products-title">
        <div className="products-hero-copy">
          <p className="section-eyebrow">PRINTING &amp; MERCHANDISE</p>
          <h1 id="products-title">Ide kreatif, diwujudkan dalam bentuk nyata.</h1>
          <p className="inner-page-lead">Temukan kebutuhan cetak untuk brand, bisnis, promosi, dan momen spesialmu. Kami membantu menyesuaikan produk dengan kebutuhan proyekmu.</p>
          <Link className="products-primary-cta" href="/contact">Konsultasikan Kebutuhan <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="products-hero-mark" aria-hidden="true"><span /><i /><b /></div>
      </section>

      <section className="product-catalog" aria-labelledby="product-catalog-title">
        <div className="product-section-heading">
          <div><p className="section-eyebrow">PILIHAN PRODUK</p><h2 id="product-catalog-title">Cetak untuk berbagai kebutuhan.</h2></div>
          <p>Dari materi promosi sampai detail kemasan dan merchandise, pilihan produk dapat dibahas sesuai tujuan dan spesifikasi yang kamu perlukan.</p>
        </div>
        <div className="product-category-grid">
          {productCategories.map((category) => (
            <article className="product-category-card" key={category.number}>
              <div className={`product-category-visual product-category-visual--${category.motif}`} aria-hidden="true">
                <span className="product-visual-index">{category.number} / PRINT</span>
                <i /><b /><em />
              </div>
              <div className="product-category-content">
                <p className="product-category-number">{category.number}</p>
                <h3>{category.name}</h3>
                <p className="product-category-description">{category.description}</p>
                <ul>{category.products.map((product) => <li key={product}>{product}</li>)}</ul>
                <Link href="/contact" className="product-category-cta">Konsultasikan kategori <span aria-hidden="true">↗</span></Link>
              </div>
            </article>
          ))}
        </div>
        <p className="product-availability-note">Pilihan produk, spesifikasi, dan ketersediaan dikonfirmasi saat konsultasi.</p>
      </section>

      <section className="product-ordering" aria-labelledby="product-ordering-title">
        <div className="product-ordering-intro"><p className="section-eyebrow">CARA PEMESANAN</p><h2 id="product-ordering-title">Detail jelas sebelum produksi.</h2><p>Kita menyepakati kebutuhan dan spesifikasi bersama sebelum pesanan diteruskan ke proses produksi.</p></div>
        <ol>{orderingSteps.map(([number, description]) => <li key={number}><span>{number}</span><p>{description}</p></li>)}</ol>
        <p className="product-ordering-note">Spesifikasi akhir, harga, waktu produksi, dan ketersediaan dikonfirmasi sebelum pesanan diterima.</p>
      </section>

      <section className="product-business" aria-labelledby="product-business-title">
        <p className="section-eyebrow">UNTUK BRAND &amp; BISNIS</p>
        <div><h2 id="product-business-title">Kebutuhan usaha, acara, hingga personal.</h2><p>UMKM, pemilik brand, perusahaan, organisasi, penyelenggara acara, dan pelanggan personal dapat mendiskusikan kebutuhan seperti label kemasan, materi promosi, ID card untuk karyawan atau acara, serta merchandise bisnis.</p></div>
      </section>

      <section className="product-final-cta" aria-labelledby="product-final-cta-title">
        <p className="section-eyebrow">PRINTING &amp; MERCHANDISE</p>
        <div><h2 id="product-final-cta-title">Belum yakin harus cetak apa?</h2><p>Ceritakan kebutuhanmu. Kita bisa menentukan produk dan spesifikasi yang paling sesuai bersama-sama.</p></div>
        <Link href="/contact">Diskusikan Kebutuhanmu <span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  );
}
