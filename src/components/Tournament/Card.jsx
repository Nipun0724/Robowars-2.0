import React from "react";

const Card = ({ data }) => {
  return (
    <li class="tournament-bracket__item">
      <div class="tournament-bracket__match" tabindex="0">
        <table class="tournament-bracket__table">
          <caption class="tournament-bracket__caption">
            <time datetime="1998-02-18">{data.date}</time>
          </caption>

          <tbody class="tournament-bracket__content">
            <tr class="tournament-bracket__team tournament-bracket__team--winner">
              <td class="tournament-bracket__country">
                <abbr class="tournament-bracket__code" title="Canada">
                  {data.team1.team_code}
                </abbr>
                <span
                  class="tournament-bracket__flag flag-icon flag-icon-ca"
                  aria-label="Flag"
                ></span>
              </td>
              <td class="tournament-bracket__score">
                <span class="tournament-bracket__number">
                  <img src={data.team1.team_icon} alt="" />
                </span>
              </td>
            </tr>
            <tr class="tournament-bracket__team">
              <td class="tournament-bracket__country">
                <abbr class="tournament-bracket__code" title="Kazakhstan">
                  {data.team2.team_code}
                </abbr>
                <span
                  class="tournament-bracket__flag flag-icon flag-icon-kz"
                  aria-label="Flag"
                ></span>
              </td>
              <td class="tournament-bracket__score">
                <span class="tournament-bracket__number">
                  <img src={data.team2.team_icon} alt="" />
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
