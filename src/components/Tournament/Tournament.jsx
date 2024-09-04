import React, { useEffect, useState } from "react";
import "./Tournament.css"; // Assuming you saved your CSS as Tournament.css
import { createClient } from "@supabase/supabase-js";
import Card from "./Card";

const supabaseUrl = "https://qstfznnmaweolywnqoes.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzdGZ6bm5tYXdlb2x5d25xb2VzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNTM4MzU5NywiZXhwIjoyMDQwOTU5NTk3fQ.irkSPiBnjA950qxL1A4dgpjjTKnL5Lt0yI9BCJk27EE";
const supabase = createClient(supabaseUrl, supabaseKey);

const Tournament = () => {
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
  return (
    <div class="container">
      <div class="tournament-bracket tournament-bracket--rounded">
        <div class="tournament-bracket__round tournament-bracket__round--quarterfinals">
          <ul class="tournament-bracket__list">
            <Card data={data[0]} />

            <Card data={data[1]} />
            <li class="tournament-bracket__item">
              <div class="tournament-bracket__match" tabindex="0">
                <table class="tournament-bracket__table">
                  <caption class="tournament-bracket__caption">
                    <time datetime="1998-02-18">18 February 1998</time>
                  </caption>

                  <tbody class="tournament-bracket__content">
                    <tr class="tournament-bracket__team tournament-bracket__team--winner">
                      <td class="tournament-bracket__country">
                        <abbr class="tournament-bracket__code" title="Finland">
                          FIN
                        </abbr>
                        <span
                          class="tournament-bracket__flag flag-icon flag-icon-fi"
                          aria-label="Flag"
                        ></span>
                      </td>
                      <td class="tournament-bracket__score">
                        <span class="tournament-bracket__number">2</span>
                      </td>
                    </tr>
                    <tr class="tournament-bracket__team">
                      <td class="tournament-bracket__country">
                        <abbr class="tournament-bracket__code" title="Sweden">
                          SVE
                        </abbr>
                        <span
                          class="tournament-bracket__flag flag-icon flag-icon-se"
                          aria-label="Flag"
                        ></span>
                      </td>
                      <td class="tournament-bracket__score">
                        <span class="tournament-bracket__number">1</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>

            <li class="tournament-bracket__item">
              <div class="tournament-bracket__match" tabindex="0">
                <table class="tournament-bracket__table">
                  <caption class="tournament-bracket__caption">
                    <time datetime="1998-02-18">18 February 1998</time>
                  </caption>

                  <tbody class="tournament-bracket__content">
                    <tr class="tournament-bracket__team tournament-bracket__team--winner">
                      <td class="tournament-bracket__country">
                        <abbr class="tournament-bracket__code" title="Russia">
                          RUS
                        </abbr>
                        <span
                          class="tournament-bracket__flag flag-icon flag-icon-ru"
                          aria-label="Flag"
                        ></span>
                      </td>
                      <td class="tournament-bracket__score">
                        <span class="tournament-bracket__number">4</span>
                      </td>
                    </tr>
                    <tr class="tournament-bracket__team">
                      <td class="tournament-bracket__country">
                        <abbr class="tournament-bracket__code" title="Belarus">
                          BEL
                        </abbr>
                        <span
                          class="tournament-bracket__flag flag-icon flag-icon-by"
                          aria-label="Flag"
                        ></span>
                      </td>
                      <td class="tournament-bracket__score">
                        <span class="tournament-bracket__number">1</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
          </ul>
        </div>
        <div class="tournament-bracket__round tournament-bracket__round--semifinals">
          <ul class="tournament-bracket__list">
            <li class="tournament-bracket__item">
              <div class="tournament-bracket__match" tabindex="0">
                <table class="tournament-bracket__table">
                  <caption class="tournament-bracket__caption">
                    <time datetime="1998-02-20">20 February 1998</time>
                  </caption>

                  <tbody class="tournament-bracket__content">
                    <tr class="tournament-bracket__team">
                      <td class="tournament-bracket__country">
                        <abbr class="tournament-bracket__code" title="Canada">
                          CAN
                        </abbr>
                        <span
                          class="tournament-bracket__flag flag-icon flag-icon-ca"
                          aria-label="Flag"
                        ></span>
                      </td>
                      <td class="tournament-bracket__score">
                        <span class="tournament-bracket__number">1</span>
                      </td>
                    </tr>
                    <tr class="tournament-bracket__team tournament-bracket__team--winner">
                      <td class="tournament-bracket__country">
                        <abbr
                          class="tournament-bracket__code"
                          title="Czech Republic"
                        >
                          CZE
                        </abbr>
                        <span
                          class="tournament-bracket__flag flag-icon flag-icon-cz"
                          aria-label="Flag"
                        ></span>
                      </td>
                      <td class="tournament-bracket__score">
                        <span class="tournament-bracket__number">2</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>

            <li class="tournament-bracket__item">
              <div class="tournament-bracket__match" tabindex="0">
                <table class="tournament-bracket__table">
                  <caption class="tournament-bracket__caption">
                    <time datetime="1998-02-20">20 February 1998</time>
                  </caption>

                  <tbody class="tournament-bracket__content">
                    <tr class="tournament-bracket__team">
                      <td class="tournament-bracket__country">
                        <abbr class="tournament-bracket__code" title="Finland">
                          FIN
                        </abbr>
                        <span
                          class="tournament-bracket__flag flag-icon flag-icon-fi"
                          aria-label="Flag"
                        ></span>
                      </td>
                      <td class="tournament-bracket__score">
                        <span class="tournament-bracket__number">4</span>
                      </td>
                    </tr>
                    <tr class="tournament-bracket__team tournament-bracket__team--winner">
                      <td class="tournament-bracket__country">
                        <abbr class="tournament-bracket__code" title="Russia">
                          RUS
                        </abbr>
                        <span
                          class="tournament-bracket__flag flag-icon flag-icon-ru"
                          aria-label="Flag"
                        ></span>
                      </td>
                      <td class="tournament-bracket__score">
                        <span class="tournament-bracket__number">7</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
          </ul>
        </div>
        <div class="tournament-bracket__round tournament-bracket__round--bronze">
          <ul class="tournament-bracket__list">
            <li class="tournament-bracket__item">
              <div class="tournament-bracket__match" tabindex="0">
                <table class="tournament-bracket__table">
                  <caption class="tournament-bracket__caption">
                    <time datetime="1998-02-21">21 February 1998</time>
                  </caption>

                  <tbody class="tournament-bracket__content">
                    <tr class="tournament-bracket__team tournament-bracket__team--winner">
                      <td class="tournament-bracket__country">
                        <abbr class="tournament-bracket__code" title="Finland">
                          FIN
                        </abbr>
                        <span
                          class="tournament-bracket__flag flag-icon flag-icon-fi"
                          aria-label="Flag"
                        ></span>
                      </td>
                      <td class="tournament-bracket__score">
                        <span class="tournament-bracket__number">3</span>
                        <span
                          class="tournament-bracket__medal tournament-bracket__medal--bronze fa fa-trophy"
                          aria-label="Bronze medal"
                        ></span>
                      </td>
                    </tr>
                    <tr class="tournament-bracket__team">
                      <td class="tournament-bracket__country">
                        <abbr class="tournament-bracket__code" title="Canada">
                          CAN
                        </abbr>
                        <span
                          class="tournament-bracket__flag flag-icon flag-icon-ca"
                          aria-label="Flag"
                        ></span>
                      </td>
                      <td class="tournament-bracket__score">
                        <span class="tournament-bracket__number">2</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
          </ul>
        </div>
        <div class="tournament-bracket__round tournament-bracket__round--gold">
          <ul class="tournament-bracket__list">
            <li class="tournament-bracket__item">
              <div class="tournament-bracket__match" tabindex="0">
                <table class="tournament-bracket__table">
                  <caption class="tournament-bracket__caption">
                    <time datetime="1998-02-22">22 February 1998</time>
                  </caption>

                  <tbody class="tournament-bracket__content">
                    <tr class="tournament-bracket__team tournament-bracket__team--winner">
                      <td class="tournament-bracket__country">
                        <abbr
                          class="tournament-bracket__code"
                          title="Czech Republic"
                        >
                          CZE
                        </abbr>
                        <span
                          class="tournament-bracket__flag flag-icon flag-icon-cz"
                          aria-label="Flag"
                        ></span>
                      </td>
                      <td class="tournament-bracket__score">
                        <span class="tournament-bracket__number">1</span>
                        <span
                          class="tournament-bracket__medal tournament-bracket__medal--gold fa fa-trophy"
                          aria-label="Gold medal"
                        ></span>
                      </td>
                    </tr>
                    <tr class="tournament-bracket__team">
                      <td class="tournament-bracket__country">
                        <abbr class="tournament-bracket__code" title="Russia">
                          RUS
                        </abbr>
                        <span
                          class="tournament-bracket__flag flag-icon flag-icon-ru"
                          aria-label="Flag"
                        ></span>
                      </td>
                      <td class="tournament-bracket__score">
                        <span class="tournament-bracket__number">0</span>
                        <span
                          class="tournament-bracket__medal tournament-bracket__medal--silver fa fa-trophy"
                          aria-label="Silver medal"
                        ></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tournament;
