import { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import blogPosts from "../data/blogData";
import ReactMarkdown from "react-markdown";
import "./BlogPostPage.css";

function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find(post => post.slug === slug);  const [markdown, setMarkdown] = useState("");
  const [isSticky, setIsSticky] = useState(false);
  const [tocItems, setTocItems] = useState([]);
  const [activeSection, setActiveSection] = useState("introduction");
  const sidebarRef = useRef(null);
  const stickyRef = useRef(null);
  useEffect(() => {
    // Scroll to top when post loads
    // window.scrollTo(0, 0);

    // Handle sticky sidebar
    const handleScroll = () => {
      if (sidebarRef.current && stickyRef.current) {
        const sidebarRect = sidebarRef.current.getBoundingClientRect();
        const shouldStick = sidebarRect.top <= 20;
        setIsSticky(shouldStick);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    // Fetch markdown content if post exists
    if (post && post.contentPath) {
      // Use the full path with the base URL
      const fullPath = post.contentPath.startsWith('/') 
        ? `${import.meta.env.BASE_URL}${post.contentPath.substring(1)}`
        : post.contentPath;
        fetch(fullPath)
        .then(res => res.text())
        .then(text => {
          setMarkdown(text);
          // Extract headers for table of contents
          extractTableOfContents(text);
        })
        .catch(err => {
          console.error("Failed to load markdown:", err);
          setMarkdown("Failed to load post content.");
        });
    }    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [post]);

  // Extract headers from markdown for table of contents
  const extractTableOfContents = (markdownText) => {
    const headerRegex = /^## (.+)$/gm;
    const headers = [];
    let match;

    while ((match = headerRegex.exec(markdownText)) !== null) {
      const title = match[1].trim();
      const id = title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .trim();
      
      headers.push({
        id,
        title,
        level: 2
      });
    }
    
    setTocItems(headers);
  };

  // Scroll to section when TOC item is clicked
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  // If post not found, show error
  if (!post) {
    return (
      <div className="blog-post-page content-width">        
      <div className="blog-post-header">
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
    },
    // Custom renderer for h2 headers to add IDs
    h2: ({ node, children, ...props }) => {
      const text = children?.toString() || '';
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .trim();
      
      return (
        <h2 id={id} {...props}>
          {children}
        </h2>
      );
    }
  };

  return (
    <div className="blog-post-page content-width">      <div className="blog-post-header">
        <h1>{post.title}</h1>
        <Link to="/blog" className="back-link">
          <div className="link-arrow back">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
            </svg>
          </div>
          Back
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
      <div className="post-main-container">        
        <div className="post-content">
          {/* <p id="introduction" className="post-snippet">{post.snippet}</p> */}
          <ReactMarkdown components={components}>{markdown}</ReactMarkdown>
        </div>
        {/* <div className="post-sidebar" ref={sidebarRef}>
          <div className={`sidebar-sticky ${isSticky ? 'sticky-active' : ''}`} ref={stickyRef}>            
          <div className="table-of-contents">
              <a
                href="#introduction"
                className="toc-item"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('introduction');
                }}
              >
                Introduction
              </a>
              {tocItems.length > 0 ? (
                tocItems.map((item, index) => (
                  <a
                    key={index}
                    href={`#${item.id}`}
                    className="toc-item"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                  >
                    {item.title}
                  </a>
                ))
              ) : null}
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default BlogPostPage;