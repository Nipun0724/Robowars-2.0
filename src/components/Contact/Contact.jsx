import React, { useRef, useEffect,useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import robovitics_mob from "../../assets/RoboVITics White Logo.svg";
import robovitics_desktop from "../../assets/robovitics logo.png";
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
  const LogoComponent = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      window.addEventListener("resize", handleResize);
  
      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    return (
      <div className="logo">
        {windowWidth > 1188 ? (
          <img src={robovitics_desktop} alt="Desktop Logo" />
        ) : (
          <img src={robovitics_mob} alt="Mobile Logo" />
        )}
      </div>
    );
  };

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
                
                
            <div className="bg-[#27074d] rounded-2xl shadow-sm shadow-[#27074d] px-1.5 pt-2 pb-4 m-0">
              <div className="relative flex justify-center items-center h-50 w-78 p-4 bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8 origin-bottom-right overflow-hidden mb-[1rem] transition duration-500 hover:rotate-12 
              before:absolute before:w-20 before:h-20 before:bg-[#27074d] before:rounded-full before:blur-xl before:top-20 before:right-16 before:transition before:duration-500 hover:before:translate-y-12 hover:before:-translate-x-32 
              after:absolute after:w-24 after:h-24 after:bg-[#27074d] after:rounded-full after:blur-xl after:bottom-32 after:right-16 after:transition after:duration-500 hover:after:translate-x-24">
              <div className="z-10 flex flex-col items-center gap-2">
              <span className="text-slate-400 text-4xl font-bold">ARYAN <br></br> BHARUKA </span>
              <p className="text-gray-50">Chair person<br></br>Ph : 9518761640</p>
            </div>
            </div>
<div className="relative flex justify-center items-center p-5 h-50 w-78 bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8 origin-bottom-right overflow-hidden mb-[1rem] transition duration-500 hover:rotate-12 
  before:absolute before:w-20 before:h-20 before:bg-[#27074d] before:rounded-full before:blur-xl before:top-20 before:right-16 before:transition before:duration-500 hover:before:translate-y-12 hover:before:-translate-x-32 
  after:absolute after:w-24 after:h-24 after:bg-[#27074d] after:rounded-full after:blur-xl after:bottom-32 after:right-16 after:transition after:duration-500 hover:after:translate-x-24">
  <div className="z-10 flex flex-col items-center gap-2">
    <span className="text-slate-400 text-4xl font-bold">ANIRUDDH <br></br> CHAUDARY </span>
    <p className="text-gray-50">Vice Chair Person<br></br>Ph : 7977957614</p>
  </div>
</div>
</div>

                <img src={gif} alt="war logo" className="war-logo"/>
                <div>
                  <div className="card1">
                    <div className="background"></div>
                    <LogoComponent/>
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
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" className="svg" >
      <switch>
        <g>
          <path fill="#FFF" d="M60 120C26.9 120 0 93.1 0 60S26.9 0 60 0s60 26.9 60 60-26.9 60-60 60zM60 5C29.7 5 5 29.7 5 60s24.7 55 55 55 55-24.7 55-55S90.3 5 60 5z" />
          <path fill="#FFF" d="M60 120c-19.3 0-34.4-26.4-34.4-60S40.7 0 60 0s34.4 26.4 34.4 60-15.1 60-34.4 60zM60 5C43.8 5 30.5 29.7 30.5 60s13.2 55 29.5 55 29.5-24.7 29.5-55S76.2 5 60 5z" />
          <path fill="#FFF" d="M12.2 25.6h95.6v5H12.2zM12.2 89.5h95.6v5H12.2zM2.5 57.5h115v5H2.5z" />
          <path fill="#FFF" d="M57.5 2.5h5v115h-5z" />
        </g>
      </switch>
    </svg>
  </span>
</div>

                    </a>
                    <a 
                    href="https://www.facebook.com/robovitics"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                      <div className="box box4">
                    <span className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="svg">
                       <path fillRule="evenodd" fill="#FFF" d="M12 5.5H9v-2a1 1 0 0 1 1-1h1V0H9a3 3 0 0 0-3 3v2.5H4V8h2v8h3V8h2l1-2.5z" clipRule="evenodd"></path>
    </svg>
  </span>
</div>

                    </a>
                    
                    
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#945ebd] text-white flex flex-wrap justify-evenly py-1.5">
      <div className='flex'>
      <i className="bi bi-envelope px-2"></i>
      <p className="text-white"><a href="mailto:robovitics@vit.ac.in" target="_blank"> robovitics@vit.ac.in</a></p>
      </div>

      <div className='flex'>
      <i className="bi bi-geo-alt px-1"></i>
      <p> <a href="https://maps.app.goo.gl/rjWZsSapLKoqnVnTA" target="_blank">
      VIT VELLORE, Tamilnadu, 632,014</a></p>
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
