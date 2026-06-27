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
  title: "FlowTask - Project Management Platform",

  category: "Web Dashboard UI/UX Design",

  cover: "/case-studies/flowtask/cover.png",

  overview:
    "FlowTask is a modern SaaS project management platform designed to help teams organize projects, manage tasks, collaborate efficiently, and monitor progress through a clean dashboard experience.",

  role: "UI/UX Designer",

  duration: "Personal Concept Project",

  tools: "Figma",

  platform: "Responsive Web Dashboard",

  problem:
    "Many project management tools overwhelm users with complex interfaces and crowded dashboards, making task management difficult and reducing team productivity.",

  goal:
    "Design a modern, easy-to-use dashboard that helps teams manage projects, monitor progress, collaborate effectively, and complete tasks with minimal effort.",

  research: [
    "Users need a simple dashboard with clear navigation.",
    "Task status should be visible at a glance.",
    "Teams value collaboration and quick project updates.",
    "Responsive layouts improve usability across devices.",
    "Minimal interfaces reduce cognitive load."
  ],

  userFlow: [
    "Login",
    "Dashboard",
    "Create Project",
    "Add Tasks",
    "Assign Team",
    "Track Progress",
    "Complete Project"
  ],

  wireframe:
    "Low-fidelity wireframes were created to organize dashboard sections, simplify task management, and establish a clear information hierarchy before applying the final UI.",

  colors: [
    "#2563EB",
    "#FFFFFF",
    "#F5F7FA",
    "#111827"
  ],

  typography: [
    "Poppins",
    "Inter"
  ],

  gallery: [
    "/case-studies/flowtask/home-screen.png",
    "/case-studies/flowtask/booking-screen.png"
  ],

  features: [
    "Dashboard overview",
    "Project management",
    "Task tracking",
    "Team collaboration",
    "Progress analytics",
    "Pricing page",
    "Responsive layout",
    "Simple navigation",
    "Clean SaaS interface",
    "Modern design system"
  ],

  challenges: [
    "Presenting large amounts of project data clearly.",
    "Designing dashboards that remain clean and uncluttered.",
    "Maintaining consistency across multiple pages.",
    "Improving productivity through better UX."
  ],

  nextProject: {
    title: "Foodie - Food Delivery Mobile App",
    slug: "foodie",
    image: "/designs/design1.png"
  }
};

function FlowTask() {
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

export default FlowTask;