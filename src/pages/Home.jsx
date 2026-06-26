import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import DesignGallery from "../components/DesignGallery/DesignGallery";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Journey from "../components/Journey/Journey";import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <DesignGallery />
      <About />
      <Skills />
      <Journey />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;