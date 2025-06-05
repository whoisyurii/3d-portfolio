import Hero from "./components/Hero";
import ShowcaseSection from "./sections/ShowCaseSection";
import NavBar from "./components/NavBar";
import LogoSection from "./sections/LogoSection";
import FeatureCards from "./sections/FeatureCards";
import ExperienceSection from "./sections/ExperienceSection";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeatureCards />
      <ExperienceSection />
    </>
  );
};

export default App;
