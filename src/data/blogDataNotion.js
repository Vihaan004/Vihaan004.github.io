// Blog posts data store for Notion integration
// Each blog post embeds the Notion page directly
// Simplified structure: title, date, tags, snippet, isPinned, embedCode, and slug

const blogPosts = [
  {
    id: 1,
    title: "Agentic AI \"Let it Cook\"",
    date: "May 26, 2025",
    tags: ["Agentic AI", "Microsoft", "VS Code", "Copilot", "News"],
    snippet: "An unsuspecting hardware guy explores how Microsoft and Github are quietly turning the internet into a place where code writes itself.",
    isPinned: true,
    slug: "agents-for-everyone",
    embedCode: '<iframe src="https://vihaanpatel.notion.site/ebd/2811e9cb485380f7b02eef605b98af2c" width="100%" height="100%" frameborder="0" allowfullscreen style="display: block; margin: 0; padding: 0;" />'
  },
  {
    id: 2,
    title: "Edge AI, The Hardware Renaissance",
    date: "June 23, 2025",
    tags: ["Edge AI", "Hardware", "Neural Processing", "AI Acceleration", "Silicon"],
    snippet: "Exploring how specialized AI chips are revolutionizing edge computing and bringing intelligence closer to where data is generated.",
    isPinned: true,
    slug: "edge-ai-hardware-renaissance",
    embedCode: '<iframe src="https://vihaanpatel.notion.site/ebd/2811e9cb485380ddb73ecbcdda937272" width="100%" height="100%" frameborder="0" allowfullscreen style="display: block; margin: 0; padding: 0;" />'
  } ,
  {
    id: 3,
    title: "Why Amazon Writes Press Releases Before Building Products",
    date: "October 5, 2025",
    tags: [],
    snippet: "I recently came across Amazon's \"Working Backwards\" process, and it hit me harder than I expected. The concept is straightforward: before building anything, write the press release first.",
    isPinned: false,
    slug: "amazon-press-releases-before-products",
    embedCode: '<iframe src="https://vihaanpatel.notion.site/ebd/2831e9cb485380daa05ae873babd34cb" width="100%" height="100%" frameborder="0" allowfullscreen style="display: block; margin: 0; padding: 0;" />'
  }  ,
    {
    id: 4,
    title: "Spec, Context, Prompt, Repeat",
    date: "October 8, 2025",
    tags: [],
    snippet: "A short reflection to compare the programmer I dreamed of five years ago with the programmer I'm shaping into right now.",
    isPinned: true,
    slug: "spec-context-prompt-repeat",
    embedCode: '<iframe src="https://vihaanpatel.notion.site/ebd/2811e9cb48538009b242c7ab0b3a7926" width="100%" height="100%" frameborder="0" allowfullscreen style="display: block; margin: 0; padding: 0;" />'
  } 
];

//   {
//     id: ,
//     title: "",
//     date: "",
//     tags: [],
//     snippet: "",
//     isPinned: false,
//     slug: "",
//     embedCode: ' style="display: block; margin: 0; padding: 0;" />'
//   }  

export default blogPosts;