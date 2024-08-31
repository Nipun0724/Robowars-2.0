import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";
import robovitics from "../../assets/robovitics logo.png";
import gravitas from "../../assets/gravitas-logo.png";
import "./Navbar.css";

const Navbar = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  if (inView) {
    if (window.innerWidth < 1000) {
      for (var i = 0; i < 6; i = i + 1) {
        document
          .querySelectorAll(".link")
          [i].addEventListener("click", function () {
            document.querySelector(".navbar-toggler").click();
          });
      }
    } else {
      if (document.getElementById("home")) {
        var lastScrollY = window.scrollY;
        window.addEventListener("scroll", () => {
          if (lastScrollY <= window.scrollY) {
            controls.start("up");
          } else {
            controls.start("down");
          }
          lastScrollY = window.scrollY;
        });
      }
    }
  }
  const controls = useAnimation();
  useEffect(() => {
    setTimeout(() => {
      controls.start("visible");
    }, 2000);
  });

  return (
    <div id="home">
      <motion.nav
        class="navbar navbar-expand-lg navbar-dark fixed-top bg-none"
        id="nav"
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
          up: {
            y: -100,
            transition: {
              duration: 0,
            },
          },
          down: {
            y: -2,
            transition: {
              duration: 0,
            },
          },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 1 }}
        style={
          window.innerWidth < 1000
            ? { padding: 0 }
            : { paddingTop: "20px", backgroundColor: "rgb(0, 0, 0)" }
        }
      >
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ outline: "none" }}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2">
              <li class="nav-item">
                <Link to="#home" class="link">
                  <img src={robovitics} alt="" />
                </Link>
              </li>
              <li class="nav-item text-link">
                <Link to="#hero" class="link no-wrap">
                  Home
                </Link>
              </li>
              <li class="nav-item text-link">
                <Link to="#aboutUsSection" class="link no-wrap">
                  About Us
                </Link>
              </li>
              <li class="nav-item text-link">
                <Link to="#categories" class="link no-wrap">
                  Categories
                </Link>
              </li>
              <li class="nav-item text-link">
                <Link to="#faqsection" class="link no-wrap">
                  FAQs
                </Link>
              </li>
              <li class="nav-item text-link">
                <Link to="#contact" class="link no-wrap">
                  Contact Us
                </Link>
              </li>
              <li class="nav-item">
                <Link to="#home" class="link last">
                  <img src={gravitas} alt="" style={{ marginTop: "-25px" }} />
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
