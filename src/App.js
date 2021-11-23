import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Resume from "./components/resume";
import Services from "./components/services";
import Testimonials from "./components/testimonials";
import Pricing from "./components/pricing";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Protfolio from "./components/portfolio";
import { useState, useEffect } from "react";
import TopButton from "./components/top-button";
function App() {
  const [section, setSection] = useState("#home");
  const sectionChangeHandler = (currentSection) => {
    setSection(currentSection);
  };
  const [topScroll, setTopScroll] = useState(false);
  const windowTopScroll = () => {
    window.scrollY > 550 ? setTopScroll(true) : setTopScroll(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", windowTopScroll);
    return () => {
      window.removeEventListener("scroll", windowTopScroll);
    };
  }, []);
  return (
    <>
      <Navbar onClick={sectionChangeHandler} currentLink={section} />
      <Hero />
      <About />
      <Resume />
      <Services />
      <Testimonials />
      <Protfolio />
      <Pricing />
      <Contact />
      {topScroll ? <TopButton /> : ""}
      <Footer />
    </>
  );
}

export default App;
