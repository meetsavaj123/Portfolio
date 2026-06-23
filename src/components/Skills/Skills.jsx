import "./Skills.css";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "UI Design",
    skills: ["Figma", "Auto Layout", "Design Systems", "Responsive Design"],
  },
  {
    title: "UX Process",
    skills: ["User Research", "Wireframing", "Prototyping", "User Flow"],
  },
  {
    title: "Frontend",
    skills: ["React", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Tools",
    skills: ["Framer Motion", "Git", "VS Code", "Photoshop","Three.js"],
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skills & Tools
        </motion.h2>

        <p className="skills-text">
          My design process combines creativity, research, and frontend
          development to build intuitive digital experiences.
        </p>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              className="skills-card"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3>{category.title}</h3>

              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <span key={i}>{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;