import Hero from "./components/Hero";
import ShowcaseSection from "./sections/ShowCaseSection";
import NavBar from "./components/NavBar";
// import LogoSection from "./sections/LogoSection";
import FeatureCards from "./sections/FeatureCards";
import ExperienceSection from "./sections/ExperienceSection";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import AnimatedCounter from "./components/AnimatedCounter";

const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <AnimatedCounter />
        <ShowcaseSection />
        {/* <LogoSection /> */}
        <FeatureCards />
        <ExperienceSection />
        <TechStack />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
