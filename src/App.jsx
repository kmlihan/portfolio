import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Skill from './components/3-skills/Skill';
import Experience from "./components/4-experience/Experience";
import ComingSoonProjects from "./components/5-comming-soon/ComingSoonProjects";

import Contact from "./components/6-contact/Contact";
import Footer from "./components/7-footer/Footer";




function App() {
  return (
    <div className="container">
      <Header />

      <section id="hero">
        <Hero />
      </section>
      <div className="divider" />

      <section id="skills">
        <Skill />
      </section>
      <div className="divider" />

      <section id="experience">
        <Experience />
      </section>
      <div className="divider" />

      <section id="projects">
        <ComingSoonProjects />
      </section>
      <div className="divider" />

      <section id="contact">
        <Contact />
      </section>
      <div className="divider" />

      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;

