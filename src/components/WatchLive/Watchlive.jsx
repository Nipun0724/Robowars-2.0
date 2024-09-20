import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Watchlive.css';
import Watchlive8 from './Watchlive8'; // Ensure correct import
import Watchlive15 from './Watchlive15'; // Ensure correct import
import Watchlive60 from './Watchlive60'; // Ensure correct import

const Watchlive = () => {
  const [activeButton, setActiveButton] = useState("8KG");
  const navigate = useNavigate();

  return (
    <>
      <nav className="tournament-navbar">
        <button
          className={activeButton === "8KG" ? "active" : ""}
          onClick={() => setActiveButton("8KG")}
        >
          8KG
        </button>
        <button
          className={activeButton === "15KG" ? "active" : ""}
          onClick={() => setActiveButton("15KG")}
        >
          15KG
        </button>
        <button
          className={activeButton === "60KG" ? "active" : ""}
          onClick={() => setActiveButton("60KG")}
        >
          60KG
        </button>
      </nav>

      {activeButton === "8KG" && <Watchlive8 />}
      {activeButton === "15KG" && <Watchlive15 />}
      {activeButton === "60KG" && <Watchlive60 />}

     
      
     
    </>
  );
};

export default Watchlive;
