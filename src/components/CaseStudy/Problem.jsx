import "./styles/Problem.css";
import { motion } from "framer-motion";

function Problem({ project }) {
  return (
    <section className="case-section problem-section">
      <div className="container">

        <motion.h2
          className="case-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Problem Statement
        </motion.h2>

        <motion.div
          className="problem-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p>{project.problem}</p>
        </motion.div>

      </div>
    </section>
  );
}

export default Problem;