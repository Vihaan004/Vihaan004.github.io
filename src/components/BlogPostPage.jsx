import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import blogPosts from "../data/blogData";
import "./BlogPostPage.css";

function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find(post => post.slug === slug);
  
  useEffect(() => {
    // Scroll to top when post loads
    window.scrollTo(0, 0);
  }, []);

  // If post not found, show error
  if (!post) {
    return (
      <div className="blog-post-page">
        <div className="blog-post-header">
          <h1>Post not found</h1>
          <Link to="/blog" className="back-link">← Back to all posts</Link>
        </div>
        <div className="post-content">
          <p>Sorry, the blog post you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post-page">
      <div className="blog-post-header">
        <h1>{post.title}</h1>
        <Link to="/blog" className="back-link">← Back to all posts</Link>
      </div>
      
      <div className="post-meta">
        <div className="post-date-tags">
          {post.date} • {post.tags.join(", ")}
          {post.isPinned && <span className="pinned-badge">Featured</span>}
        </div>
      </div>
      
      <div className="post-content">
        {/* For now we'll just display the snippet until full content is added */}
        <p>{post.snippet}</p>
        <p>{post.content}</p>
      </div>
    </div>
  );
}

export default BlogPostPage;