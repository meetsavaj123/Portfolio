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
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          The application was designed with usability and simplicity in mind,
          offering essential features that improve the overall user experience.
        </motion.p>

        <div className="features-grid">
          {project.features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="feature-icon">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3>{feature}</h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Features;