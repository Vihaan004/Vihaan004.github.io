// Blog posts data store
// To add a new post, simply add a new object to this array
// Set isPinned: true for posts you want to highlight on the main page

const blogPosts = [
  {
    id: 1,
    title: "How I Built a Systolic Matrix Multiplier on FPGA",
    date: "April 18, 2025",
    tags: ["FPGA", "Hardware", "Projects"],
    snippet: "In this post, I walk through the process of designing and implementing a systolic matrix multiplier on an FPGA, including architectural choices, challenges, and performance results.",
    content: "Full article content goes here...",
    isPinned: true,
    slug: "systolic-matrix-multiplier"
  },
  {
    id: 2,
    title: "Getting Started with RISC-V: My Journey",
    date: "March 3, 2025",
    tags: ["RISC-V", "Computer Architecture", "Learning"],
    snippet: "Exploring the open-source RISC-V instruction set architecture and building my first projects with it.",
    content: "Full article content goes here...",
    isPinned: false,
    slug: "risc-v-journey"
  },
  {
    id: 3,
    title: "Implementing Machine Learning on Microcontrollers",
    date: "February 11, 2025",
    tags: ["ML", "Embedded Systems", "TinyML"],
    snippet: "How to deploy efficient machine learning models on resource-constrained microcontrollers for edge computing applications.",
    content: "Full article content goes here...",
    isPinned: true,
    slug: "ml-on-microcontrollers"
  }
];

export default blogPosts;