import { useEffect } from "react";
import { useParams } from "react-router-dom";
import blogPosts from "../data/blogDataNotion";

function BlogPostRedirect() {
  const { slug } = useParams();

  useEffect(() => {
    // Find the post by trying to match the slug with part of the title or id
    const post = blogPosts.find(post => {
      // Try to find by creating a slug from title (similar to old slug format)
      const titleSlug = post.title.toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');
      return titleSlug.includes(slug) || slug.includes(titleSlug.substring(0, 10));
    });

    if (post) {
      // Redirect to the Notion page
      window.location.href = post.link;
    } else {
      // If post not found, redirect to blog page
      window.location.href = '/blog';
    }
  }, [slug]);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '50vh',
      flexDirection: 'column',
      gap: '1rem'
    }}>
      <h2>Redirecting to Notion...</h2>
      <p>You are being redirected to our new blog platform.</p>
    </div>
  );
}

export default BlogPostRedirect;