import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import robovitics from "../../assets/robovitics black logo.png";
import gif from "../../assets/war logo.gif";
import "./Contact.css";

const Contact = () => {
  const controls = useAnimation();

  // Ref for in-view detection
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  // Start animation when in view
  if (inView) {
    controls.start("visible");
  }
  useEffect(() => {
    const preloader = document.getElementById("preloader");
    if (preloader) {
      const handleLoad = () => {
        preloader.remove();
      };
      window.addEventListener("load", handleLoad);

      // Cleanup event listener on unmount
      return () => {
        window.removeEventListener("load", handleLoad);
      };
    }
  }, []);

  return (
    <div>
      <section id="contact" className="contact">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <h2 className="contactUsText">Contact Us</h2>
        </div>
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div className="row mt-5 temp">
            <div className="footer-top">
              <motion.div
                className="containerOfFooter"
                ref={ref}
                variants={{
                  hidden: { opacity: 0.8, x: -200 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={controls}
                transition={{ duration: 1 }}
              >
                <div className="info">
                  <div className="address">
                    <i className="bi bi-geo-alt"></i>
                    <h4>Location:</h4>
                    <p>VIT VELLORE, Tamil Nadu, 632014</p>
                  </div>
                  <div className="open-hours">
                    <i className="bi bi-clock"></i>
                    <h4>Open Hours:</h4>
                    <p>
                      Monday-Saturday:
                      <br />
                      11:00 AM - 05:00 PM
                    </p>
                  </div>
                  <div className="email">
                    <i className="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>robovitics@vit.ac.in</p>
                  </div>
                  <div className="phone">
                    <i className="bi bi-phone"></i>
                    <h4>Call:</h4>
                    <p>(+91) 84910 92405</p>
                  </div>
                </div>
                <img src={gif} alt="war logo" />
                <div>
                  <div className="card1">
                    <div className="background"></div>
                    <div className="logo">
                      <img src={robovitics} alt="Robovitics logo" />
                    </div>
                    <a
                      href="https://www.instagram.com/robovitics/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="box box1">
                        <span className="icon">
                          <svg
                            viewBox="0 0 30 30"
                            xmlns="http://www.w3.org/2000/svg"
                            className="svg"
                          >
                            <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                          </svg>
                        </span>
                      </div>
                    </a>
                    <a
                      href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&amp;heroEntityKey=urn%3Ali%3Aorganization%3A2591255&amp;keywords=robovitics%20-%20the%20official%20robotics%20club%20of%20vit&amp;origin=RICH_QUERY_SUGGESTION&amp;position=0&amp;searchId=33f55617-2386-4f8e-baf1-cca758e151b2&amp;sid=0Ss"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="box box2">
                        <span className="icon">
                          <svg
                            className="svg"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="100"
                            height="100"
                            viewBox="0 0 48 48"
                          >
                            <path
                              fill="#FFF"
                              d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </a>
                    <a
                      href="https://robovitics.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="box box3">
                        <span className="icon">
                          <svg
                            className="svg"
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 512 512"
                          >
                            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path>
                          </svg>
                        </span>
                      </div>
                    </a>
                    <div className="box box4"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="copyright">
          © Copyright{" "}
          <strong>
            <span>Robowars</span>
          </strong>
          . All Rights Reserved
        </div>
      </div>
      {/* <div id="preloader"></div> */}
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center active"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </div>
  );
};

export default Contact;
