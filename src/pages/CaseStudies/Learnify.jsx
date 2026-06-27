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
  title: "Learnify - Online Learning Mobile App",

  category: "Education Mobile App UI/UX",

  cover: "/case-studies/learnify/cover.png",

  overview:
    "Learnify is a modern e-learning platform designed to help students discover courses, continue learning, and improve their skills through a clean and engaging mobile experience.",

  role: "UI/UX Designer",

  duration: "Personal Concept Project",

  tools: "Figma",

  platform: "Mobile Application",

  problem:
    "Many online learning applications overwhelm users with too much information, making course discovery and learning progress difficult to manage.",

  goal:
    "Create a simple, motivating, and visually engaging learning platform where users can discover courses, continue learning, and track their progress effortlessly.",

  research: [
    "Students prefer clean interfaces with fewer distractions.",
    "Progress tracking motivates learners.",
    "Course search should be quick and intuitive.",
    "Learning dashboards should highlight active courses.",
    "Visual hierarchy improves course discovery."
  ],

  userFlow: [
    "Open App",
    "Browse Courses",
    "Search Course",
    "View Details",
    "Enroll",
    "Continue Learning",
    "Track Progress"
  ],

  wireframe:
    "Low-fidelity wireframes focused on simplifying navigation, organizing course categories, and creating an intuitive learning experience before applying the final visual design.",

  colors: [
    "#5B4BFF",
    "#FFFFFF",
    "#F5F5F5",
    "#1A1A1A"
  ],

  typography: [
    "Poppins",
    "Inter"
  ],

  gallery: [
    "/case-studies/learnify/home-screen.png",
    "/case-studies/learnify/booking-screen.png"
  ],

  features: [
    "Course discovery",
    "Course search",
    "Popular categories",
    "Course details",
    "Progress tracking",
    "Continue learning",
    "Wishlist",
    "Course enrollment",
    "Responsive mobile design",
    "Modern educational interface"
  ],

  challenges: [
    "Keeping the interface clean while displaying many courses.",
    "Making learning progress easy to understand.",
    "Designing consistent layouts across multiple screens.",
    "Creating an engaging learning experience."
  ],

  nextProject: {
    title: "ProManage - Project Management Platform",
    slug: "promanage",
    image: "/designs/design4.png"
  }
};

function Learnify() {
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

export default Learnify;