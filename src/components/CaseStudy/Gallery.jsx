import "./styles/Gallery.css";
import { motion } from "framer-motion";

function Gallery({ project }) {
  return (
    <section className="case-section">
      <div className="container">

        <motion.h2
          className="case-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Final UI Design
        </motion.h2>

        <motion.p
          className="gallery-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .2 }}
          viewport={{ once: true }}
        >
          The final interface focuses on simplicity, usability, and a modern
          visual experience. Below are the primary screens of the application.
        </motion.p>

        {project.gallery.map((image, index) => (
          <motion.div
            key={index}
            className="gallery-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="gallery-image">

              <img
                src={image}
                alt={`Screen ${index + 1}`}
              />

            </div>

            <div className="gallery-content">

              <span className="gallery-number">
                0{index + 1}
              </span>

              <h3>
                {index === 0
                  ? "Home Screen"
                  : "Booking Screen"}
              </h3>

              <p>
                {index === 0
                  ? "The home screen provides quick access to the application's primary features with a clean layout and intuitive navigation."
                  : "The booking screen enables users to complete their main task efficiently through a simple and user-friendly interface."}
              </p>

            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Gallery;