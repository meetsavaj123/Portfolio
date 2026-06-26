import "./Journey.css";
import { motion } from "framer-motion";

const journey = [
  {
    year: "2023",
    title: "Started Learning UI/UX",
    subtitle: "Design Foundations",
    desc: "Began learning UI/UX principles, color theory, typography, layout design, and user-centered design using Figma."
  },
  {
    year: "2024",
    title: "Built Personal Projects",
    subtitle: "Practice & Learning",
    desc: "Designed multiple web and mobile interfaces while improving skills in wireframing, prototyping, responsive design, and frontend development with React."
  },
  {
    year: "2025",
    title: "Portfolio & Case Studies",
    subtitle: "Showcasing My Work",
    desc: "Created UI/UX case studies, design systems, and a professional portfolio to demonstrate my design thinking, creativity, and problem-solving process."
  }
];

function Journey() {
  return (
    <section className="Journey" id="Journey">
      <div className="container">

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Design Journey
        </motion.h2>

        <div className="timeline-wrapper">

          {journey.map((item, index) => (
            <motion.div
              className="timeline"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >

              <div className="year">
                {item.year}
              </div>

              <div className="content">
                <h3>{item.title}</h3>
                <h4>{item.subtitle}</h4>
                <p>{item.desc}</p>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Journey;