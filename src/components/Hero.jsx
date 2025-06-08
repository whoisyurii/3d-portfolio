import { useEffect, useState, memo, Suspense } from "react";
import { words } from "../constants";
import Button from "./Button";
import HeroExperience from "../sections/HeroModels/HeroExperience";
import gsap from "gsap";
import { HeroSkeleton } from "../sections/HeroModels/HeroSkeleton";
import { useGSAP } from "@gsap/react";

/* ★ 1. tiny helper – one “grey bar”  */
const SkeletonBar = ({ className = "" }) => (
  <div
    className={`animate-pulse bg-white/10 rounded ${className}`}
    /* width/height come from the parent */
  />
);

const Hero = () => {
  const [show3D, setShow3D] = useState(false);

  /* ★ 2. show real text after 0.8 s */
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 800);
    return () => clearTimeout(t);
  }, []);

  useGSAP(() => {
    /* fire the entrance once the real text is there */
    if (!ready) return;
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.33,
        duration: 1,
        ease: "power2.inOut",
        delay: 0.03, // keep total ≈0.83 s
        onComplete: () => setShow3D(true),
      }
    );
  }, [ready]);

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* …background and layout stay as-is … */}
      <div className="hero-layout">
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              {/* ► LINE 1 */}
              {ready ? (
                <h1>
                  Shaping{" "}
                  <span className="slide" style={{ animationDelay: "1s" }}>
                    <span className="wrapper" style={{ animationDelay: "1s" }}>
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
                          {word.text}
                        </span>
                      ))}
                    </span>
                  </span>
                </h1>
              ) : (
                <div className="flex items-center h-10 md:h-12">
                  <SkeletonBar className="w-28 md:w-40 mr-2" />
                  <SkeletonBar className="w-24 md:w-32" />
                </div>
              )}

              {/* ► LINE 2 */}
              {ready ? (
                <h1>into Real Projects</h1>
              ) : (
                <div className="flex items-center h-10 md:h-12">
                  <SkeletonBar className="w-44 md:w-64" />
                </div>
              )}

              {/* ► LINE 3 */}
              {ready ? (
                <h1>that Deliver Results</h1>
              ) : (
                <div className="flex items-center h-10 md:h-12">
                  <SkeletonBar className="w-52 md:w-80" />
                </div>
              )}
            </div>

            {/* ► PARAGRAPH */}
            {ready ? (
              <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                Hi, I'm Yurii, a developer based in Ukraine with a passion for
                code.
              </p>
            ) : (
              <SkeletonBar className="h-6 md:h-8 w-72 md:w-[28rem]" />
            )}

            {/* ► BUTTON */}
            {ready ? (
              <Button
                className="w-full md:w-80 md:h-16 h-12"
                id="button"
                text="More Details"
              />
            ) : (
              <SkeletonBar className="h-14 md:h-16 w-full md:w-80 rounded-xl" />
            )}
          </div>
        </header>

        <figure>
          <div className="hero-3d-layout">
            {show3D ? (
              <Suspense fallback={<HeroSkeleton />}>
                <HeroExperience />
              </Suspense>
            ) : (
              <HeroSkeleton />
            )}
          </div>
        </figure>
      </div>
    </section>
  );
};

export default memo(Hero);
