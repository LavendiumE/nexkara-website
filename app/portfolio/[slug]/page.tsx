import { notFound } from "next/navigation";
import Link from "next/link";
import PageIntro from "@/components/site/PageIntro";
import { portfolioProjects } from "../projects";

export default async function PortfolioProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = portfolioProjects.find((item) => item.slug === slug && item.status === "published");
  if (!project) notFound();

  return (
    <main className="inner-page container portfolio-detail-page">
      <PageIntro eyebrow={`${project.category} / ${project.type}`} title={project.title} description={project.summary} />
      {project.attribution === "internal" && <p className="portfolio-detail-attribution">Proyek internal NEXKARA Studio</p>}
      <div className="portfolio-detail-visual" role="img" aria-label="Pratinjau visual proyek belum tersedia" />
      {project.detail && (
        <div className="portfolio-detail-content">
          <section className="inner-page-copy">
            <p className="section-eyebrow">RINGKASAN PROYEK</p>
            <h2>Tentang proyek</h2>
            <p>{project.detail.overview}</p>
          </section>
          {project.detail.deliverables.length > 0 && (
            <section className="portfolio-detail-deliverables">
              <p className="section-eyebrow">CAKUPAN</p>
              <ul>{project.detail.deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>
          )}
        </div>
      )}
      <section className="portfolio-detail-cta">
        <div><h2>Punya kebutuhan serupa?</h2><p>Mari bicarakan konteks dan ruang lingkup proyekmu.</p></div>
        <Link href="/contact">Diskusikan proyek <span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  );
}
