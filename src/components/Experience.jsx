import React, { useState } from "react";
import "./Experience.css";

function Experience() {
  const [openIndexes, setOpenIndexes] = useState([]);
  const experiences = [
    {
      title: "Lead Tutor",
      company: "Academic Student Network, ASU",
      duration: "January 2025 – Present",
      bullets: [
        "Develop comprehensive presentations and deliver engaging tutoring sessions in math, computer science, and physics, enhancing student performance and ensuring high-quality academic support throughout ASU.",
        "Coordinate with university faculty and staff to host live workshops and content refreshers for subject area tutors and students to maximize tutoring efficiency at Arizona State University."
      ]
    },
    {
      title: "Undergraduate Researcher",
      company: "Barrett College Fellows, ASU",
      duration: "June 2024 – December 2024",
      bullets: [
        "Validated benchmarks for ConvNeXt and Detectron2 open-source models on Chest X-ray datasets by performing classification, localization, and segmentation, achieving results within a 1.5% margin of published standards.",
        "Enhanced Mask R-CNN model on VinDr-CXR dataset for anomaly detection by implementing custom augmentations and fine-tuning, resulting in a 2% boost in accuracy."
      ]
    },
    {
      title: "Electrical Team Lead",
      company: "Sun Devil Robotics Club, ASU",
      duration: "February 2024 – May 2024",
      bullets: [
        "Streamlined team operations by developing action plans and strategies, enhancing team productivity.",
        "Validated team deliverables by reviewing system designs, component specs, PCB layouts, communication setups, and circuit builds to ensure project feasibility and quality."
      ]
    }
  ];

  const handleToggle = idx => {
    setOpenIndexes(openIndexes =>
      openIndexes.includes(idx)
        ? openIndexes.filter(i => i !== idx)
        : [...openIndexes, idx]
    );
  };

  return (
    <div className="Experience">
      <div className="experience-tag">
        <h1>Experience</h1>
      </div>
      <div className="experience-list">
        {experiences.map((exp, idx) => (
          <div
            className={`experience-block dropdown ${openIndexes.includes(idx) ? "open" : ""} clickable`}
            key={exp.title}
            onClick={() => handleToggle(idx)}
          >
            <div className="exp-header">
              <div className="exp-title-location">
                <span className="exp-role">{exp.title}</span>
                {/* <span className="exp-separator"> - </span> */}
                <span className="exp-location">{exp.company}</span>
              </div>
              <div className="exp-right-group">
                <div className="exp-duration">{exp.duration}</div>
                <div className="exp-arrow">{openIndexes.includes(idx) ? "▲" : "▼"}</div>
              </div>
            </div>            {openIndexes.includes(idx) && (
              <div className="exp-desc">
                <ul>
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;