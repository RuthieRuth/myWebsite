import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";

function App() {
  return (
    <>
      <div>
        <Nav />
        <section id="home" className="scroll-mt-24"><HeroSection /></section>
        <section id="about" className="scroll-mt-24"><About /></section>
         <section id="projects" className="scroll-mt-24"><Projects /></section>
        <section id="skills" className="scroll-mt-24"><TechStack /></section>
        <section id="contact" className="scroll-mt-24"><Contact /></section>
        <Footer />
      </div>
    </>
  );
}

export default App;
