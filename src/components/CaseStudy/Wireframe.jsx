import "./styles/Wireframe.css";
import { motion } from "framer-motion";

function Wireframe({ project }) {
  return (
    <section className="case-section">
      <div className="container">

        <motion.h2
          className="case-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Wireframing
        </motion.h2>

        <motion.div
          className="wireframe-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>{project.wireframe}</p>
        </motion.div>

      </div>
    </section>
  );
}

export default Wireframe;