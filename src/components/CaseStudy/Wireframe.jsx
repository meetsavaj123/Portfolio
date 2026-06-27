import "./styles/Wireframe.css";
import { motion } from "framer-motion";

function Wireframe() {
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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            Before designing the final interface, low-fidelity wireframes were
            created to organize the layout, define screen hierarchy, and
            establish a clear navigation flow. This process helped validate the
            overall structure and ensure an intuitive user experience before
            moving to high-fidelity designs.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default Wireframe;