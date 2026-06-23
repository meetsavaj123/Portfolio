import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import DesignGallery from "./components/DesignGallery/DesignGallery";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <DesignGallery />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;