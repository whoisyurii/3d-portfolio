import { useEffect, memo } from "react";
import { words } from "../constants";
import Button from "./Button";
import HeroExperience from "../sections/HeroModels/HeroExperience";
import gsap from "gsap";
// import AnimatedCounter from "./AnimatedCounter";

const Hero = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-text h1",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: "power2.inOut",
          delay: 0.6, // delay to ease first load
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" loading="lazy" />
      </div>
      <div className="hero-layout">
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping{" "}
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                          loading="lazy"
                        />
                        {word.text}
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none ">
              Hi, I'm Yurii, a developer based in Ukraine with a passion for
              code.
            </p>
            <Button
              className="w-full md:w-80 md:h-16  h-12"
              id="button"
              text="More Details"
            />
          </div>
        </header>
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
      {/* <AnimatedCounter /> */}
    </section>
  );
};

export default memo(Hero);
