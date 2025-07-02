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
    <div className="blog-page content-width">
      <div className="blog-page-header">
        <h1>Blog</h1>
        <div className="blog-controls">
          <button className="sort-button" onClick={handleSortChange}>
            {getSortButtonText()}
          </button>
          <Link to="/" className="back-link">
            <div className="link-arrow back">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
              </svg>
            </div>
            Back to Home
          </Link>
        </div>
      </div>
      
      <div className="blog-posts-list">
        {posts.map(post => (
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

export default BlogPage;