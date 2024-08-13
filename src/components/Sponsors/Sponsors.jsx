import React, { useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import autodesk from "../../assets/autodesk.png";
import electric from "../../assets/electric.png";
import "./Sponsors.css";

const Sponsors = () => {
  const controls = useAnimation();

  // Ref for in-view detection
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  // Start animation when in view
  if (inView) {
    controls.start("visible");
  }
  return (
    <div>
      <section id="Sponsors" class="FAQ">
        <div class="container aos-init aos-animate" data-aos="fade-up">
          <h2 class="sponsersText"> Sponsors</h2>

          <motion.picture
            ref={ref}
            variants={{
              hidden: { opacity: 0.8, x: -200 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 1 }}
          >
            {/* <img id="autodesk_img" src={autodesk} alt="autodesk.png" />
            <img id="electric_img" src={electric} alt="electric.png" /> */}
            <h1>Coming Soon...</h1>
          </motion.picture>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;
