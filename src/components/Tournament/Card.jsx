import React from "react";
import placeholder from "../../assets/placeholder_team.png";

const Card = ({ number, data }) => {
  const placeholderData = {
    date: "TBD",
    team1: {
      team_code: "T1",
      team_icon: `${placeholder}`,
    },
    team2: {
      team_code: "T2",
      team_icon: `${placeholder}`,
    },
  };

  const matchData = {
    ...placeholderData,
    ...data,
    team1: { ...placeholderData.team1, ...data?.team1 },
    team2: { ...placeholderData.team2, ...data?.team2 },
  };

  return (
    <li className="tournament-bracket__item">
      <div className="tournament-bracket__match" tabIndex="0">
        <table className="tournament-bracket__table">
          <div className="header">
            <p>Match {number}</p>
            <time dateTime={matchData.date || "1998-02-18"}>
              {matchData.date}
            </time>
            <div className="line"></div>
          </div>
          <br></br>
          <caption className="tournament-bracket__caption"></caption>

          <tbody className="tournament-bracket__content">
            <tr className="tournament-bracket__team tournament-bracket__team--winner">
              <td className="tournament-bracket__country">
                <abbr className="tournament-bracket__code" title="Team 1">
                  {matchData.team1.team_code}
                </abbr>
                <span
                  className="tournament-bracket__flag flag-icon flag-icon-ca"
                  aria-label="Flag"
                ></span>
              </td>
              <td className="tournament-bracket__score">
                <span className="tournament-bracket__number">
                  <img src={matchData.team1.team_icon} alt="Team 1" />
                </span>
              </td>
            </tr>
            <p style={{ color: "black" }}>V/S</p>
            <tr className="tournament-bracket__team">
              <td className="tournament-bracket__country">
                <abbr className="tournament-bracket__code" title="Team 2">
                  {matchData.team2.team_code}
                </abbr>
                <span
                  className="tournament-bracket__flag flag-icon flag-icon-kz"
                  aria-label="Flag"
                ></span>
              </td>
              <td className="tournament-bracket__score">
                <span className="tournament-bracket__number">
                  <img src={matchData.team2.team_icon} alt="Team 2" />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </li>
  );
};

export default Card;
