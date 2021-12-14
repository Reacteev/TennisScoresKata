import React from "react";
import Match from "./tennis/match";

const TennisScores = () => {
  const [scores, setScores] = React.useState(new Match());

  return (
    <>
      <h1>Scores</h1>
      <div className="table">
        <div className="row">
          <div className="cell">Set</div>
          <div className="cell">Player 1</div>
          <div className="cell">Player 2</div>
        </div>
        {scores.sets.map((set, i) => (
          <div className="row" key={`set${i}`}>
            <div className="cell">{i + 1}</div>
            <div className="cell">{set.player1Score}</div>
            <div className="cell">{set.player2Score}</div>
          </div>
        ))}
      </div>
      <h2>Current game: {scores.currentSet.currentGame.score}</h2>
      <div>
        <button onClick={() => setScores(scores.player1Mark())}>
          Player 1 mark
        </button>
        <button onClick={() => setScores(scores.player2Mark())}>
          Player 2 mark
        </button>
      </div>
    </>
  );
};

export default TennisScores;
