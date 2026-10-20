export type PortfolioCategory = "Design" | "IT & Digital" | "Printing";

export type PortfolioProject = {
  slug: string;
  title: string;
  category: PortfolioCategory;
  type: string;
  summary: string;
  status: "draft" | "published";
  attribution?: "nexkara" | "internal" | "previous-work" | "personal";
  detail?: {
    overview: string;
    deliverables: string[];
  };
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "weighingscale-system",
    title: "WeighingScale System",
    category: "IT & Digital",
    type: "Aplikasi Desktop",
    summary:
      "Middleware untuk empat timbangan yang membaca komunikasi serial, mengolah data berat, dan meneruskannya ke sistem penerima.",
    status: "draft",
  },
  {
    slug: "jurnal-kbm",
    title: "Jurnal KBM",
    category: "IT & Digital",
    type: "Aplikasi Web",
    summary:
      "Aplikasi berbasis web untuk mencatat kegiatan belajar mengajar, dengan pengaturan akses berbasis peran (RBAC).",
    status: "draft",
  },
  {
    slug: "nexkara-website",
    title: "NEXKARA Website",
    category: "IT & Digital",
    type: "Website - Proyek Internal Studio",
    summary:
      "Website internal NEXKARA Studio yang menyatukan informasi layanan, cara kerja, karya pilihan, dan kontak dalam satu pengalaman digital.",
    status: "published",
    attribution: "internal",
    detail: {
      overview:
        "Proyek internal untuk menyusun kehadiran digital NEXKARA Studio. Website ini memuat halaman beranda, layanan, produk, portofolio, tentang, blog, dan kontak. Formulir kontak saat ini masih berupa tampilan dan belum terhubung ke layanan pengiriman pesan.",
      deliverables: [
        "Website multi-halaman dengan navigasi bersama",
        "Halaman layanan, produk, dan portofolio",
        "Struktur halaman blog dan kontak",
      ],
    },
  },
];
