import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isValidElement } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import MermaidDiagram from "@/app/components/MermaidDiagram";
import { formatBlogDate, getAllBlogSlugs, getBlogPostBySlug } from "@/lib/blog";

type MarkdownCodeProps = {
  className?: string;
  children?: unknown;
};

function getMermaidChart(children: unknown): string | null {
  const codeChild = Array.isArray(children) ? children[0] : children;
  if (!isValidElement<MarkdownCodeProps>(codeChild)) return null;

  const className = codeChild.props.className;
  if (typeof className !== "string" || !className.includes("language-mermaid")) {
    return null;
  }

  return String(codeChild.props.children ?? "").replace(/\n$/, "");
}

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
      {post.description && <p><em>{post.description}</em></p>}
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          pre({ children, ...props }) {
            const chart = getMermaidChart(children);
            if (chart) return <MermaidDiagram chart={chart} />;
            return <pre {...props}>{children}</pre>;
          },
        }}
      >
        {post.content}
      </ReactMarkdown>
    </main>
  );
}
