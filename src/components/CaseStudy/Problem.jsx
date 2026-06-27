import "./styles/Problem.css";
import { motion } from "framer-motion";

function Problem({ project }) {
  return (
    <section className="case-section">
      <div className="container">

        <motion.h2
          className="case-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          The Problem
        </motion.h2>

        <motion.div
          className="problem-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>{project.problem}</p>
        </motion.div>

      </div>
    </section>
  );
}

export default Problem;