import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import BlogPage from "./components/BlogPage";
import Music from "./components/Music";
import BlogPostPage from "./components/BlogPostPage";
import "./index.css";

function MainPage() {
  return (
    <>
      <Home />
      <About />
      <Experience />
      <Projects />
      <Blog />
      <Music />
    </>
  );
}

function App() {
  return (
    <Router basename="/my-site">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
      </Routes>
    </Router>
  );
}

export default App;
