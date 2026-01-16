import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { formatBlogDate, getAllBlogSlugs, getBlogPostBySlug } from "@/lib/blog";

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await props.params;

  try {
    const post = await getBlogPostBySlug(slug);
    return {
      title: post.title,
    };
  } catch {
    return {
      title: "Blog",
    };
  }
}

export default async function BlogPostPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;

  let post;
  try {
    post = await getBlogPostBySlug(slug);
  } catch {
    notFound();
  }

  if (post.draft) notFound();

  return (
    <main>
      <h1>{post.title}</h1>
      <p>
        <time dateTime={post.date}>{formatBlogDate(post.dateObj)}</time>
      </p>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
    </main>
  );
}
