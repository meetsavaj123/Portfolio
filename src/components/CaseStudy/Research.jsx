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
          Research Insights
        </motion.h2>

        <motion.p
          className="research-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .2 }}
          viewport={{ once: true }}
        >
          Based on user needs and interface analysis, these were the key
          insights that guided the design decisions.
        </motion.p>

        <div className="research-grid">
          {project.research.map((item, index) => (
            <motion.div
              className="research-card"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * .1 }}
            >
              <span className="research-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p>{item}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Research;