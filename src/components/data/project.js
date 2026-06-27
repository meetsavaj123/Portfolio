const projects = [
  {
    id: 1,
    slug: "medicare",

    title: "MediCare - Medical Appointment App",
    category: "Mobile App UI/UX Design",

    cover: "/case-studies/medicare/cover.png",

    role: "UI/UX Designer",
    duration: "Personal Concept Project",
    platform: "Mobile Application",
    tools: "Figma",

    overview:
      "MediCare is a modern healthcare application designed to simplify doctor discovery, appointment booking, and healthcare management. The project focuses on delivering a clean, accessible, and intuitive experience that allows users to schedule appointments quickly while reducing friction throughout the booking process.",

    problem:
      "Many healthcare applications overwhelm users with complex navigation, cluttered interfaces, and confusing appointment flows. Patients often struggle to find doctors, compare specialists, and book appointments efficiently.",

    goal:
      "Design a clean, intuitive, and user-centered healthcare application that enables users to search doctors, browse specialties, and book appointments in just a few simple steps.",

    research: [
      "Users want fast appointment booking with minimal steps.",
      "Trust is improved through doctor ratings and verified profiles.",
      "Simple navigation reduces user frustration.",
      "Clear appointment schedules improve usability."
    ],

    userFlow: "/case-studies/medicare/userflow.png",

    wireframe: "/case-studies/medicare/wireframe.png",

    designSystem: {
      typography: "Poppins",

      colors: [
        "#2563EB",
        "#111827",
        "#F8FAFC",
        "#E5E7EB",
        "#10B981"
      ]
    },

    features: [
      "Doctor Search",
      "Appointment Booking",
      "Medical Categories",
      "Doctor Profiles",
      "Time Slot Selection",
      "Notifications"
    ],

    gallery: [
      "/case-studies/medicare/home-screen.png",
      "/case-studies/medicare/booking-screen.png"
    ],

    challenges: [
      "Creating a simple appointment flow.",
      "Maintaining a clean information hierarchy.",
      "Improving accessibility with proper spacing and typography."
    ],

    nextProject: "foodie"
  }
];

export default projects;