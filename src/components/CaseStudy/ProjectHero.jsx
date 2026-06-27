import "./styles/ProjectHero.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ProjectHero({ project }) {
  return (
    <section className="project-hero">
      <div className="project-hero-bg"></div>

      <div className="container project-hero-grid">

        <motion.div
          className="project-hero-content"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >

          <Link to="/" className="project-back-btn">
            ← Back to Portfolio
          </Link>

          <span className="project-hero-category">
            {project.category}
          </span>

          <h1>{project.title}</h1>

          <p className="project-hero-subtitle">
            A modern UI/UX case study focused on creating an intuitive,
            visually appealing, and user-centered digital experience through
            thoughtful design decisions and seamless interactions.
          </p>

          <div className="project-hero-line"></div>

          <div className="project-hero-scroll">
            ↓ Scroll to explore the complete case study
          </div>

        </motion.div>

        <motion.div
          className="project-hero-image"
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