import { useState, useEffect } from "react";
import blogPosts from "../data/blogData";
import "./BlogPage.css";
import { Link } from "react-router-dom";

// Helper function for date parsing
const parseDate = (dateStr) => {
  const months = {
    "January": 0, "February": 1, "March": 2, "April": 3, "May": 4, "June": 5, 
    "July": 6, "August": 7, "September": 8, "October": 9, "November": 10, "December": 11
  };
  
  const [month, day, year] = dateStr.split(" ");
  return new Date(parseInt(year), months[month], parseInt(day.replace(",", "")));
};

function BlogPage() {
  // Sort options: "date" (default), "name"
  const [sortOption, setSortOption] = useState("date");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Sort posts when component mounts or sort option changes
    sortPosts();
  }, [sortOption]);

  const sortPosts = () => {
    let sortedPosts = [...blogPosts];
    
    if (sortOption === "date") {
      sortedPosts.sort((a, b) => {
        const dateA = parseDate(a.date);
        const dateB = parseDate(b.date);
        return dateB - dateA; // Most recent first
      });
    } else if (sortOption === "name") {
      sortedPosts.sort((a, b) => a.title.localeCompare(b.title));
    }

    setPosts(sortedPosts);
  };

  const handleSortChange = () => {
    // Toggle between date and name sort options
    setSortOption(sortOption === "date" ? "name" : "date");
  };

  // Get the button text based on current sort option
  const getSortButtonText = () => {
    return sortOption === "date" ? "Sorted by Date" : "Sorted by Title";
  };

  return (
    <div className="blog-page">
      <div className="blog-page-header">
        <h1>Blog</h1>
        <div className="blog-controls">          <button className="sort-button" onClick={handleSortChange}>
            {getSortButtonText()}
          </button>
          <Link to="/#blog-section" className="back-link">
            <div className="link-arrow back">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
              </svg>
            </div>
            Back to Home
          </Link>
        </div>
      </div>      <div className="blog-posts-grid">
        {posts.map(post => (
          <Link to={`/blog/${post.slug}`} className="blog-card-link" key={post.id}>
            <div className="blog-post-card">
              {post.isPinned && (
                <div className="pinned-icon" title="Pinned Post">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor">
                    <path d="M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z"/>
                  </svg>
                </div>
              )}
              <div className="post-title">{post.title}</div>              <div className="post-meta">
                <div className="post-date">{post.date}</div>
                <div className="post-tags">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="post-tag-item">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="post-snippet">{post.snippet}</div>
              <div className="card-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;