import React, { useState, useEffect } from "react";

const TransitionWrapper = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100); // Add a small delay before showing the content
  }, []);

  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
      }}
    >
      {children}
    </div>
  );
};

export default TransitionWrapper;
