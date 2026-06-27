import "./styles/UserFlow.css";
import { motion } from "framer-motion";

function UserFlow({ project }) {
  return (
    <section className="case-section">
      <div className="container">

        <motion.h2
          className="case-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          User Flow
        </motion.h2>

        <motion.div
          className="userflow-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>{project.userFlow}</p>
        </motion.div>

      </div>
    </section>
  );
}

export default UserFlow;