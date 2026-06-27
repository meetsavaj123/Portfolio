import "./styles/ProjectHero.css";
import { motion } from "framer-motion";

function ProjectHero({ project }) {
  return (
    <section className="project-hero">
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

          <p>{project.overview}</p>

          <div className="hero-info">

            <div>
              <h4>Role</h4>
              <span>{project.role}</span>
            </div>

            <div>
              <h4>Duration</h4>
              <span>{project.duration}</span>
            </div>

            <div>
              <h4>Platform</h4>
              <span>{project.platform}</span>
            </div>

            <div>
              <h4>Tools</h4>
              <span>{project.tools}</span>
            </div>

          </div>

        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={project.cover}
            alt={project.title}
          />
        </motion.div>

      </div>
    </section>
  );
}

export default ProjectHero;