import { useParams } from "react-router-dom";
import blogPosts from "../data/blogDataNotion";

function BlogPostEmbedded() {
  const { slug } = useParams();
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        flexDirection: 'column'
      }}>
        <h2>Post Not Found</h2>
        <p>The blog post you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div 
      style={{ 
        width: '100%', 
        height: '100vh', 
        margin: 0, 
        padding: 0 
      }}
      dangerouslySetInnerHTML={{ __html: post.embedCode }}
    />
  );
}

export default BlogPostEmbedded;