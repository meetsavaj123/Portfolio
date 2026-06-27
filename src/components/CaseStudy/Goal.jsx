import "./styles/Goal.css";
import { motion } from "framer-motion";

function Goal({ project }) {
  return (
    <section className="case-section goal-section">
      <div className="container">

        <motion.h2
          className="case-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Project Goal
        </motion.h2>

        <motion.div
          className="goal-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p>{project.goal}</p>
        </motion.div>

      </div>
    </section>
  );
}

export default Goal;