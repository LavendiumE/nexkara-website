import Link from "next/link";
import PageIntro from "@/components/site/PageIntro";

const serviceGroups = [
  {
    number: "01",
    label: "CREATIVE & BRANDING",
    title: "Identitas yang terasa khas.",
    description: "Menerjemahkan karakter dan gagasan menjadi bahasa visual yang jelas dan konsisten.",
    items: ["Logo dan identitas visual", "Desain grafis", "Desain kemasan dan label", "Kebutuhan desain kreatif lainnya"],
    href: "/services/design",
    action: "Lihat layanan Creative & Branding",
  },
  {
    number: "02",
    label: "IT & DIGITAL SOLUTIONS",
    title: "Teknologi untuk alur kerja nyata.",
    description: "Menyusun solusi digital sesuai tujuan, pengguna, dan kebutuhan operasional proyek.",
    items: ["Website bisnis", "Aplikasi web dan sistem internal", "Otomatisasi dan integrasi sistem", "Deployment dan infrastruktur IT sesuai kebutuhan"],
    href: "/services/it",
    action: "Lihat layanan IT & Digital",
  },
  {
    number: "03",
    label: "PRINTING & MERCHANDISE",
    title: "Dari desain menuju bentuk fisik.",
    description: "Mendukung kebutuhan produksi cetak dan merchandise sebagai bagian dari proyek.",
    items: ["Stiker dan label produk", "Banner", "Apparel dan merchandise"],
    href: "/products",
    action: "Jelajahi Printing & Merchandise",
  },
];

const process = [
  ["01", "Pahami kebutuhan", "Kita mulai dengan tujuan, konteks, dan ruang lingkup yang ingin dicapai."],
  ["02", "Rancang pendekatan", "Konsep, kebutuhan teknis atau produksi, biaya, dan jadwal dibahas bersama."],
  ["03", "Wujudkan bersama", "Pengerjaan dan komunikasi berjalan mengikuti kesepakatan proyek."],
];

export default function ServicesPage() {
  return (
    <main className="inner-page container services-overview">
      <PageIntro
        eyebrow="LAYANAN NEXKARA"
        title="Solusi untuk ide yang ingin diwujudkan."
        description="Dari identitas visual hingga sistem digital dan kebutuhan produksi, kami membantu menentukan pendekatan yang sesuai dengan kebutuhan proyek."
      />

      <section className="service-overview-list" aria-label="Kategori layanan">
        {serviceGroups.map((service) => (
          <article className="service-overview-item" key={service.number}>
            <div className="service-overview-meta">
              <span>{service.number}</span>
              <p>{service.label}</p>
            </div>
            <div className="service-overview-main">
              <h2>{service.title}</h2>
              <p className="service-overview-description">{service.description}</p>
              <ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
              <Link className="service-overview-link" href={service.href}>{service.action}<span aria-hidden="true"> ↗</span></Link>
            </div>
          </article>
        ))}
      </section>

      <section className="services-process" aria-labelledby="services-process-title">
        <div className="services-process-heading">
          <p className="section-eyebrow">CARA KAMI BEKERJA</p>
          <h2 id="services-process-title">Jelas sejak awal, kolaboratif dalam proses.</h2>
        </div>
        <ol>{process.map(([number, title, description]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}</ol>
      </section>

      <section className="services-contact-cta" aria-labelledby="services-contact-title">
        <p className="section-eyebrow">MULAI KOLABORASI</p>
        <div><h2 id="services-contact-title">Punya kebutuhan yang ingin dibahas?</h2><p>Ceritakan gambaran proyekmu dan kita cari pendekatan yang paling sesuai.</p></div>
        <Link href="/contact">Diskusikan proyek <span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  );
}
