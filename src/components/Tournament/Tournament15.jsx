import React from "react";
import { useState,useEffect } from "react";
import "./Tournament.css"; // Assuming you saved your CSS as Tournament.css
import { useNavigate,useLocation} from 'react-router-dom';
import { createClient } from "@supabase/supabase-js";
import Card from "./Card";

const supabaseUrl = "https://qstfznnmaweolywnqoes.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzdGZ6bm5tYXdlb2x5d25xb2VzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNTM4MzU5NywiZXhwIjoyMDQwOTU5NTk3fQ.irkSPiBnjA950qxL1A4dgpjjTKnL5Lt0yI9BCJk27EE";
const supabase = createClient(supabaseUrl, supabaseKey);



const Tournament = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [data, setData] = useState([]);
  const handleFetch = async () => {
    let { data: match_8, error } = await supabase.from("match_8").select(`
    *,
    team1:teams!team_1(*),
    team2:teams!team_2(*)
  `);

    if (error) {
      console.error("Error:", error.message);
    } else if (!match_8 || match_8.length === 0) {
      console.log("No records found or table is empty.");
    } else {
      setData(match_8);
    }
  };
  useEffect(() => {
    handleFetch();
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data]);
  const navigate = useNavigate();
  const location = useLocation();

  const handleButtonClick = (buttonName,route) => {
    setActiveButton(buttonName);
    navigate(route); 
   
  };
  useEffect(() => {
    if (location.pathname === '/Tournament') {
      setActiveButton('8KG');
    } else if (location.pathname === '/Tournament15') {
      setActiveButton('15KG');
    } else if (location.pathname === '/Tournament60') {
      setActiveButton('60KG');
    }
  }, [location]);
  return (
    <>
      <nav className="navbar">
      <button
        className={activeButton === '8KG' ? 'active' : ''}
        onClick={() => handleButtonClick('8KG','/Tournament')}
      >
        8KG
      </button>
      <button
        className={activeButton === '15KG' ? 'active' : ''}
        onClick={() => handleButtonClick('15KG','/Tournament15')}
      >
        15KG
      </button>
      <button
        className={activeButton === '60KG' ? 'active' : ''}
        onClick={() => handleButtonClick('60KG','/Tournament60')}
      >
        60KG
      </button>
    </nav>
    <div className="winner-section">
      <h1>Winner's Bracket</h1>
    </div>
    <div class="container">
      
     
      <div class="tournament-bracket tournament-bracket--rounded">
        <div class="tournament-bracket__round tournament-bracket__round--quarterfinals">
          
          <ul class="tournament-bracket__list">
            
          <Card data={data[0]} />
           

          <Card data={data[1]} />
          <Card data={data[0]} />

          <Card data={data[1]} />
          </ul>
        </div>
        <div class="tournament-bracket__round tournament-bracket__round--semifinals">
         
          <ul class="tournament-bracket__list">
          <Card data={data[0]} />

          <Card data={data[1]} />
          </ul>
        </div>
        <div class="tournament-bracket__round tournament-bracket__round--bronze">
         
          <ul class="tournament-bracket__list">
          <Card data={data[0]} />
          </ul>
        </div>
        <div class="tournament-bracket__round tournament-bracket__round--gold">
          
          <ul class="tournament-bracket__list">
          <Card data={data[0]} />
          </ul>
        </div>
      </div>
    </div>
    <div className="winner-section">
      <h1>Loser's Bracket</h1>
    </div>
    <div class="container">
      
     
      <div class="tournament-bracket tournament-bracket--rounded">
        <div class="tournament-bracket__round tournament-bracket__round--quarterfinals">
          
          <ul class="tournament-bracket__list">
          <Card data={data[0]} />
           

          <Card data={data[1]} />
          <Card data={data[0]} />

          <Card data={data[1]} />
          </ul>
        </div>
        <div class="tournament-bracket__round tournament-bracket__round--semifinals">
         
          <ul class="tournament-bracket__list">
          <Card data={data[0]} />

          <Card data={data[1]} />
          </ul>
        </div>
        <div class="tournament-bracket__round tournament-bracket__round--bronze">
         
          <ul class="tournament-bracket__list">
          <Card data={data[0]} />
          </ul>
        </div>
        <div class="tournament-bracket__round tournament-bracket__round--gold">
          
          <ul class="tournament-bracket__list">
          <Card data={data[0]} />
          </ul>
        </div>
      </div>
    </div>
    
    
    </>
  );
};

export default Tournament;
