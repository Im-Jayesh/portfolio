import React, { useEffect, useState } from "react";
import "../css/SolarLoader.css"; // we'll make the animation in CSS

export default function PageLoader({ onFinish }) {
  const [show, setShow] = useState(true);
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onFinish?.();
    }, 3000); // lasts 3 seconds
    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!show) return null;

  return (
    <div className="loader-overlay">
      <div className="solar-system">
        <div className="sun"></div>
        <div className="orbit">
          <div className="planet"></div>
        </div>
      </div>
    </div>
  );
}
