import { useRef } from "react";

const GlowCard = ({ card, children, index }) => {
  const cardRefs = useRef([]); // Array to hold references to each card DOM element

  const handleMouseMove = (index) => (e) => {
    const card = cardRefs.current[index]; // Get the DOM element for this card
    if (!card) return; // If not found, do nothing

    // Get the card's position and size
    const rect = card.getBoundingClientRect();

    // Calculate mouse position relative to the center of the card
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    // Calculate the angle from the card's center to the mouse pointer (in degrees)
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360; // Make sure angle is between 0 and 360

    card.style.setProperty("--start", angle + 60); // fot this line check .card::before css. This line updates a CSS variable on the card so the card’s style can react to your mouse position in real time. The +60 shifts the calculated angle by 60 degrees to not align directly to a mouse cursor.
  }; // This function runs every time the mouse moves over a card

  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      className="card card-border timeline-card rounded-xl p-10"
    >
      <div className="glow" />
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }, (_, i) => (
          <img src="/images/star.png" key={i} alt="star" className="size-5" />
        ))}
      </div>
      <div className="mb-5">
        <p className="text-white-50 text-lg">{card.review}</p>
      </div>
      {children}
    </div>
  );
};

export default GlowCard;
