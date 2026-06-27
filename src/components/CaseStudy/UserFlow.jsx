import "./styles/UserFlow.css";
import { motion } from "framer-motion";

function UserFlow() {
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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            The user journey was designed to be simple and intuitive, allowing
            users to move from discovering the application to completing their
            primary task with minimal effort. Each screen focuses on reducing
            friction while maintaining a clean and consistent experience.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default UserFlow;