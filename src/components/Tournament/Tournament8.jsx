<<<<<<< Updated upstream
import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabase'; 
import './TournamentDet.css'; 

const Tournament8 = () => {
  const [teams, setTeams] = useState([]);
  const [upcomingMatches, setUpcomingMatches] = useState([]);
  const [sortOrder, setSortOrder] = useState({ column: 'losses', order: 'asc' }); 
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchTeams = async () => {
      const { data: matchData, error: matchError } = await supabase.from('match_8').select('*');
      const { data: teamData, error: teamError } = await supabase.from('teams').select('*');

      if (matchError || teamError) {
        console.error('Error fetching data:', matchError || teamError);
        return;
      }

      const teamStats = matchData.reduce((acc, match) => {
        if (match.score_1 < match.score_2) {
          acc[match.team_1] = acc[match.team_1] || { wins: 0, losses: 0 };
          acc[match.team_1].losses += 1;
          
          acc[match.team_2] = acc[match.team_2] || { wins: 0, losses: 0 };
          acc[match.team_2].wins += 1;
        } else if (match.score_2 < match.score_1) {
          acc[match.team_2] = acc[match.team_2] || { wins: 0, losses: 0 };
          acc[match.team_2].losses += 1;
          
          acc[match.team_1] = acc[match.team_1] || { wins: 0, losses: 0 };
          acc[match.team_1].wins += 1;
        }
        return acc;
      }, {});

      const teamsWithStatus = teamData.map(team => ({
        ...team,
        wins: teamStats[team.team_id]?.wins || 0,
        losses: teamStats[team.team_id]?.losses || 0,
        status: (teamStats[team.team_id]?.losses || 0) > 2 ? 'Eliminated' : 'Active',
      }));

      setTeams(teamsWithStatus);
    };

    const fetchUpcomingMatches = async () => {
      const { data: matches, error } = await supabase
          .from('match_8')
          .select('*')
          .gt('time', new Date().toISOString())
          .order('time', { ascending: true })
          .limit(5);
  
      if (error) {
          console.error('Error fetching upcoming matches:', error);
          return;
      }
  
      const { data: teamsData, error: teamError } = await supabase.from('teams').select('team_id, team_icon');
      if (teamError) {
          console.error('Error fetching team icons:', teamError);
          return;
      }
  
      const teamIconsMap = teamsData.reduce((acc, team) => {
          acc[team.team_id] = team.team_icon;
          return acc;
      }, {});
  
      const matchesWithIcons = matches.map(match => ({
          ...match,
          team_1_icon: teamIconsMap[match.team_1],
          team_2_icon: teamIconsMap[match.team_2],
          caption: match.winner_bracket ? 'Winner Bracket' : 'Elimination',
      }));
  
      setUpcomingMatches(matchesWithIcons);
  };
  
    fetchTeams();
    fetchUpcomingMatches();
  }, []);

  const handleSort = (column) => {
    const sortedTeams = [...teams].sort((a, b) => {
      if (sortOrder.column === column) {
        return sortOrder.order === 'asc' ? a[column] - b[column] : b[column] - a[column];
      }
      return 0;
    });
    
    const newOrder = sortOrder.order === 'asc' ? 'desc' : 'asc';
    setTeams(sortedTeams);
    setSortOrder({ column, order: newOrder });
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTeams = teams.filter(team =>
    team.team_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderStatusChip = (status) => {
    return (
      <span className={`status-chip ${status.toLowerCase()}`}>
        {status}
      </span>
    );
  };

  const renderUpcomingMatches = () => {
    if (upcomingMatches.length === 0) {
      return <p className="no-matches">No upcoming matches</p>;
    }

=======
import React, { useState, useEffect } from "react";
import { Bracket } from "react-brackets";
import Card from "./Card"; 
import { supabase } from '../../supabase'; 

const Tournament8 = () => {
  const [data, setData] = useState([]);
  const [numberTeam, setNumberTeam] = useState(32);

  useEffect(() => {
    const fetchData = async () => {
      let { data: matchData, error } = await supabase
        .from('match_8')
        .select('*');

      if (error) console.error("Error fetching data from Supabase", error);
      else setData(matchData);
    };

    fetchData();
  }, []);

  const totalWinnerRounds = Math.ceil(Math.log2(numberTeam));
  const totalLoserRounds = totalWinnerRounds - 1; 

  const fetchMatchData = (id, bracket) => {
    return data.find(
      (match) => match.stage_id === id && match.winner_bracket === bracket
    );
  };

  const prepareBracketData = (totalRounds, isWinnerBracket) => {
    let rounds = [];
    let numMatches = Math.pow(2, totalRounds - 1); 

    for (let round = 1; round <= totalRounds; round++) {
      let matches = Array.from({ length: numMatches }, (_, i) => {
        const matchId = round * 10 + i + 1;
        const matchData = fetchMatchData(matchId, isWinnerBracket);

        return {
          id: matchId,
          date: matchData?.time || "TBD",
          teams: [
            {
              name: matchData?.team1?.team_name || "TBD",
              icon: matchData?.team1?.team_icon || "", 
              score: matchData?.score_1 || "TBD",
            },
            {
              name: matchData?.team2?.team_name || "TBD",
              icon: matchData?.team2?.team_icon || "", 
              score: matchData?.score_2 || "TBD",
            },
          ].filter(team => team.name !== "TBD" || team.score !== "TBD"), 
        };
      });

      rounds.push({
        title: `Round ${round}`,
        seeds: matches,
      });

      numMatches /= 2; 
    }

    return rounds;
  };

  const winnerBracketData = prepareBracketData(totalWinnerRounds, true);
  const loserBracketData = prepareBracketData(totalLoserRounds, false);

  if (!data || data.length === 0) {
>>>>>>> Stashed changes
    return (
      <div className="upcoming-matches-container">
        {upcomingMatches.map((match) => (
          <div key={match.stage_id} className="match-card">
            <div className="match-header">
              <span>Match {match.stage_id}</span>
              <span>{match.caption}</span>
              <span>{new Date(match.time).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}, {new Date(match.time).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
            <hr />
            <div className="match-content">
              <img src={match.team_1_icon} alt="Team 1" className="team-icon small-icon" />
              <span className="vs-text">V/S</span>
              <img src={match.team_2_icon} alt="Team 2" className="team-icon small-icon" />
            </div>
            <div className="score-section">
              <span className="large-score">{match.score_1}</span>
              <span className="large-score">{match.score_2}</span>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
<<<<<<< Updated upstream
    <div className="tournament-container">
      <h1 className="tournament-title">Team Details</h1>

      <div className="search-container">
        <input 
          type="text" 
          placeholder="Search by Team Name" 
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </div>

      <table className="tournament-table">
        <thead>
          <tr>
            <th>Team Name & Icon</th>
            <th onClick={() => handleSort('wins')} style={{ cursor: 'pointer' }}>
              Wins {sortOrder.column === 'wins' ? (sortOrder.order === 'asc' ? '▲' : '▼') : ''}
            </th>
            <th onClick={() => handleSort('losses')} style={{ cursor: 'pointer' }}>
              Losses {sortOrder.column === 'losses' ? (sortOrder.order === 'asc' ? '▲' : '▼') : ''}
            </th>
            <th>Status</th>
            <th>Bracket</th>
          </tr>
        </thead>
        <tbody>
          {filteredTeams.map((team) => (
            <tr key={team.team_id}>
              <td>
                <div className="team-info">
                  <img src={team.team_icon} alt={team.team_name} style={{ width: '50px', marginRight: '8px' }} />
                  {team.team_name}
                </div>
              </td>
              <td>{team.wins}</td>
              <td>{team.losses}</td>
              <td>{renderStatusChip(team.status)}</td>
              <td>{team.status === 'Active' ? 'Winner Bracket' : 'Elimination'}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="upcoming-title">Upcoming Matches</h2>
      {renderUpcomingMatches()}
=======
    <div className="bracket-container">
      {/* Winner's Bracket */}
      {/* <div className="bracket-section winner-section">
        <h1>Winner's Bracket</h1>
        <Bracket
          rounds={winnerBracketData}
          renderSeedComponent={(seedData, breakpoint) => {
            const teams = Array.isArray(seedData.teams) ? seedData.teams : [];
            const team1 = teams.length > 0 ? teams[0] : { name: "TBD", icon: "", score: "TBD" };
            const team2 = teams.length > 1 ? teams[1] : { name: "TBD", icon: "", score: "TBD" };

            return (
              <Card
                number={seedData.id}
                data={{
                  time: seedData.date,
                  team1: { team_icon: team1.icon, score_1: team1.score },
                  team2: { team_icon: team2.icon, score_2: team2.score },
                }}
              />
            );
          }}
        />
      </div> */}

      <div className="bracket-section loser-section">
        <h1>Winner's Bracket</h1>
        <Bracket
          rounds={winnerBracketData}
          renderSeedComponent={(seedData, breakpoint) => {
            const teams = Array.isArray(seedData.teams) ? seedData.teams : [];
            const team1 = teams.length > 0 ? teams[0] : { name: "TBD", icon: "", score: "TBD" };
            const team2 = teams.length > 1 ? teams[1] : { name: "TBD", icon: "", score: "TBD" };

            return (
              <Card
                number={seedData.id}
                data={{
                  time: seedData.date,
                  team1: { team_icon: team1.icon, score_1: team1.score },
                  team2: { team_icon: team2.icon, score_2: team2.score },
                }}
              />
            );
          }}
        />
      </div>
      {/* Loser's Bracket */}
      <div className="bracket-section loser-section">
        <h1>Loser's Bracket</h1>
        <Bracket
          rounds={loserBracketData}
          renderSeedComponent={(seedData, breakpoint) => {
            const teams = Array.isArray(seedData.teams) ? seedData.teams : [];
            const team1 = teams.length > 0 ? teams[0] : { name: "TBD", icon: "", score: "TBD" };
            const team2 = teams.length > 1 ? teams[1] : { name: "TBD", icon: "", score: "TBD" };

            return (
              <Card
                number={seedData.id}
                data={{
                  time: seedData.date,
                  team1: { team_icon: team1.icon, score_1: team1.score },
                  team2: { team_icon: team2.icon, score_2: team2.score },
                }}
              />
            );
          }}
        />
      </div>
>>>>>>> Stashed changes
    </div>
  );
};

export default Tournament8;