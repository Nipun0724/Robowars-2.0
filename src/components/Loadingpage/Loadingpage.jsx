import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";
import "./Loadingpage.css";

const Progressbar = ({ value }) => {
  const progressRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    if (value === 100) {
      controls.start("fading"); // Start fade-out animation
    }
  }, [value, controls]);

  return (
    <motion.div
      className="progressbar-container"
      ref={progressRef}
      variants={{
        fading: { opacity: 0, y: "100%" }, // Fade out and slide down
      }}
      initial={{
        opacity: 1,
        y: 0,
      }}
      animate={controls}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="bar-contain"
      >
        <div className="progressbar">
          <motion.div
            className="bar"
            animate={{
              width: `${value}%`, // Animate width based on the progress value
            }}
            transition={{
              ease: "linear", // Smooth linear transition
            }}
          />
        </div>
        <div className="loading-text">L o a d i n g</div>
      </div>
    </motion.div>
  );
};

export default Progressbar;
