import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger); // register gsap plugin, otherwise won't know that you want to apply some scroll features

const ShowcaseSection = () => {
  // create references to each of the projects
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ]; // The .current property is where React stores the actual DOM node (or value) after the component renders. To access the real DOM node (for GSAP, focus, measurements, etc.), you must use .current.
    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1), // +1 because index in array starts at 0 and the first card will start with delay of 0; +1 and then delay for the first one fill be 0.3, for 2nd - 0.6, 3rd - 0.9
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
    gsap.fromTo(
      sectionRef.current, // where to apply effect
      { opacity: 0 }, // what's the initial start effect
      { opacity: 1, duration: 1.5 } // to what effect it comes
    );
  }, []); // works similar to useEffect hook and runs once when the component mounts

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div
          className="showcaselayout" // row on PC and column on mob
        >
          {/* Left side -- primary showcase */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="App image" />
            </div>
            <div className="text-content">
              <h2 className="max-md:text-center">SafeAuto Import</h2>
              <p className="text-white-50 md:text-xl max-md:text-center">
                A website built with Next.js, TypeScript, PostgreQL Tailwind,
                i18n
              </p>
            </div>
          </div>

          {/* Right side -- secondary showcases */}
          {/* first */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              {/* <div className="image-wrapper bg-[#ffefdb]"> */}
              <div className="image-wrapper bg-transparent">
                <img src="/images/project2.png" alt="App image two" />
              </div>
              <h2 className="text-center">
                Startups Now - Entrepreneurs Platform
              </h2>
            </div>

            {/* second */}
            <div className="project" ref={project3Ref}>
              {/* <div className="image-wrapper bg-[#ffe7db]"> */}
              <div className="image-wrapper bg-transparent">
                <img src="/images/project3.png" alt="Startups Now" />
              </div>
              <h2 className="text-center">MovieX - Film Search Mobile App</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
