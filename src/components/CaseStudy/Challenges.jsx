import "./styles/Challenges.css";
import { motion } from "framer-motion";

function Challenges({ project }) {
  return (
    <section className="case-section">
      <div className="container">

        <motion.h2
          className="case-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Challenges & Learnings
        </motion.h2>

        <motion.p
          className="challenges-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Throughout this project, several design challenges were addressed
          while improving usability, consistency, and overall user experience.
        </motion.p>

        <motion.div
          className="challenges-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {project.challenges.map((challenge, index) => (
            <div className="challenge-card" key={index}>
              <span>{index + 1}</span>
              <p>{challenge}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Challenges;