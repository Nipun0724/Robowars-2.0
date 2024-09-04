import React from 'react';
import './HeroSection.css';
import roboviticsLogo from '../../assets/robovitics.png';
import robowarsLogo from '../../assets/robowars logo.png';
import robotImage from '../../assets/ei_1708888489476-removebg-preview.png';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="content-wrapper">
        <div className="title">
          <h1 className="herologo">ROBOWARS</h1>
          <img src={robowarsLogo} alt="Robowars Logo" />
        </div>
        <div className="content">
          <img src={robotImage} alt="Robot Image" />
          <h2>
            FORGE<div>.</div>BATTLE<div>.</div>WRECK
          </h2>
          <p>
            EXPERIENCE THE THRILL OF COMBAT ROBOTICS AT ROBOWARS. REGISTER NOW TO BOOK YOUR SEAT AND WITNESS THE CLASH OF ROBOTS
          </p>
          <div className="buttons">
            <button className="watch-live">Watch Live</button>
            <button className="matches">Matches</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
