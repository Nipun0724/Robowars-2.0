import React, { useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Robot1 from "./Robot1";
import Robot2 from "./Robot2";
import "./Categories.css";

const Categories = () => {
  const controls = useAnimation();

  // Ref for in-view detection
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  // Start animation when in view
  if (inView) {
    controls.start("visible");
  }
  return (
    <>
      <h2 className="aboutUsText">Categories</h2>
      <motion.div
        className="categories"
        id="categories"
        ref={ref}
        variants={{
          hidden: { opacity: 0.8, x: -200 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 1 }}
      >
        <div className="robot1">
          <Robot1 asset={"Asset 1.gltf"} title={"15kg"} />
        </div>
        <div className="robot2">
          <Robot2 asset={"Asset 1.gltf"} title={"60kg"} />
        </div>
      </motion.div>
    </>
  );
};

export default Categories;
