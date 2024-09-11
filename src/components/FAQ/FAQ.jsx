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
            <h2
              style={{
                marginBottom: "0px",
                padding: "15px",
              }}
            >
              01
            </h2>
            <h3>When and where is Robowars happening?</h3>
          </label>
          <div className="faq-content">
            <p>
              Robowars will be happening during Gravitas and will befrom 27th
              sep to 29th sep at the SJT Ground.Stay tuned for the timings!
            </p>
          </div>
        </div>
        <div className="faq-tab">
          <input type="radio" name="acc" id="acc2" />
          <label htmlFor="acc2">
            <h2
              style={{
                marginBottom: "0px",
                padding: "15px",
              }}
            >
              02
            </h2>
            <h3>How can you attend this event?</h3>
          </label>
          <div className="faq-content">
            <p>
              Go to Gravitas website and search for robowars and register for
              the event!
            </p>
          </div>
        </div>
        <div className="faq-tab">
          <input type="radio" name="acc" id="acc3" />
          <label htmlFor="acc3">
            <h2
              style={{
                marginBottom: "0px",
                padding: "15px",
              }}
            >
              03
            </h2>
            <h3>Who is eligible to participate?</h3>
          </label>
          <div className="faq-content">
            <p>
              If you’re a part of a team that builds bots and bots follow our
              regulations. Check out the rulebook above!
            </p>
          </div>
        </div>
        <div className="faq-tab">
          <input type="radio" name="acc" id="acc4" />
          <label htmlFor="acc4">
            <h2
              style={{
                marginBottom: "0px",
                padding: "15px",
              }}
            >
              04
            </h2>
            <h3>How long is the event?</h3>
          </label>
          <div className="faq-content">
            <p>It happens for 4 hours throughout the day for upto 3 days!</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default FAQ;
