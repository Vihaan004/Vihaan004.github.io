import "./Blog.css";
import blogPosts from "../data/blogData";
import { Link } from "react-router-dom";

function Blog() {
  // Filter only pinned posts for the main page display
  const pinnedPosts = blogPosts.filter(post => post.isPinned);

  return (
    <div className="Blog">
      <div className="blog-header">
        <div className="blog-tag">
          <h1>Blog</h1>
        </div>
        <Link to="/blog" className="view-all-link">View all posts →</Link>
      </div>
      <div className="blog-list">
        {pinnedPosts.map(post => (
          <div className="blog-card" key={post.id}>
            <div className="blog-title">{post.title}</div>
            <div className="blog-meta">
              {post.date} • {post.tags.join(", ")}
            </div>
            <div className="blog-snippet">
              {post.snippet} <Link to={`/blog/${post.slug}`} className="blog-readmore">Read more...</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
