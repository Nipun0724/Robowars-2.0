import React from "react";

const Card = ({ data }) => {
  if (!data || !data.team1 || !data.team2) {
    return null; // Just return null or some placeholder if data is missing
  }

  return (
    <li className="tournament-bracket__item">
      <div className="tournament-bracket__match" tabIndex="0">
        <table className="tournament-bracket__table">
          <div className="header">
            <p>Match1</p>
            <time dateTime={data.date || "1998-02-18"}>
              {data.date || "Date not available"}
            </time>
            <div className="line"></div>
          </div>
          <br></br>
          <caption className="tournament-bracket__caption"></caption>

          <tbody className="tournament-bracket__content">
            <tr className="tournament-bracket__team tournament-bracket__team--winner">
              <td className="tournament-bracket__country">
                <abbr className="tournament-bracket__code" title="Canada">
                  {data.team1.team_code || "T1"}
                </abbr>
                <span
                  className="tournament-bracket__flag flag-icon flag-icon-ca"
                  aria-label="Flag"
                ></span>
              </td>
              <td className="tournament-bracket__score">
                <span className="tournament-bracket__number">
                  <img src={data.team1.team_icon || ""} alt="Team 1" />
                </span>
              </td>
            </tr>
            <tr className="tournament-bracket__team">
              <td className="tournament-bracket__country">
                <abbr className="tournament-bracket__code" title="Kazakhstan">
                  {data.team2.team_code || "T2"}
                </abbr>
                <span
                  className="tournament-bracket__flag flag-icon flag-icon-kz"
                  aria-label="Flag"
                ></span>
              </td>
              <td className="tournament-bracket__score">
                <span className="tournament-bracket__number">
                  <img src={data.team2.team_icon || ""} alt="Team 2" />
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
