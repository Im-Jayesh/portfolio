import { useRef } from "react";

export default function TiltCard() {
  const cardRef = useRef(null);

  function handleMouseMove(e) {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Shine position
    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);

    // Tilt
    const rotateX = ((y / rect.height) - 0.5) * 10; // max 10deg
    const rotateY = ((x / rect.width) - 0.5) * 10;
    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  }

  function resetTilt(e) {
    const card = cardRef.current;
    card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
    card.style.setProperty("--x", `50%`);
    card.style.setProperty("--y", `50%`);
  }

  return (
    <div
      ref={cardRef}
      className="relative w-90 h-96 rounded-xl overflow-hidden transition-transform duration-300 ease-out will-change-transform"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
    >
      {/* Shine */}
      <div
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(255, 209, 243, 0.4), transparent 60%)",
        }}
      ></div>

      {/* Image */}
      <img
        src="https://i.pinimg.com/736x/37/1d/7b/371d7b3a4352e3c817f8b849de65fb49.jpg"
        alt="Card"
        className="w-full h-full object-cover rounded-xl"
      />
    </div>
  );
}
