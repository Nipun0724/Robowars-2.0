import React, { useEffect } from "react";
import "./About.css";

const About = () => {
  useEffect(() => {
    const lever = document.getElementById("switch");
    const textarea = document.getElementById("mainDescriptionPara");

    function updateDescription() {
      if (lever.checked) {
        textarea.innerHTML =
          "We, RoboVITics-The official club of VIT, are a collection of vehement tech enthusiasts with the aspiration to learn and hone our skills & the drive to excel. As the official robotics club of VIT Vellore, our motto is to support aspiring robotics enthusiasts in working on jaw-dropping projects and discovering their specialities by holding numerous interactive workshops, seminars, and practical sessions. We work together on some remarkable projects and support exemplary teams that have received numerous accolades.";
        textarea.style.padding = "2rem";
      } else {
        textarea.innerHTML =
          "ROBOWARS is the flagship event of graVITas and one of the biggest combat robotics events in India. More than 40 bots engage in thrilling battles around-the-clock in the largest and safest arena in India for a chance to win the championship with their war machines. It proves to be an adrenaline rush to the participants as well as the audience. Teams all over the globe gather here to show off their fighting spirits and attain glory.";
        textarea.style.padding = "2rem";
      }
    }

    // Add an event listener to the checkbox for change events
    lever.addEventListener("change", updateDescription);

    // Cleanup event listener on unmount
    return () => {
      lever.removeEventListener("change", updateDescription);
    };
  }, []);

  return (
    <div>
      <div className="aboutUs" id="aboutUsSection">
        <h1 className="aboutUsText">About us</h1>
        <div className="shortDescription">
          <div className="checkbox-wrapper-35">
            <input
              value="private"
              name="switch"
              id="switch"
              type="checkbox"
              className="switch"
            />
            <label htmlFor="switch">
              <span className="switch-x-toggletext">
                <span className="switch-x-unchecked">
                  <span className="switch-x-hiddenlabel">Unchecked: </span>About
                  Robovitics
                </span>
                <span className="switch-x-checked">
                  <span className="switch-x-hiddenlabel">Checked: </span>About
                  Robo-Wars
                </span>
              </span>
            </label>
          </div>

          <div className="mainDescription">
            <p id="mainDescriptionPara">
              We, RoboVITics-The official club of VIT, are a collection of
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
        </div>
      </div>
    </div>
  );
};

export default About;
