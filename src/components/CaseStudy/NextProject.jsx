import "./styles/NextProject.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function NextProject({ project }) {
  if (!project.nextProject) return null;

  return (
    <section className="next-project">
      <div className="container">

        <motion.h2
          className="next-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Continue Exploring
        </motion.h2>

        <motion.div
          className="next-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
        >
          <img
            src={project.nextProject.image}
            alt={project.nextProject.title}
          />

          <div className="next-content">

            <span>Next Case Study</span>

            <h3>{project.nextProject.title}</h3>

            <Link
              to={`/case-study/${project.nextProject.slug}`}
              className="next-btn"
            >
              View Case Study →
            </Link>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default NextProject;