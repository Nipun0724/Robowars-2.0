import React, { useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import "./FAQ.css";
const FAQ = () => {
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
      <h1 class="faqText">FAQ</h1>
      <motion.div
        className="faq-container"
        id="faqsection"
        ref={ref}
        variants={{
          hidden: { opacity: 0.8, x: -200 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 1 }}
      >
        <div className="faq-tab">
          <input type="radio" name="acc" id="acc1" />
          <label htmlFor="acc1">
            <h2 style={{ marginBottom: "0px", padding: "10px" }}>01</h2>
            <h3>How to apply?</h3>
          </label>
          <div className="faq-content">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur laudantium quia unde a impedit nam? Sed ut vitae
              eveniet aliquam.
            </p>
          </div>
        </div>
        <div className="faq-tab">
          <input type="radio" name="acc" id="acc2" />
          <label htmlFor="acc2">
            <h2 style={{ marginBottom: "0px", padding: "10px" }}>02</h2>
            <h3>How to apply?</h3>
          </label>
          <div className="faq-content">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur laudantium quia unde a impedit nam? Sed ut vitae
              eveniet aliquam.
            </p>
          </div>
        </div>
        <div className="faq-tab">
          <input type="radio" name="acc" id="acc3" />
          <label htmlFor="acc3">
            <h2 style={{ marginBottom: "0px", padding: "10px" }}>03</h2>
            <h3>How to apply?</h3>
          </label>
          <div className="faq-content">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur laudantium quia unde a impedit nam? Sed ut vitae
              eveniet aliquam.
            </p>
          </div>
        </div>
        <div className="faq-tab">
          <input type="radio" name="acc" id="acc4" />
          <label htmlFor="acc4">
            <h2 style={{ marginBottom: "0px", padding: "10px" }}>04</h2>
            <h3>How to apply?</h3>
          </label>
          <div className="faq-content">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur laudantium quia unde a impedit nam? Sed ut vitae
              eveniet aliquam.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default FAQ;
