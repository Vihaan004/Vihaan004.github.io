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
        <div className="blog-controls">
          <button className="sort-button" onClick={handleSortChange}>
            {getSortButtonText()}
          </button>
          <Link to="/" className="back-link">← Back to Home</Link>
        </div>
      </div>
      
      <div className="blog-posts-grid">
        {posts.map(post => (
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