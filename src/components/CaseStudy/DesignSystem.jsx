import "./styles/DesignSystem.css";
import { motion } from "framer-motion";

function DesignSystem({ project }) {
  return (
    <section className="case-section">
      <div className="container">

        <motion.h2
          className="case-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Design System
        </motion.h2>

        <div className="design-system-grid">

          <motion.div
            className="design-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>Color Palette</h3>

            <div className="color-list">
              {project.colors.map((color, index) => (
                <div key={index} className="color-item">
                  <div
                    className="color-circle"
                    style={{ background: color }}
                  ></div>

                  <span>{color}</span>
                </div>
              ))}
            </div>

          </motion.div>

          <motion.div
            className="design-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>Typography</h3>

            <div className="font-list">
              {project.typography.map((font, index) => (
                <div key={index} className="font-item">
                  {font}
                </div>
              ))}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default DesignSystem;