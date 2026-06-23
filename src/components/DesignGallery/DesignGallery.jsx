import "./DesignGallery.css";
import { motion } from "framer-motion";

const designs = [
  {
    id: 1,
    title: "Medical App UI",
    category: "Mobile Design",
    image: "/designs/design1.png",
  },
  {
    id: 2,
    title: "Food Delivery UI",
    category: "Web Design",
    image: "/designs/design2.png",
  },
  {
    id: 3,
    title: "Learning App UI",
    category: "UI/UX Design",
    image: "/designs/design3.png",
  },
];

function DesignGallery() {
  return (
    <section className="gallery" id="designs">
      <div className="container">
        <h2 className="section-title">Featured Designs</h2>

        <p className="gallery-text">
          A collection of UI/UX designs showcasing user-centered thinking,
          modern interfaces, and visually engaging digital experiences.
        </p>

        <div className="gallery-grid">
          {designs.map((item) => (
            <motion.div
              className="design-card"
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
            >
              <img src={item.image} alt={item.title} />

              <div className="overlay">
                <span>{item.category}</span>

                <h3>{item.title}</h3>

                <button>View Design</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DesignGallery;