import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import blogPosts from "../data/blogData";
import ReactMarkdown from "react-markdown";
import "./BlogPostPage.css";

function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find(post => post.slug === slug);
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    // Scroll to top when post loads
    window.scrollTo(0, 0);    // Fetch markdown content if post exists
    if (post && post.contentPath) {
      // Use the full path with the base URL
      const fullPath = post.contentPath.startsWith('/') 
        ? `${import.meta.env.BASE_URL}${post.contentPath.substring(1)}`
        : post.contentPath;
      
      fetch(fullPath)
        .then(res => res.text())
        .then(setMarkdown)
        .catch(err => {
          console.error("Failed to load markdown:", err);
          setMarkdown("Failed to load post content.");
        });
    }
  }, [post]);
  // If post not found, show error
  if (!post) {
    return (
      <div className="blog-post-page">        <div className="blog-post-header">
          <h1>Post not found</h1>
          <Link to="/blog" className="back-link">
            <div className="link-arrow back">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
              </svg>
            </div>
            Back to all posts
          </Link>
        </div>
        <div className="post-content">
          <p>Sorry, the blog post you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  // Custom components for ReactMarkdown
  const components = {
    // Custom renderer for links
    a: ({ node, ...props }) => {
      const isExternal = props.href && props.href.startsWith('http');
      return (
        <a 
          {...props}
          target={isExternal ? "_blank" : undefined} 
          rel={isExternal ? "noopener noreferrer" : undefined}
        >
          {props.children}
        </a>
      );
    }
  };

  return (
    <div className="blog-post-page">      <div className="blog-post-header">
        <h1>{post.title}</h1>
        <Link to="/blog" className="back-link">
          <div className="link-arrow back">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
            </svg>
          </div>
          Back to all posts
        </Link>
      </div>
      <div className="post-meta">
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
        <ReactMarkdown components={components}>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}

export default BlogPostPage;