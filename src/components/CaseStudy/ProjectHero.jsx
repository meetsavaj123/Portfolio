import "./styles/ProjectHero.css";
import { motion } from "framer-motion";

function ProjectHero({ project }) {
  return (
    <section className="project-hero">
      <div className="hero-bg"></div>

      <div className="container hero-grid">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="hero-category">
            {project.category}
          </span>

          <h1>{project.title}</h1>

          <p className="hero-subtitle">
            A modern UI/UX case study focused on creating an intuitive,
            visually appealing, and user-centered digital experience through
            thoughtful design decisions and seamless interactions.
          </p>

          <div className="hero-line"></div>

          <div className="hero-scroll">
            ↓ Scroll to explore the complete case study
          </div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={project.cover} alt={project.title} />
        </motion.div>
      </div>
    </section>
  );
}

export default ProjectHero;