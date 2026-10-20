import { notFound } from "next/navigation";
import PageIntro from "@/components/site/PageIntro";
import { blogPosts } from "../posts";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug && item.status === "published");
  if (!post) notFound();
  return <main className="inner-page container"><PageIntro eyebrow={post.category} title={post.title} description={post.excerpt} /><article className="inner-page-copy blog-article">{post.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</article></main>;
}
