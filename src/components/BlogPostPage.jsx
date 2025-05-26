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
      </div>      <div className="post-meta">
        <div className="post-date-line">
          {post.date}
        </div>
        <div className="post-tags-line">
          {post.tags.map((tag, index) => (
            <span key={index} className="post-tag-item">{tag}</span>
          ))}
        </div>
      </div>
        <div className="post-content">
        <p className="post-snippet">{post.snippet}</p>
        {post.content.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

export default BlogPostPage;