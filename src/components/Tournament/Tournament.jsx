import React from "react";
import { useState, useEffect } from "react";
import "./Tournament.css";
import { createClient } from "@supabase/supabase-js";
import Tournament8 from "./Tournament8";
import Tournament15 from "./Tournament15";
import Tournament60 from "./Tournament60";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const Tournament = () => {
  const [activeButton, setActiveButton] = useState("8KG");
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

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  return (
    <>
      <nav className="navbar">
        <button
          className={activeButton === "8KG" ? "active" : ""}
          onClick={() => handleButtonClick("8KG")}
        >
          8KG
        </button>
        <button
          className={activeButton === "15KG" ? "active" : ""}
          onClick={() => handleButtonClick("15KG")}
        >
          15KG
        </button>
        <button
          className={activeButton === "60KG" ? "active" : ""}
          onClick={() => handleButtonClick("60KG")}
        >
          60KG
        </button>
      </nav>
      {activeButton === "8KG" && <Tournament8 data={data} />}
      {activeButton === "15KG" && <Tournament15 data={data} />}
      {activeButton === "60KG" && <Tournament60 data={data} />}
    </>
  );
};

export default Tournament;
