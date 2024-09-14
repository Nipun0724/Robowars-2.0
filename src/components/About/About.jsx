import { useEffect, useState, useRef } from 'react';
import "./About.css";
import logo from "../../assets/Log.png";
import AboutImage from "../../assets/AboutImage.jpg";
import GravLogo from "../../assets/gravitas-logo.png";
import warLogo from "../../assets/ROBOWARSmainLOGO.png";

export default function AboutUs() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 1000);

  const cardsRef = useRef([]); // Create a ref to store card elements

  const handleMouseEnter = (cardId) => {
    setHoveredCard(cardId);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const getCardContent = (cardId, imagePath, expandedContent) => {
    if (hoveredCard === cardId || isMobileView) {
      return (
        <div className="expanded-content">
          {expandedContent}
        </div>
      );
    } else {
      return (
        <img
          src={imagePath}
          alt={`Image for ${cardId}`}
          className="card-image"
        />
      );
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1000);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1, // Trigger when 10% of the card is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-trigger');
        } else {
          entry.target.classList.remove('scroll-trigger');
        }
      });
    }, observerOptions);

    cardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  return (
    <div className='AboutSection' style={{ minHeight: "100vh", width: "100vw", alignItems: "center", alignContent: "center" }}>
      <center>
      <div className="cont">
        <div
          id="first"
          className="card"
          ref={(el) => (cardsRef.current[0] = el)}
          onMouseEnter={() => handleMouseEnter("first")}
          onMouseLeave={handleMouseLeave}
        >
          {getCardContent(
            "first",
            logo,
            <div className="expanded-content">
              <img src={AboutImage} alt="About" className="expanded-image" />
              {window.innerWidth<600 ? (
                <p className="expanded-text">
                We, RoboVITics - The official club of VIT, are a collection of
                vehement tech enthusiasts with the aspiration to learn and hone
                our skills & 
              </p>
              ):(
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
              )}
            </div>
          )}
        </div>
        <div
          id="second"
          className="card"
          ref={(el) => (cardsRef.current[1] = el)}
          onMouseEnter={() => handleMouseEnter("second")}
          onMouseLeave={handleMouseLeave}
        >
          {getCardContent(
            "second",
            warLogo,
            <div className="expanded-content">
              <img src={AboutImage} alt="About" className="expanded-image" />
              {window.innerWidth<600 ? (
                <p className="expanded-text">
                We, RoboVITics - The official club of VIT, are a collection of
                vehement tech enthusiasts with the aspiration to learn and hone
                our skills & 
              </p>
              ):(
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
              )}
            </div>
          )}
        </div>
        <div
          id="third"
          className="card"
          ref={(el) => (cardsRef.current[2] = el)}
          onMouseEnter={() => handleMouseEnter("third")}
          onMouseLeave={handleMouseLeave}
        >
          {getCardContent(
            "third",
            GravLogo,
            <div className="expanded-content">
               <img src={AboutImage} alt="About" className="expanded-image" />
               {window.innerWidth<600 ? (
                <p className="expanded-text">
                We, RoboVITics - The official club of VIT, are a collection of
                vehement tech enthusiasts with the aspiration to learn and hone
                our skills & 
              </p>
              ):(
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
              )}
            </div>
          )}
          
        </div>
        
      </div>
      </center>
    </div>
    
  );
}
