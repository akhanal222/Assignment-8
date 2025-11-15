const ScoreBoard = ({ wins, losses, ties }) => {
  return (
    <div className="scoreboard">
      <h2>Score</h2>
      <h3>Wins: {wins} | Losses: {losses} | Ties: {ties}</h3>
    </div>
  );
}

export default ScoreBoard;
