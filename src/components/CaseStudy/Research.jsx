import "./styles/Research.css";
import { motion } from "framer-motion";

function Research({ project }) {
  return (
    <section className="case-section">
      <div className="container">

        <motion.h2
          className="case-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          User Research
        </motion.h2>

        <motion.div
          className="research-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {project.research.map((item, index) => (
            <div className="research-card" key={index}>
              <span>{index + 1}</span>
              <p>{item}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Research;