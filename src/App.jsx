import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import BlogPage from "./components/BlogPage";
import ProjectPage from "./components/ProjectPage";
import Music from "./components/Music";
import BlogPostEmbedded from "./components/BlogPostEmbedded";
import "./index.css";
import Hero from "./components/Hero";

function MainPage() {
  const location = useLocation();

  useEffect(() => {
    // Check if there's a hash in the URL
    if (location.hash) {
      // Get the element with the ID matching the hash
      const element = document.getElementById(location.hash.substring(1));
      
      // If the element exists, scroll to it
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Small delay to ensure elements are rendered
      }
    } else {
      // If no hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      {/* <Home /> */}
      <Hero />
      <Blog />
      <Projects />
      <Experience />
      <Music />
    </>
  );
}

function App() {
  return (
    <Router basename="/">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostEmbedded />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
    </Router>
  );
}

// This component ensures that when navigating to a new route, 
// the page scrolls to the top or to the hash target
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Only scroll to top if there's no hash in the URL
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  
  return null;
}

export default App;
