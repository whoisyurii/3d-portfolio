import GlowCard from "../components/GlowCard";
import TitleHeader from "../components/TitleHeader";
import { expCards } from "../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  useGSAP(() => {
    // 1. Select all elements with the class "timeline-card" and turn them into an array
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      // 2. For each card element, create an animation
      gsap.from(card, {
        xPercent: -100, // Start 100% to the left (off-screen)
        opacity: 0, // Start fully transparent
        transformOrigin: "left left", // Set the transform origin to the left edge
        duration: 1, // Animation lasts 1 second
        ease: "power2.inOut", // Use a smooth easing function
        scrollTrigger: {
          trigger: card, // Trigger animation when this card enters viewport
          start: "top 80%", // Start when the top of the card hits 80% down the viewport
        },
      });
    });
    gsap.utils.toArray(".expText").forEach((text) => {
      // 2. For each card element, create an animation
      gsap.from(text, {
        xPercent: 0, // Start 100% to the left (off-screen)
        opacity: 0, // Start fully transparent
        duration: 1, // Animation lasts 1 second
        ease: "power2.inOut", // Use a smooth easing function
        scrollTrigger: {
          trigger: text, // Trigger animation when this card enters viewport
          start: "top 60%", // Start when the top of the card hits 80% down the viewport
        },
      });
    });
  }, []); // Run this effect once on mount

  // Animate the timeline line as the section scrolls into view
  gsap.to(
    ".timeline", // Target the timeline element
    {
      transformOrigin: "bottom bottom", // Animate the transform origin to the bottom
      ease: "power1.inOut", // Use a smooth easing function
      scrollTrigger: {
        trigger: ".timeline", // Trigger when the timeline enters viewport
        start: "top center", // Start when the top of the timeline hits the center of the viewport
        end: "70% center", // End when 70% down the timeline hits the center
        onUpdate: (self) => {
          // This runs every time the scroll position updates within the trigger range
          gsap.to(".timeline", {
            scaleY: 1 - self.progress, // Shrink the timeline as you scroll down (from full height to zero)
          });
        },
      },
    },
    []
  );

  return (
    <section
      id="experience"
      className="w-full md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Professional Work Experience"
          sub="💼 My Career Overview"
        />

        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card, index) => (
              <div key={card.title} className="exp-card-wrapper">
                <div className="xl:w-2/6">
                  <GlowCard card={card} index={index}>
                    {/* this is the children prop */}
                    <div>
                      <img src={card.imgPath} alt={card.title} />
                    </div>
                  </GlowCard>
                </div>
                {/* middle part for gsap animated timeline */}
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>

                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        <img src={card.logoPath} alt="logo" />
                      </div>
                      <div>
                        <h1 className="font-semibold text-3xl">{card.title}</h1>
                        <p className="my-5 text-white-50">📅{card.date}</p>
                        <p className="text-[#839cb5] italic">
                          Responsibilities
                        </p>
                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                          {card.responsibilities.map((responsibility) => (
                            <li key={responsibility}>{responsibility}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
