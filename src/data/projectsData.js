// Project data store
// To add a new project, simply add a new object to this array
// Set isFeatured: true for projects you want to highlight on the main page

const projectsData = [  {
  id: 1,
  name: "Spec2Cov - LLM Hardware Verification",
  description: "An agentic framework that uses LLMs to automate hardware verification by iteratively achieving code coverage closure through intelligent feedback loops.",
  tags: ["Hardware Verification", "LLMs", "Agentic AI", "GraphRAG", "LangChain", "SFT"],
  link: "https://github.com/Vihaan004/LLM-Verification",
  imageUrl: "/project-images/llm-verif.png",
  isFeatured: true
  },  {
  id: 2,
  name: "Data Den",
  description: "AI+RAG powered GPU Acceleration workspace for data science applications utilizing ASU Sol Supercomputer.",
  tags: ["Agentic RAG AI", "LangChain", "Ollama LLMs", "CUDA", "GPUs", "HPC", "NVIDIA Rapids"],
  link: "https://github.com/Vihaan004/data-den",
  imageUrl: "/project-images/data-den.png",
  isFeatured: true
  },  {
  id: 3,
  name: "Deep Learning Image Classification",
  description: "Benchmarking on MedMNIST datasets using frameworks with ResNet architectures.",
  tags: ["Deep Learning", "PyTorch", "Medical AI", "Computer Vision", "AutoML"],
  link: "https://github.com/Vihaan004/DL-MedMNIST",
  imageUrl: "/project-images/medmnist.png",
  isFeatured: true
  },  {
  id: 4,
  name: "Map My Major (In Development)",
  description: "An interactive planning tool for students to visualize, plan, and track their academic programs.",    tags: ["React", "Node.js", "Academic Tools", "In Progress"],
  link: "https://github.com/Vihaan004/Map-My-Major",
  imageUrl: "/project-images/map-my-major.png",
  isFeatured: true  },  {
  id: 5,
  name: "Systolic Matrix Multiplier - FPGA",
  description: "A hardware implementation of a systolic array for efficient matrix multiplication on an FPGA platform.",    tags: ["FPGA", "Verilog", "Hardware Design", "Matrix Operations"],
  link: "https://github.com/Vihaan004/matrix-multiplier",
  imageUrl: "/project-images/matmul.png",
  isFeatured: true
  },  {
  id: 6,
  name: "MIPS Multicycle Processor - FPGA",
  description: "A fully functional MIPS processor implementation with multicycle architecture on FPGA.",    tags: ["FPGA", "MIPS", "Computer Architecture", "Verilog"],
  link: "https://github.com/Vihaan004/mips-multicycle-processor",
  imageUrl: "/project-images/FPGA.jpg",
  isFeatured: false
  },  {
  id: 7,
  name: "Website - Studiovistara",
  description: "A modern and sleek website design for Studiovistara, an architecture firm based in India.",
  tags: ["React", "CSS", "JavaScript", "Web Development"],
  link: "https://www.studiovistara.com",
  imageUrl: "/project-images/studiovistara.png",
  isFeatured: true
  }, {
  id: 8,
  name: "Website - Jeeya Patel",
  description: "A web design for Jeeya Patel's Architecture Portfolio",
  tags: ["React", "CSS", "JavaScript", "Web Development"],
  link: "https://jeeyapatel.studio",
  imageUrl: "/project-images/my-site.png",
  isFeatured: false
  }, {
  id: 9,
  name: "Website - Personal",
  description: "This website! Built with React and deployed on GitHub Pages.",
  tags: ["React", "CSS", "JavaScript", "Web Development"],
  link: "https://github.com/Vihaan004/Vihaan004.github.io",
  imageUrl: "/project-images/my-site.png",
  isFeatured: false
  }

];

export default projectsData;
