// Project data store
// To add a new project, simply add a new object to this array
// Set isFeatured: true for projects you want to highlight on the main page

const projectsData = [  {
    id: 1,
    name: "Systolic Matrix Multiplier - FPGA",
    description: "A hardware implementation of a systolic array for efficient matrix multiplication on an FPGA platform.",
    tags: ["FPGA", "Verilog", "Hardware Design", "Matrix Operations"],
    link: "https://github.com/Vihaan004/matrix-multiplier",
    imageUrl: "/my-site/project-images/FPGA.jpg",
    isFeatured: true
  },  {
    id: 2,
    name: "Map My Major - Coming Soon",
    description: "An interactive course planning tool for university students to visualize and plan their academic journey.",
    tags: ["React", "Node.js", "Academic Tools", "In Progress"],
    link: "https://github.com/Vihaan004/Map-My-Major",
    imageUrl: "/my-site/project-images/map-my-major.png",
    isFeatured: true
  },  {
    id: 3,
    name: "MIPS Multicycle Processor - FPGA",
    description: "A fully functional MIPS processor implementation with multicycle architecture on FPGA.",
    tags: ["FPGA", "MIPS", "Computer Architecture", "Verilog"],
    link: "https://github.com/Vihaan004/mips-multicycle-processor",
    imageUrl: "/my-site/project-images/FPGA.jpg",
    isFeatured: true
  },  {
    id: 4,
    name: "Personal Portfolio Website",
    description: "This website! Built with React and deployed on GitHub Pages.",
    tags: ["React", "CSS", "JavaScript", "Web Development"],
    link: "https://github.com/Vihaan004/my-site",
    imageUrl: "",
    isFeatured: false
  },  {
    id: 5,
    name: "AI-powered Student Assistant",
    description: "A chatbot designed to help students with common university-related questions and resource finding.",
    tags: ["NLP", "Python", "Education", "AI"],
    link: "https://github.com/Vihaan004/student-assistant",
    imageUrl: "",
    isFeatured: false
  }
];

export default projectsData;
