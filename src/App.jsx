import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import MediCare from "./pages/CaseStudies/MediCare";
import Foodie from "./pages/CaseStudies/Foodie";
import Learnify from "./pages/CaseStudies/Learnify";
import FlowTask from "./pages/CaseStudies/FlowTask";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Case Study Pages */}
        <Route path="/case-study/medicare" element={<MediCare />} />
        <Route path="/case-study/foodie" element={<Foodie />} />
        <Route path="/case-study/learnify" element={<Learnify />} />
        <Route path="/case-study/FlowTask" element={<FlowTask />} />
      </Routes>
    </>
  );
}

export default App;