import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import ProjectsDados from "../components/ProjectsDados/ProjectsDados";
import Services from "../components/Services/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <ProjectsDados />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
