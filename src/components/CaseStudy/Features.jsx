import "./styles/Features.css";
import { motion } from "framer-motion";

function Features({ project }) {
  return (
    <section className="case-section">
      <div className="container">

        <motion.h2
          className="case-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Key Features
        </motion.h2>

        <motion.p
          className="features-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          The application was designed with user-centered features that
          improve usability, accessibility, and overall user experience.
        </motion.p>

        <motion.div
          className="features-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {project.features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <span>{index + 1}</span>
              <p>{feature}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Features;