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
  title: "MediCare - Medical Appointment App",

  category: "Healthcare Mobile App UI/UX",

  cover: "/case-studies/medicare/cover.png",

  overview:
    "MediCare is a healthcare mobile application that enables users to discover doctors, schedule appointments, and manage consultations through a clean, accessible, and user-friendly interface.",

  role: "UI/UX Designer",

  duration: "Personal Concept Project",

  tools: "Figma",

  platform: "Mobile Application",

  problem:
    "Many healthcare applications have confusing booking flows and cluttered interfaces, making it difficult for patients to quickly find doctors and book appointments.",

  goal:
    "Design a simple and trustworthy healthcare experience that helps users search doctors, choose available time slots, and confirm appointments with minimal effort.",

  research: [
    "Users prefer a simple appointment booking process.",
    "Doctor information should be easy to scan.",
    "Search functionality should always be visible.",
    "Available dates and times must be clearly organized.",
    "Healthcare apps should feel clean, trustworthy, and accessible."
  ],

  userFlow: [
    "Open App",
    "Search Doctor",
    "Select Doctor",
    "Choose Date",
    "Choose Time",
    "Confirm Appointment",
    "Receive Booking"
  ],

  wireframe:
    "Low-fidelity wireframes were created to organize doctor listings, simplify appointment booking, and establish a clear navigation flow before designing the final interface.",

  colors: [
    "#2563EB",
    "#FFFFFF",
    "#F5F7FB",
    "#111827"
  ],

  typography: [
    "Poppins",
    "Inter"
  ],

  gallery: [
    "/case-studies/medicare/home-screen.png",
    "/case-studies/medicare/booking-screen.png"
  ],

  features: [
    "Doctor search",
    "Healthcare categories",
    "Top doctors section",
    "Appointment booking",
    "Date selection",
    "Time slot selection",
    "Visit type selection",
    "Booking confirmation",
    "Modern healthcare interface",
    "Clean and accessible design"
  ],

  challenges: [
    "Creating a booking flow with minimal user effort.",
    "Keeping healthcare information easy to understand.",
    "Maintaining consistency across multiple screens.",
    "Building trust through clean visual design."
  ],

    nextProject: {
    title: "Learnify - Online Learning App",
    slug: "learnify",
    image: "/designs/design3.png"
  }
};

function MediCare() {
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

export default MediCare;