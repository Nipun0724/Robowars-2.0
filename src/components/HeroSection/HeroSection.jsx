import React, { useEffect } from 'react';
import './HeroSection.css';
import roboviticsLogo from '../../assets/robovitics.png';
import robowarsLogo from '../../assets/robowars logo.png';
import robotImage from '../../assets/ei_1708888489476-removebg-preview.png';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const navigate = useNavigate(); // For navigation to the tournament page

  const handleMatchesClick = () => {
    navigate('/tournament'); // Navigate to the tournament page
  };

  return (
    <motion.div
      className="hero-section"
      initial={{ opacity: 0 }} // Initial animation state (hidden)
      animate={{ opacity: 1 }} // Final animation state (visible)
      transition={{ duration: 1 }} // Animation duration of 1 second
    >
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
    </motion.div>
  );
};

export default HeroSection;
