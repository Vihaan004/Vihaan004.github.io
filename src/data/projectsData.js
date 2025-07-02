// Project data store
// To add a new project, simply add a new object to this array
// Set isFeatured: true for projects you want to highlight on the main page

const projectsData = [  {
    id: 1,
    name: "Systolic Matrix Multiplier - FPGA",
    description: "A hardware implementation of a systolic array for efficient matrix multiplication on an FPGA platform.",    tags: ["FPGA", "Verilog", "Hardware Design", "Matrix Operations"],
    link: "https://github.com/Vihaan004/matrix-multiplier",
    imageUrl: "/project-images/matmul.png",
    isFeatured: true
  },  {
    id: 2,
    name: "Map My Major (In Development)",
    description: "An interactive planning tool for students to visualize, plan, and track their academic programs.",    tags: ["React", "Node.js", "Academic Tools", "In Progress"],
    link: "https://github.com/Vihaan004/Map-My-Major",
    imageUrl: "/project-images/map-my-major.png",
    isFeatured: true  },  {
    id: 3,
    name: "MIPS Multicycle Processor - FPGA",
    description: "A fully functional MIPS processor implementation with multicycle architecture on FPGA.",    tags: ["FPGA", "MIPS", "Computer Architecture", "Verilog"],
    link: "https://github.com/Vihaan004/mips-multicycle-processor",
    imageUrl: "/project-images/FPGA.jpg",
    isFeatured: false
  },  {
    id: 4,
    name: "Deep Learning Image Classification",
    description: "Benchmarking on MedMNIST datasets using frameworks with ResNet architectures.",
    tags: ["Deep Learning", "PyTorch", "Medical AI", "Computer Vision", "AutoML"],
    link: "https://github.com/Vihaan004/DL-MedMNIST",
    imageUrl: "/project-images/medmnist.png",
    isFeatured: true
  },{
    id: 5,
    name: "Personal Website",
    description: "This website! Built with React and deployed on GitHub Pages.",
    tags: ["React", "CSS", "JavaScript", "Web Development"],
    link: "https://github.com/Vihaan004/Vihaan004.github.io",
    imageUrl: "/project-images/my-site.png",
    isFeatured: false
  }
];

export default projectsData;
