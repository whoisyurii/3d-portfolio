const Button = ({ className, id, text }) => {
  return (
    <a
      // When the link is clicked
      onClick={(e) => {
        e.preventDefault(); // Prevent default anchor behavior (no page reload)
        const target = document.getElementById("counter"); // Find the element with id="counter"

        let top; // Declare top outside the if for later use
        if (target && id) {
          // If the target exists and id prop is provided
          const offset = window.innerHeight * 0.15; // Calculate an offset (15% of viewport height)
          top = target.getBoundingClientRect().top + window.scrollY - offset; // Calculate the scroll position, leaving space at the top
        }
        // Smoothly scroll to the calculated position (or undefined if not set)
        window.scrollTo({ top, behavior: "smooth" });
      }}
      className={`${className ?? ""} cta-wrapper`} // Add custom and default classes
    >
      <div className="cta-button group">
        <div className="bg-circle" /> {/* Decorative background circle */}
        <p className="text">{text}</p> {/* Button text */}
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />{" "}
          {/* Down arrow icon */}
        </div>
      </div>
    </a>
  );
};

export default Button; // Export the Button component
