import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import MediCare from "./pages/CaseStudies/MediCare";
import Foodie from "./pages/CaseStudies/Foodie";
import Learnify from "./pages/CaseStudies/Learnify";
import ProManage from "./pages/CaseStudies/ProManage";

function App() {
  return (
    <Routes>
      {/* Home Page */}
      <Route path="/" element={<Home />} />

      {/* Case Study Pages */}
      <Route path="/case-study/medicare" element={<MediCare />} />
      <Route path="/case-study/foodie" element={<Foodie />} />
      <Route path="/case-study/learnify" element={<Learnify />} />
      <Route path="/case-study/promanage" element={<ProManage />} />
    </Routes>
  );
}

export default App;