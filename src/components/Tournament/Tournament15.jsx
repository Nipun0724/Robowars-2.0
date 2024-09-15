import React from "react";
import Card from "./Card";

const Tournament15 = ({ data }) => {
  console.log(data);
  const fetchData = (id, bracket) => {
    return data.find(
      (match) => match.stage_id === id && match.winner_bracket === bracket
    );
  };

  if (!data || data.length === 0) {
    return (
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "20%" }}
      >
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      {!data ? (
        <div className="spinner-grow" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div>
          <div className="winner-section">
            <h1>Winner's Bracket</h1>
          </div>
          <div className="container">
            <div className="tournament-bracket tournament-bracket--rounded">
              <div className="tournament-bracket__round tournament-bracket__round--quarterfinals">
                <ul className="tournament-bracket__list">
                  <Card data={fetchData(11, true)} />
                  <Card data={fetchData(12, true)} />
                  <Card data={fetchData(13, true)} />
                  <Card data={fetchData(14, true)} />
                </ul>
              </div>
              <div className="tournament-bracket__round tournament-bracket__round--semifinals">
                <ul className="tournament-bracket__list">
                  <Card data={fetchData(21, true)} />
                  <Card data={fetchData(22, true)} />
                </ul>
              </div>
              <div className="tournament-bracket__round tournament-bracket__round--bronze">
                <ul className="tournament-bracket__list">
                  <Card data={fetchData(31, true)} />
                </ul>
              </div>
              <div className="tournament-bracket__round tournament-bracket__round--gold">
                <ul className="tournament-bracket__list">
                  <Card data={fetchData(41, true)} />
                </ul>
              </div>
            </div>
          </div>

          <div className="winner-section">
            <h1>Loser's Bracket</h1>
          </div>
          <div className="container">
            <div className="tournament-bracket tournament-bracket--rounded">
              <div className="tournament-bracket__round tournament-bracket__round--quarterfinals">
                <ul className="tournament-bracket__list">
                  <Card data={fetchData(11, false)} />
                  <Card data={fetchData(12, false)} />
                  <Card data={fetchData(13, false)} />
                  <Card data={fetchData(14, false)} />
                </ul>
              </div>
              <div className="tournament-bracket__round tournament-bracket__round--semifinals">
                <ul className="tournament-bracket__list">
                  <Card data={fetchData(21, false)} />
                  <Card data={fetchData(22, false)} />
                </ul>
              </div>
              <div className="tournament-bracket__round tournament-bracket__round--bronze">
                <ul className="tournament-bracket__list">
                  <Card data={fetchData(31, false)} />
                </ul>
              </div>
              <div className="tournament-bracket__round tournament-bracket__round--gold">
                <ul className="tournament-bracket__list">
                  <Card data={fetchData(41, false)} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tournament15;
