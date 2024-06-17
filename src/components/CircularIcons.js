import React from "react";
import "./CircularIcons.css";

const skills = {
  frontend: [
    "React",
    "JavaScript",
    "Redux",
    "D3.js",
    "Chart.js",
    "Native React",
    "PWA",
    "HTML",
    "CSS",
    "TypeScript",
    "Sap Fiori",
    "Ui5",
  ],
  backend: [
    "Java",
    "Spring Boot",
    "Go",
    "Golang",
    "Django",
    "Flask",
    "Python",
    "Node JS",
    "Express JS",
    "GraphQL",
    "Firebase",
    "OData",
  ],
};

const CircularIcons = () => {
  return (
    <div>
      <div className="skill-category">
        <h2>Frontend Technologies</h2>
        <div className="circular-icon-container">
          {skills.frontend.map((skill, index) => (
            <div key={index} className="circular-icon">
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div className="skill-category">
        <h2>Backend Technologies</h2>
        <div className="circular-icon-container">
          {skills.backend.map((skill, index) => (
            <div key={index} className="circular-icon">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CircularIcons;
