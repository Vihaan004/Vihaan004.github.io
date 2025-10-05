import "./Blog.css";
import blogPosts from "../data/blogDataNotion";
import { Link } from "react-router-dom";

function Blog() {
  // Filter only pinned posts for the main page display
  const pinnedPosts = blogPosts.filter(post => post.isPinned);
  return (
    <div className="Blog content-width" id="blog-section">
      <div className="blog-header">
        <div className="blog-tag">
          <h1>Blog</h1>
        </div>
        <div className="header-line" />
        <Link to="/blog" className="view-all-link">
          View all posts 
          <div className="link-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
            </svg>
          </div>
        </Link>
      </div>
      <div className="blog-list">
        {pinnedPosts.map(post => (
          <Link to={`/blog/${post.slug}`} className="blog-card-link" key={post.id}>
            <div className="blog-post-item">
              <div className="blog-post-header">
                <h2 className="post-title">{post.title}</h2>
              </div>
              
              <div className="post-meta">
                <div className="post-date">{post.date}</div>
                <div className="post-tags">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="post-tag-item">{tag}</span>
                  ))}
                </div>
              </div>
              
              <div className="post-snippet">{post.snippet}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blog;
