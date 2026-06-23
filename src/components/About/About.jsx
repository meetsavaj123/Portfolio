import "./About.css";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="about" id="about">
      <div className="container">

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="about-wrapper">

          <motion.div
            className="about-left"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <h3>Designing Experiences, Not Just Screens.</h3>

            <p>
              I'm <strong>Meet Savaj</strong>, an aspiring UI/UX Designer and IT
              student passionate about creating intuitive, visually engaging,
              and user-centered digital products. I enjoy transforming ideas
              into meaningful experiences through research, wireframing,
              prototyping, and modern interface design.
            </p>

            <p>
              My goal is to design products that are not only visually appealing
              but also easy to use, accessible, and capable of solving real user
              problems.
            </p>

          </motion.div>

          <motion.div
            className="about-right"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="about-card">
              <span>🔍</span>
              <h4>Research</h4>
              <p>Understanding users, identifying pain points, and gathering insights before designing.</p>
            </div>

            <div className="about-card">
              <span>✏️</span>
              <h4>Wireframing</h4>
              <p>Creating user flows and low-fidelity layouts to structure ideas before visual design.</p>
            </div>

            <div className="about-card">
              <span>🎨</span>
              <h4>Visual Design</h4>
              <p>Designing clean, modern, and responsive interfaces with consistency and accessibility.</p>
            </div>

            <div className="about-card">
              <span>🚀</span>
              <h4>Prototype & Testing</h4>
              <p>Building interactive prototypes and refining designs through feedback and usability testing.</p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;