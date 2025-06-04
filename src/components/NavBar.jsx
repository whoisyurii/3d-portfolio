import { useEffect, useState } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false); // State to track if the page has been scrolled

  useEffect(() => {
    // Define a function to handle scroll events
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10; // Check if the page is scrolled more than 10px vertically
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll); // Add scroll event listener when component mounts

    // Cleanup: remove the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty dependency array means this runs only once when the component mounts

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a className="logo" href="#hero">
          Yurii | @whoisyurii
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default NavBar;
