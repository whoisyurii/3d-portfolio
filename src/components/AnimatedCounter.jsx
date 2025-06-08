import { counterItems } from "../constants";
import CountUp from "react-countup";
import React, { useRef, useEffect, useState, memo } from "react";

const AnimatedCounter = () => {
  const counterRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div
      id="counter"
      ref={counterRef}
      className="padding-x-lg xl:mt-0 max-md:mt-4"
    >
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item) => (
          <div
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
            key={item.label}
          >
            <div className="counter-number text-white text-5xl font-bold mb-2">
              <CountUp
                suffix={item.suffix}
                end={item.value}
                duration={3}
                start={isVisible ? 0 : null}
              />
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(AnimatedCounter);
