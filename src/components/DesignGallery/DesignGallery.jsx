import "./DesignGallery.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const designs = [
    {
    id: 1,
    title: "Foodie - Food Delivery Mobile App",
    category: "Mobile App UI/UX",
    image: "/designs/design1.png",
    description:
      "A modern food delivery application designed to simplify food discovery, ordering, and delivery tracking. The interface combines intuitive navigation, vibrant visuals, and a seamless user experience for quick and convenient meal ordering.",
    link: "/case-study/foodie",
  },
  {
    id: 2,
    title: "MediCare - Medical Appointment App",
    category: "Mobile App UI/UX Design",
    image: "/designs/design2.png",
    description:
      "A clean and user-friendly healthcare application that enables users to find doctors, book appointments, and manage consultations effortlessly. The design emphasizes accessibility, clarity, and a smooth appointment booking experience.",
    link: "/case-study/medicare",
  },

  {
    id: 3,
    title: "Learnify - Online Learning Platform",
    category: "Mobile App UI/UX Design",
    image: "/designs/design3.png",
    description:
      "An intuitive e-learning platform designed to help users discover courses, continue learning, and track their educational progress. The interface focuses on simplicity, structured content, and an engaging learning experience.",
    link: "/case-study/learnify",
  },
  {
    id: 4,
    title: "FlowTask - SaaS Landing Page",
    category: "SaaS Website UI/UX Design",
    image: "/designs/design4.png",
    description:
      "A modern SaaS landing page created to showcase a project management platform with a clean visual hierarchy and minimal interface. The design highlights key features, collaboration tools, and conversion-focused sections while maintaining a premium and professional appearance.",
    link: "/case-study/FlowTask",
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

                <Link to={item.link} className="design-btn">
                  View Case Study →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DesignGallery;
