import "./Hero.css";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-greeting">
            👋 Hello, I'm
          </span>

          <h1>
            Meet <span>Savaj</span>
          </h1>

          <h2>
            UI/UX Designer
          </h2>

          <p>
            Passionate about designing intuitive, visually appealing and
            user-centered digital experiences. I transform ideas into
            meaningful interfaces through research, creativity and modern
            design principles.
          </p>

          <div className="hero-buttons">

            <a href="#designs" className="primary-btn">
              View My Designs
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>

          </div>

        </motion.div>

        <motion.div
          className="hero-image-section"
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="glow"></div>

          <img
            src="/images/profile.png"
            alt="Meet Savaj"
            className="hero-image"
          />

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;