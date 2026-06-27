import "./styles/NextProject.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function NextProject({ project }) {
  return (
    <section className="next-project">

      <div className="container">

        <motion.h2
          className="case-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Next Project
        </motion.h2>

        <motion.div
          className="next-project-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
        >

          <img
            src={project.nextProject.image}
            alt={project.nextProject.title}
          />

          <div className="next-content">

            <h3>{project.nextProject.title}</h3>

            <Link
              to={`/case-study/${project.nextProject.slug}`}
              className="next-btn"
            >
              View Next Case Study →
            </Link>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default NextProject;