import "./Projects.css";

function Projects() {
  const projects = [
    { name: "Systolic Matrix Multiplier - FPGA" },
    { name: "Map My Major - Coming Soon" },
    { name: "MIPS Multicycle Processor - FPGA" }
  ];

  return (
    <div className="Projects">
      <div className="projects-tag">
        <h1>Projects</h1>
      </div>
      <div className="projects-list">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <span className="project-name">{project.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;