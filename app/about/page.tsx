import Link from "next/link";

const principles = [
  {
    number: "01",
    title: "Pahami kebutuhan",
    description: "Setiap proyek dimulai dengan memahami tujuan, konteks, dan kebutuhan yang ingin diselesaikan.",
  },
  {
    number: "02",
    title: "Rancang solusi yang tepat",
    description: "Pilih pendekatan kreatif, teknis, dan produksi sesuai kebutuhan proyek, bukan sekadar mengikuti tren.",
  },
  {
    number: "03",
    title: "Wujudkan bersama",
    description: "Kerjakan proyek dengan komunikasi yang jelas, ruang diskusi, dan kesepakatan ruang lingkup sejak awal.",
  },
];

const capabilities = [
  {
    number: "01",
    label: "CREATIVE & BRANDING",
    title: "Identitas visual yang menyampaikan gagasan.",
    description: "Identitas visual, logo, desain grafis, packaging, dan kebutuhan komunikasi visual.",
    href: "/services/design",
    action: "Lihat layanan kreatif",
  },
  {
    number: "02",
    label: "IT & DIGITAL SOLUTIONS",
    title: "Teknologi yang sesuai kebutuhan proyek.",
    description: "Website bisnis, aplikasi, sistem internal, otomasi, dan kebutuhan implementasi IT sesuai proyek.",
    href: "/services/it",
    action: "Lihat layanan digital",
  },
  {
    number: "03",
    label: "PRINTING & MERCHANDISE",
    title: "Kebutuhan cetak untuk ide yang hadir secara fisik.",
    description: "Berbagai kebutuhan cetak dan merchandise untuk bisnis, promosi, acara, dan personal.",
    href: "/products",
    action: "Jelajahi produk",
  },
];

const collaborationPoints = [
  "Memahami kebutuhan sebelum menentukan solusi.",
  "Menyepakati ruang lingkup dan spesifikasi proyek.",
  "Mengomunikasikan progres dan kebutuhan revisi dengan jelas.",
  "Memastikan hasil akhir sesuai ruang lingkup yang disepakati.",
];

export default function AboutPage() {
  return (
    <>
      <main className="inner-page container about-page">
        <header className="about-page-hero">
          <div>
            <p className="section-eyebrow">TENTANG NEXKARA</p>
            <h1>Kami menghubungkan ide, desain, dan teknologi.</h1>
          </div>
          <p className="about-page-intro-copy">
            NEXKARA adalah studio kreatif dan digital yang membantu mewujudkan kebutuhan visual,
            produksi cetak, dan solusi teknologi melalui pendekatan yang kreatif, praktis, dan sesuai kebutuhan.
          </p>
        </header>

        <section className="about-approach" aria-labelledby="about-approach-title">
          <div className="about-section-heading">
            <div>
              <p className="section-eyebrow">PENDEKATAN KAMI</p>
              <h2 id="about-approach-title">Kreatif dalam berpikir. Praktis dalam mewujudkan.</h2>
            </div>
            <p>Kami mulai dengan memahami kebutuhan dan tujuanmu, lalu menentukan pendekatan yang paling sesuai sebelum desain, pengembangan, atau produksi dimulai.</p>
          </div>
          <ol className="about-approach-principles">
            {principles.map((principle) => (
              <li key={principle.number}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="about-capabilities" aria-labelledby="about-capabilities-title">
          <div className="about-section-heading about-capabilities-heading">
            <div>
              <p className="section-eyebrow">YANG KAMI KERJAKAN</p>
              <h2 id="about-capabilities-title">Tiga bidang, satu kolaborasi.</h2>
            </div>
            <p>Kebutuhan dapat berfokus pada satu bidang atau menghubungkan beberapa kemampuan sesuai konteks proyek.</p>
          </div>
          <div className="service-overview-list">
            {capabilities.map((capability) => (
              <article className="service-overview-item" key={capability.number}>
                <div className="service-overview-meta"><span>{capability.number}</span><p>{capability.label}</p></div>
                <div className="service-overview-main">
                  <h2>{capability.title}</h2>
                  <p className="service-overview-description">{capability.description}</p>
                  <Link className="service-overview-link" href={capability.href}>{capability.action}<span aria-hidden="true"> ↗</span></Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-collaboration" aria-labelledby="about-collaboration-title">
          <div className="about-collaboration-heading">
            <p className="section-eyebrow">PRINSIP KOLABORASI</p>
            <h2 id="about-collaboration-title">Kolaborasi yang jelas sejak awal.</h2>
          </div>
          <ul>{collaborationPoints.map((point) => <li key={point}><span aria-hidden="true" />{point}</li>)}</ul>
        </section>
      </main>

      <section className="contact-cta" aria-labelledby="about-contact-cta-title">
        <div className="container contact-cta-inner">
          <div className="contact-cta-copy">
            <p className="contact-cta-eyebrow">TENTANG NEXKARA · MULAI KOLABORASI</p>
            <h2 id="about-contact-cta-title">Mari wujudkan ide berikutnya.</h2>
          </div>
          <div className="contact-cta-action">
            <p>Punya kebutuhan desain, cetak, atau teknologi? Ceritakan rencanamu kepada NEXKARA.</p>
            <Link className="contact-cta-button" href="/contact">Mulai Proyek <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
