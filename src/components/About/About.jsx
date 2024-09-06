import { useEffect, useState } from 'react';
import "./About.css";
import logo from "../../assets/Log.png";
import AboutImage from "../../assets/AboutImage.jpg";
import GravLogo from "../../assets/gravitas-logo.png";
import warLogo from "../../assets/ROBOWARSmainLOGO.png";

export default function AboutUs() {
  const [scriptsLoaded, setScriptsLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (cardId) => {
    setHoveredCard(cardId);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const getCardContent = (cardId, imagePath, expandedContent) => {
    if (hoveredCard === cardId||window.innerWidth < 1000) {
      return (
        <div className="expanded-content">
          {expandedContent}
        </div>
      );
    } else {
      return <img src={imagePath} alt={`Image for ${cardId}`} style={{width:"80%"}}/>;
    }
  };

  useEffect(() => {
    // Load GSAP and ScrollTrigger dynamically
    const loadScript = (src, integrity) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.integrity = integrity;
        script.crossOrigin = 'anonymous';
        script.referrerPolicy = 'no-referrer';
        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`Script load error: ${src}`));
        document.body.appendChild(script);
      });
    };

    const loadScripts = async () => {
      try {
        await Promise.all([
          loadScript(
            'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js',
            'sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg=='
          ),
          loadScript(
            'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js',
            'sha512-onMTRKJBKz8M1TnqqDuGBlowlH0ohFzMXYRNebz+yOcc5TQr/zAKsthzhuv0hiyUKEiQEQXEynnXCvNTOk50dg=='
          )
        ]);
        setScriptsLoaded(true);
      } catch (error) {
        console.error(error);
      }
    };

    loadScripts();

    return () => {
      // Cleanup: Remove scripts when the component unmounts
      const scripts = document.querySelectorAll('script[src*="gsap"], script[src*="ScrollTrigger"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  useEffect(() => {
    const applyScrollTrigger = () => {
      if (scriptsLoaded && window.gsap && window.ScrollTrigger) {
        window.gsap.killTweensOf(".card"); // Kill any existing tweens
        window.ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Kill any existing ScrollTriggers

        if (window.innerWidth < 1000) {
          window.gsap.to(".card", {
            transform: "translateX(-220%)",
            scrollTrigger: {
              trigger: ".AboutSection",
              scroller: "body",
              start: "top top",
              end: "top -100%",
              scrub: 1,
              pin: true,
              markers: true 
            },
          });
        }
      }
    };

    // Apply ScrollTrigger effect
    applyScrollTrigger();

    // Add resize event listener
    const handleResize = () => {
      if (window.innerWidth < 1000) {
        window.location.reload();
      } else {
        applyScrollTrigger();
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [scriptsLoaded]);
  

  return (
    <div className='AboutSection' style={{height:"100vh", width:"100vw",alignItems:"center",alignContent:"center"}}>
      <div className="cont">
        <div
          id="first"
          className="card"
          onMouseEnter={() => handleMouseEnter("first")}
          onMouseLeave={handleMouseLeave}
        >
          {getCardContent(
            "first",
            logo,
            <div className="expanded-content">
              <img src={AboutImage} alt="About" className="expanded-image" />
              <p className="expanded-text">
                We, RoboVITics - The official club of VIT, are a collection of
                vehement tech enthusiasts with the aspiration to learn and hone
                our skills & the drive to excel. As the official robotics club of
                VIT Vellore, our motto is to support aspiring robotics enthusiasts
                in working on jaw-dropping projects and discovering their
                specialities by holding numerous interactive workshops, seminars,
                and practical sessions. We work together on some remarkable
                projects and support exemplary teams that have received numerous
                accolades.
              </p>
            </div>
          )}
        </div>
        <div
          id="second"
          className="card"
          onMouseEnter={() => handleMouseEnter("second")}
          onMouseLeave={handleMouseLeave}
        >
          {getCardContent(
            "second",
            warLogo,
            <div>
              <h2>Second Card</h2>
              <p>This is the content for the second card.</p>
            </div>
          )}
        </div>
        <div
          id="third"
          className="card"
          onMouseEnter={() => handleMouseEnter("third")}
          onMouseLeave={handleMouseLeave}
        >
          {getCardContent(
            "third",
            GravLogo,
            <div>
              <h2>Third Card</h2>
              <p>This is the content for the third card.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
