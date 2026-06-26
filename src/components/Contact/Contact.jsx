import "./Contact.css";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaGlobe,
  FaDownload,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">

        <motion.div
          className="contact-wrapper"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <h2 className="section-title">
            Let's Work Together
          </h2>

          <p className="contact-text">
            I'm currently looking for UI/UX Design internships and
            entry-level opportunities. If you'd like to collaborate,
            discuss a project, or simply connect, I'd be happy to hear from you.
          </p>

          <div className="contact-info">

            <div className="info-card">
              <FaEnvelope className="icon" />
              <div>
                <h4>Email</h4>
                <a href="mailto:meetsavaj123@gmail.com">
                  meetsavaj123@gmail.com
                </a>
              </div>
            </div>

            <div className="info-card">
              <FaPhone className="icon" />
              <div>
                <h4>Phone</h4>
                <a href="tel:+917203995010">
                  +91 72039 95010
                </a>
              </div>
            </div>

            <div className="info-card">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h4>Location</h4>
                <p>Bhavnagar, Gujarat</p>
              </div>
            </div>

          </div>

          <div className="contact-buttons">

            <a
              href="https://www.linkedin.com/in/meet-savaj-cte-gecbvn-it-844280374"
              target="_blank"
              rel="noreferrer"
              className="contact-btn"
            >
              <FaLinkedin />
              LinkedIn
            </a>

            <a
              href="https://github.com/meetsavaj123"
              target="_blank"
              rel="noreferrer"
              className="contact-btn"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://portfolio-nine-ochre-63.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="contact-btn"
            >
              <FaGlobe />
              Portfolio
            </a>

            <a
              href="https://drive.google.com/file/d/1ICIjHNpNUOaqq5HUcHOcNYR_QNdBPXPk/view?usp=drivesdk"
              target="_blank"
              rel="noreferrer"
              className="contact-btn"
            >
              <FaDownload />
              Resume
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Contact;