import React from "react";
import {
  SiHtml5, SiCss3, SiJavascript, SiBootstrap,
  SiNodedotjs, SiMysql, SiDotnet,
  SiGit, SiPostman, SiFigma, SiFirebase
} from "react-icons/si";

import "./skills.css";

const Skills = () => {
  const allSkills = [
    { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
    { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
    { name: "ASP.Net Core", icon: <SiDotnet />, color: "#512BD4" },
    { name: "Git", icon: <SiGit />, color: "#F05032" },
    { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
    { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
    { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
  ];

  // Duplicate the list for seamless infinite scroll
  const scrollSkills = [...allSkills, ...allSkills];

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="text-center mb-16">
          <span className="section__label">Expertise</span>
          <h2 className="section__title">My Tech Stack</h2>
          <p className="section__subtitle">
            Technologies I use to build world-class digital experiences
          </p>
        </div>

        <div className="skills__track-container">
          <div className="skills__track">
            {scrollSkills.map((skill, index) => (
              <div className="skills__pill" key={index} style={{ '--hover-color': skill.color }}>
                <span className="skills__pill-icon" style={{ color: skill.color }}>
                  {skill.icon}
                </span>
                <span className="skills__pill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;