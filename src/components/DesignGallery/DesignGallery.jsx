import "./DesignGallery.css";
import { motion } from "framer-motion";

const designs = [
  {
    id: 1,
    title: "Medical Appointment App",
    category: "Mobile UI/UX",
    image: "/designs/design1.png",
    description:
      "A healthcare mobile application designed to simplify appointment booking, improve doctor-patient communication, and create a seamless medical experience.",
  },
  {
    id: 2,
    title: "Food Delivery Platform",
    category: "Web UI Design",
    image: "/designs/design2.png",
    description:
      "A modern food ordering platform focused on quick navigation, intuitive interactions, and an engaging user experience for online ordering.",
  },
  {
    id: 3,
    title: "Online Learning Platform",
    category: "UX Case Study",
    image: "/designs/design3.png",
    description:
      "An educational platform that helps students discover courses, track progress, and learn through a clean and accessible interface.",
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
                <span className="design-category">{item.category}</span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <button className="design-btn">View Case Study →</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DesignGallery;
