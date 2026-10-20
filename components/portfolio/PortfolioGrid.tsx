"use client";

import { useState } from "react";
import Link from "next/link";
import type { PortfolioCategory, PortfolioProject } from "@/app/portfolio/projects";

const filters: { label: string; value: "all" | PortfolioCategory }[] = [
  { label: "Semua", value: "all" },
  { label: "Design", value: "Design" },
  { label: "IT & Digital", value: "IT & Digital" },
  { label: "Printing", value: "Printing" },
];

export default function PortfolioGrid({ projects }: { projects: PortfolioProject[] }) {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]["value"]>("all");
  const visibleProjects = activeFilter === "all"
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="portfolio-work" aria-label="Karya pilihan">
      <div className="portfolio-filters" role="group" aria-label="Filter kategori portofolio">
        {filters.map((filter) => (
          <button
            type="button"
            className="portfolio-filter"
            aria-pressed={activeFilter === filter.value}
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {visibleProjects.length ? (
        <div className="portfolio-project-grid" aria-live="polite">
          {visibleProjects.map((project, index) => (
            <Link
              className={`portfolio-project-card${index === 0 ? " portfolio-project-card--featured" : ""}`}
              href={`/portfolio/${project.slug}`}
              key={project.slug}
            >
              <div className={`portfolio-project-visual portfolio-project-visual--${project.category === "IT & Digital" ? "digital" : project.category.toLowerCase()}`} aria-hidden="true">
                <span className="portfolio-visual-index">{project.category.toUpperCase()}</span>
                <span className="portfolio-placeholder-label">Visual proyek belum tersedia</span>
                <i /><b /><em />
              </div>
              <div className="portfolio-project-caption">
                <div className="portfolio-project-meta"><span>{project.category}</span><span>{project.type}</span></div>
                <h2>{project.title}</h2>
                <p>{project.summary}</p>
                {project.attribution === "internal" && <span className="portfolio-attribution">Proyek internal NEXKARA Studio</span>}
                <span className="portfolio-project-link">Lihat proyek <span aria-hidden="true">↗</span></span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="portfolio-filter-empty" aria-live="polite">
          <p>Belum ada karya terbit dalam kategori ini.</p>
        </div>
      )}
    </section>
  );
}
