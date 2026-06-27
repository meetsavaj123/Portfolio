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
          viewport={{ once: true }}
        >
          The final interface was designed with a focus on simplicity,
          usability, and visual consistency. Each screen is crafted to
          provide users with a seamless and intuitive experience.
        </motion.p>

        <motion.div
          className="gallery-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
        >
          {project.gallery.map((image, index) => (
            <div className="gallery-card" key={index}>
              <img src={image} alt={`Screen ${index + 1}`} />
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Gallery;