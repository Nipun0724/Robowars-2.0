import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import "./About.css";
import place from "../../assets/12.d2e2077d-9bc6-4b51-b9f3-64cead0bb03d.jpg";

const About = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const controls1 = useAnimation();
  const ref1 = useRef(null);
  const inView1 = useInView(ref1, { once: true });
  if (inView1) {
    console.log("Seen");
    controls1.start("visible");
  }

  const controls2 = useAnimation();
  const ref2 = useRef(null);
  const inView2 = useInView(ref2, { once: true });
  if (inView2) {
    controls2.start("visible");
  }

  const controls3 = useAnimation();
  const ref3 = useRef(null);
  const inView3 = useInView(ref3, { once: true });
  if (inView3) {
    controls3.start("visible");
  }

  return (
    <div className="aboutUs">
      <motion.div
        className="row featurette"
        ref={ref1}
        variants={{
          hidden: { opacity: 0.8, x: -200 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={controls1}
        transition={{ duration: 1 }}
      >
        <div className="col-md-7 content left">
          <h2 className="featurette-heading fw-normal lh-1">RoboVITics</h2>
          {width < 1000 ? (
            <p className="lead">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
              et dolorem earum vel maxime neque.
            </p>
          ) : (
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit sint
              tempora voluptatum omnis iste mollitia officiis esse maxime
              ducimus cum fugit voluptatem earum, eveniet, cupiditate similique
              veniam architecto distinctio porro!
            </p>
          )}
        </div>
        <div className="col-md-5 right aboutImage">
          <img src={place} alt="" />
        </div>
      </motion.div>
      <motion.div
        className="row featurette robowars-desp"
        ref={ref2}
        variants={{
          hidden: { opacity: 0.8, x: 200 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={controls2}
        transition={{ duration: 1 }}
      >
        <div className="col-md-7 order-md-2 content leftText">
          <h2 className="featurette-heading fw-normal lh-1">RoboWars</h2>
          {width < 1000 ? (
            <p className="lead">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
              et dolorem earum vel maxime neque.
            </p>
          ) : (
            <p className="lead">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Distinctio id vel aliquam accusantium eveniet non deleniti animi,
              iure ad magni officia architecto repellendus placeat debitis ullam
              amet! Error, dolorem eligendi!
            </p>
          )}
        </div>
        <div className="col-md-5 order-md-1 leftImage aboutImage">
          <img src={place} alt="" />
        </div>
      </motion.div>
      <motion.div
        className="row featurette gravitas-desp"
        ref={ref3}
        variants={{
          hidden: { opacity: 0.8, x: -200 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={controls3}
        transition={{ duration: 1 }}
      >
        <div className="col-md-7 content left">
          <h2 className="featurette-heading fw-normal lh-1">GraVITas</h2>
          {width < 1000 ? (
            <p className="lead">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
              et dolorem earum vel maxime neque.
            </p>
          ) : (
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              sunt asperiores vel nulla, dicta tenetur nostrum quam iusto
              laboriosam, nobis nihil minus hic magnam enim! Ipsum earum omnis
              nostrum natus?
            </p>
          )}
        </div>
        <div className="col-md-5 right aboutImage">
          <img src={place} alt="" />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
