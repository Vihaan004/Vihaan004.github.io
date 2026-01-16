import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export type BlogFrontMatter = {
  title: string;
  date: string; // YYYY-MM-DD
  draft?: boolean;
};

export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  draft: boolean;
  dateObj: Date;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};

const BLOG_DIR = path.join(process.cwd(), "content", "blogs");

function parseDateOrThrow(date: string, slug: string): Date {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) {
    throw new Error(`Invalid date '${date}' in post '${slug}'. Use YYYY-MM-DD.`);
  }
  return parsed;
}

export function formatBlogDate(date: Date): string {
  const day = date.toLocaleString("en-GB", { day: "2-digit" });
  const month = date.toLocaleString("en-GB", { month: "short" });
  const year = date.getFullYear();
  return `${day} ${month}, ${year}`;
}

async function listMarkdownFiles(): Promise<string[]> {
  const entries = await fs.readdir(BLOG_DIR, { withFileTypes: true });
  return entries
    .filter((e) => e.isFile() && e.name.toLowerCase().endsWith(".md"))
    .map((e) => e.name);
}

export async function getAllBlogSlugs(): Promise<string[]> {
  const files = await listMarkdownFiles();
  return files.map((file) => file.replace(/\.md$/i, ""));
}

export async function getAllBlogPostsMeta(options?: {
  includeDrafts?: boolean;
}): Promise<BlogPostMeta[]> {
  const includeDrafts = options?.includeDrafts ?? false;
  const files = await listMarkdownFiles();

  const metas = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.md$/i, "");
      const fullPath = path.join(BLOG_DIR, file);
      const raw = await fs.readFile(fullPath, "utf8");
      const { data } = matter(raw);

      const title = typeof data.title === "string" ? data.title : undefined;
      const date = typeof data.date === "string" ? data.date : undefined;
      const draft = Boolean(data.draft);

      if (!title) throw new Error(`Missing 'title' front matter in '${slug}'.`);
      if (!date) throw new Error(`Missing 'date' front matter in '${slug}'.`);

      const dateObj = parseDateOrThrow(date, slug);

      return { slug, title, date, draft, dateObj } satisfies BlogPostMeta;
    })
  );

  return metas
    .filter((m) => includeDrafts || !m.draft)
    .sort((a, b) => b.dateObj.getTime() - a.dateObj.getTime());
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost> {
  const fullPath = path.join(BLOG_DIR, `${slug}.md`);

  let raw: string;
  try {
    raw = await fs.readFile(fullPath, "utf8");
  } catch {
    throw new Error(`Post not found for slug '${slug}'.`);
  }

  const { data, content } = matter(raw);

  const title = typeof data.title === "string" ? data.title : undefined;
  const date = typeof data.date === "string" ? data.date : undefined;
  const draft = Boolean(data.draft);

  if (!title) throw new Error(`Missing 'title' front matter in '${slug}'.`);
  if (!date) throw new Error(`Missing 'date' front matter in '${slug}'.`);

  const dateObj = parseDateOrThrow(date, slug);

  return { slug, title, date, draft, dateObj, content };
}
