import Hero from "./components/Hero";
import ShowcaseSection from "./sections/ShowCaseSection";
import NavBar from "./components/NavBar";
import LogoSection from "./components/LogoSection";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
    </>
  );
};

export default App;
