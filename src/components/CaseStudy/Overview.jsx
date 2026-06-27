import "./styles/Overview.css";
import { motion } from "framer-motion";

function Overview({ project }) {
  return (
    <section className="case-section">
      <div className="container">

        <motion.h2
          className="case-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Project Overview
        </motion.h2>

        <motion.p
          className="case-text overview-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          {project.overview}
        </motion.p>

        <motion.div
          className="overview-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="case-card">
            <h4>Role</h4>
            <p>{project.role}</p>
          </div>

          <div className="case-card">
            <h4>Duration</h4>
            <p>{project.duration}</p>
          </div>

          <div className="case-card">
            <h4>Platform</h4>
            <p>{project.platform}</p>
          </div>

          <div className="case-card">
            <h4>Tools</h4>
            <p>{project.tools}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Overview;