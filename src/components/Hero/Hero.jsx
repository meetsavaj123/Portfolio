import "./Hero.css";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="hero-subtitle">Hello, I'm</p>

          <h1 className="hero-title">
            Meet Dhanani
          </h1>

          <h2 className="hero-role">
            UI/UX Designer
          </h2>

          <p className="hero-description">
            I create modern, user-friendly, and visually engaging digital
            experiences with a strong focus on usability, aesthetics, and
            problem-solving.
          </p>

          <a href="#designs" className="hero-btn">
            View My Designs
          </a>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/icons/profile.png"
            alt="Meet Dhanani"
            className="hero-image"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;