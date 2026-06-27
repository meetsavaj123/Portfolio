import ProjectHero from "../../components/CaseStudy/ProjectHero";
import Overview from "../../components/CaseStudy/Overview";
import Problem from "../../components/CaseStudy/Problem";
import Goal from "../../components/CaseStudy/Goal";
import Research from "../../components/CaseStudy/Research";
import UserFlow from "../../components/CaseStudy/UserFlow";
import Wireframe from "../../components/CaseStudy/Wireframe";
import DesignSystem from "../../components/CaseStudy/DesignSystem";
import Gallery from "../../components/CaseStudy/Gallery";
import Features from "../../components/CaseStudy/Features";
import Challenges from "../../components/CaseStudy/Challenges";
import NextProject from "../../components/CaseStudy/NextProject";

const project = {
  title: "Foodie - Food Delivery Mobile App",

  category: "Mobile App UI/UX Design",

  cover: "/case-studies/foodie/cover.png",

  overview:
    "Foodie is a modern food delivery application designed to help users discover restaurants, order meals, and track deliveries with a smooth and enjoyable experience.",

  role: "UI/UX Designer",

  duration: "Personal Concept Project",

  tools: "Figma",

  platform: "Mobile Application",

  problem:
    "Many food delivery apps contain crowded layouts and complicated ordering flows that slow users down and make ordering frustrating.",

  goal:
    "Design a clean, fast, and visually engaging mobile experience that allows users to browse restaurants, explore menus, and complete orders in only a few steps.",

  research: [
    "Users want to find food quickly.",
    "Restaurant cards should be easy to scan.",
    "Checkout should require minimal steps.",
    "Food images influence purchasing decisions.",
    "Tracking orders should be simple and clear."
  ],

  userFlow: [
    "Open App",
    "Browse Restaurants",
    "Select Restaurant",
    "Choose Food",
    "Add to Cart",
    "Checkout",
    "Track Delivery"
  ],

  wireframe:
    "Low-fidelity wireframes were created to define navigation, organize restaurant listings, and simplify the ordering flow before applying the final visual design.",

  colors: [
    "#FF7A00",
    "#FFFFFF",
    "#F8F8F8",
    "#222222"
  ],

  typography: [
    "Poppins",
    "Inter"
  ],

  gallery: [
    "/case-studies/foodie/home-screen.png",
    "/case-studies/foodie/booking-screen.png"
  ],

  features: [
    "Restaurant discovery",
    "Food search",
    "Popular categories",
    "Restaurant details",
    "Product listing",
    "Offers & Discounts",
    "Cart management",
    "Fast checkout",
    "Responsive mobile layout",
    "Modern UI"
  ],

  challenges: [
    "Keeping restaurant information easy to scan.",
    "Reducing checkout complexity.",
    "Maintaining consistency across screens.",
    "Balancing attractive visuals with usability."
  ],

  nextProject: {
    title: "MediCare - Medical Appointment App",
    slug: "medicare",
    image: "/designs/design2.png"
  }
};

function Foodie() {
  return (
    <>
  
      <ProjectHero project={project} />
      <Overview project={project} />
      <Problem project={project} />
      <Goal project={project} />
      <Research project={project} />
      <UserFlow project={project} />
      <Wireframe project={project} />
      <DesignSystem project={project} />
      <Gallery project={project} />
      <Features project={project} />
      <Challenges project={project} />
      <NextProject project={project} />
    </>
  );
}

export default Foodie;