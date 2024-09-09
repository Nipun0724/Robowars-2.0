import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import robovitics from "../../assets/robovitics logo.png";
import gravitas from "../../assets/gravitas-logo.png";
import "./Navbar.css";

const Navbar = () => {
  const controls = useAnimation();

  useEffect(() => {
    // Start animation after the component mounts
    controls.start("visible");

    // If the window width is less than 1000px, close the navbar on link click
    if (window.innerWidth < 1000) {
      document.querySelectorAll(".link").forEach((link) => {
        link.addEventListener("click", () => {
          document.querySelector(".navbar-toggler").click();
        });
      });
    }
  }, [controls]);

  return (
    <div id="home">
      <motion.nav
        className="navbar navbar-expand-lg navbar-dark fixed-top bg-none"
        id="nav"
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeInOut" },
          },
        }}
        initial="hidden"
        animate={controls}
        style={
          window.innerWidth < 1000
            ? { padding: 0 }
            : { paddingTop: "20px", backgroundColor: "rgb(0, 0, 0)" }
        }
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ outline: "none" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link to="#home" className="link">
                  <img src={robovitics} alt="Robovitics" />
                </Link>
              </li>
              <li className="nav-item text-link">
                <Link to="#hero" className="link no-wrap">
                  Home
                </Link>
              </li>
              <li className="nav-item text-link">
                <Link to="#aboutUsSection" className="link no-wrap">
                  About Us
                </Link>
              </li>
              <li className="nav-item text-link">
                <Link to="#categories" className="link no-wrap">
                  Categories
                </Link>
              </li>
              <li className="nav-item text-link">
                <Link to="#faqsection" className="link no-wrap">
                  FAQs
                </Link>
              </li>
              <li className="nav-item text-link">
                <Link to="#contact" className="link no-wrap">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#home" className="link last">
                  <img src={gravitas} alt="Gravitas" style={{ marginTop: "-25px" }} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
