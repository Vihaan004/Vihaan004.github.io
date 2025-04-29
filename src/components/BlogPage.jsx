import { useEffect } from "react";
import blogPosts from "../data/blogData";
import "./BlogPage.css";
import { Link } from "react-router-dom";

function BlogPage() {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="blog-page">
      <div className="blog-page-header">
        <h1>Blog</h1>
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>
      
      <div className="blog-posts-grid">
        {blogPosts.map(post => (
          <div className="blog-post-card" key={post.id}>
            <div className="post-title">{post.title}</div>
            <div className="post-meta">
              {post.date} • {post.tags.join(", ")}
              {post.isPinned && <span className="pinned-badge">Featured</span>}
            </div>
            <div className="post-snippet">{post.snippet}</div>
            <Link to={`/blog/${post.slug}`} className="read-post-link">Read post →</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;