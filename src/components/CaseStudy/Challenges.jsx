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
          Challenges
        </motion.h2>

        <motion.p
          className="challenge-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Every design project involves solving real usability and interface
          challenges. These were the key areas addressed during the design
          process.
        </motion.p>

        <div className="challenge-grid">
          {project.challenges.map((item, index) => (
            <motion.div
              key={index}
              className="challenge-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <span className="challenge-number">
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

export default Challenges;