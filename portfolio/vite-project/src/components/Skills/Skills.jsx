import React from "react";
import "./Skills.css";

function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Git"];

  return (
    <section id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills-container">
        {skills.map((skill) => (
          <div key={skill} className="skill-box">{skill}</div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
