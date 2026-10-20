import Link from "next/link";
import PageIntro from "@/components/site/PageIntro";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import { portfolioProjects } from "./projects";

export default function PortfolioPage() {
  const publishedProjects = portfolioProjects.filter((project) => project.status === "published");

  return (
    <main className="inner-page container portfolio-page">
      <PageIntro
        eyebrow="PORTOFOLIO NEXKARA"
        title="Karya yang mengubah ide menjadi nyata."
        description="Pilihan proyek desain, teknologi, dan produksi yang menunjukkan bagaimana ide diwujudkan menjadi solusi yang bisa digunakan."
      />
      <PortfolioGrid projects={publishedProjects} />
      <section className="portfolio-final-cta" aria-labelledby="portfolio-cta-title">
        <p className="section-eyebrow">KOLABORASI BERIKUTNYA</p>
        <div>
          <h2 id="portfolio-cta-title">Punya ide untuk proyek berikutnya?</h2>
          <p>Ceritakan kebutuhanmu dan mari temukan solusi yang tepat bersama NEXKARA.</p>
        </div>
        <Link href="/contact">Mulai Proyek <span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  );
}
