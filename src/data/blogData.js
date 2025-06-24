// Blog posts data store
// To add a new post, simply add a new object to this array
// Set isPinned: true for posts you want to highlight on the main page

const blogPosts = [
  {
    id: 1,
    title: " Agentic AI \"Let it Cook\"",
    date: "May 26, 2025",
    tags: ["Agentic AI", "Microsoft", "VS Code", "Copilot", "News"],
    snippet: "An unsuspecting hardware guy explores how Microsoft and Github are quietly turning the internet into a place where code writes itself.",
    contentPath: "/posts/agents-for-everyone.md",
    isPinned: true,
    slug: "agents-for-everyone"
  },
  {
    id: 2,
    title: "Edge AI, The Hardware Renaissance",
    date: "June 23, 2025",
    tags: ["Edge AI", "Hardware", "Neural Processing", "AI Acceleration", "Silicon"],
    snippet: "Exploring how specialized AI chips are revolutionizing edge computing and bringing intelligence closer to where data is generated.",
    contentPath: "/posts/edge-ai-hardware-renaissance.md",
    isPinned: true,
    slug: "edge-ai-hardware-renaissance"
  }
];

export default blogPosts;