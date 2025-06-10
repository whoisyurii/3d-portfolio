import { useState, memo, Suspense, useEffect } from "react";
import { words } from "../constants";
import Button from "./Button";
import HeroExperience from "../sections/HeroModels/HeroExperience";
import { HeroSkeleton } from "../sections/HeroModels/HeroSkeleton";

const Hero = () => {
  const [idle, setIdle] = useState(false);

  useEffect(() => {
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(() => setIdle(true));
    } else {
      setTimeout(() => setIdle(true), 500);
    }
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* bg pic */}
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="Background Image" loading="eager" />
      </div>

      <div className="hero-layout">
        {/* left side */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1 className="fadein-text">
                Shaping{" "}
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, idx) => (
                      <span
                        key={word.text + idx}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                          loading="lazy"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1 className="fadein-text">into Real Projects</h1>
              <h1 className="fadein-text">that Deliver Results</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I'm Yurii, a Ukrainian web-developer with a passion for code.
            </p>

            <Button
              className="w-full md:w-80 md:h-16 h-12"
              id="button"
              text="More Details"
            />
          </div>
        </header>

        <figure>
          <div className="hero-3d-layout">
            <Suspense fallback={<HeroSkeleton />}>
              {idle ? <HeroExperience /> : <HeroSkeleton />}
            </Suspense>
          </div>
        </figure>
      </div>
    </section>
  );
};

export default memo(Hero);
