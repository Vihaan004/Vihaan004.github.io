import Link from "next/link";
import { formatBlogDate, getAllBlogPostsMeta } from "@/lib/blog";

export default async function BlogsIndexPage() {
  const posts = await getAllBlogPostsMeta();

  return (
    <main>
      <ul className="blog-posts">
        {posts.map((post) => (
          <li key={post.slug}>
            <span>
              <time dateTime={post.date}>{formatBlogDate(post.dateObj)}</time>
            </span>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
