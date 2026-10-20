import PageIntro from "@/components/site/PageIntro";
import InquiryForm from "@/components/contact/InquiryForm";

const nextSteps = [
  "Kamu menyampaikan kebutuhan proyek.",
  "NEXKARA mempelajari kebutuhan dan ruang lingkupnya.",
  "Kita mendiskusikan solusi, spesifikasi, dan langkah berikutnya.",
];

export default function ContactPage() {
  return (
    <main className="inner-page container contact-page">
      <PageIntro
        eyebrow="HUBUNGI NEXKARA"
        title="Punya ide atau kebutuhan proyek?"
        description="Ceritakan apa yang ingin kamu wujudkan. Kami akan membantu memahami kebutuhanmu dan mendiskusikan langkah berikutnya."
      />

      <section className="contact-inquiry" aria-labelledby="contact-inquiry-title">
        <div className="contact-inquiry-aside">
          <p className="section-eyebrow">MULAI DARI KEBUTUHANMU</p>
          <h2 id="contact-inquiry-title">Ceritakan rencanamu.</h2>
          <p>Individu, UMKM, brand, perusahaan, organisasi, maupun penyelenggara acara dapat menjelaskan kebutuhan proyeknya di sini.</p>
          <div className="contact-direct-info">
            <p className="section-eyebrow">KONTAK LANGSUNG</p>
            <p>Informasi kontak langsung akan segera tersedia.</p>
          </div>
        </div>
        <InquiryForm />
      </section>

      <section className="contact-next-steps" aria-labelledby="contact-next-title">
        <div>
          <p className="section-eyebrow">APA SELANJUTNYA?</p>
          <h2 id="contact-next-title">Kita mulai dengan memahami proyek.</h2>
        </div>
        <ol>{nextSteps.map((step, index) => <li key={step}><span>0{index + 1}</span><p>{step}</p></li>)}</ol>
      </section>

      <aside className="contact-closing-note">
        <p>Percakapan awal membantu kita memahami kebutuhan dan menentukan langkah yang tepat. Ruang lingkup serta spesifikasi akan dibahas bersama sebelum proyek berjalan.</p>
      </aside>
    </main>
  );
}
