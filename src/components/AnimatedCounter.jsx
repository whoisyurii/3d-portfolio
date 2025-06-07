import { counterItems } from "../constants";
import CountUp from "react-countup";
import React, { useRef, useEffect, useState, memo } from "react";

const AnimatedCounter = () => {
  const counterRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="counter" ref={counterRef} className="padding-x-lg xl:mt-0 mt-32">
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
                duration={7}
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
