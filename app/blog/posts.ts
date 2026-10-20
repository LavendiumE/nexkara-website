export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  body: string[];
  status: "draft" | "published";
};

// Tambahkan tulisan yang sudah disetujui di sini; daftar publik hanya menampilkan status published.
export const blogPosts: BlogPost[] = [];
