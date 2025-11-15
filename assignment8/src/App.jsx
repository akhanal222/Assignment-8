import { useState } from "react";
import "./App.css";
import PlayerThrow from "./components/PlayerThrow";
import ComputerThrow from "./components/ComputerThrow";
import ResultDisplay from "./components/ResultDisplay";
import ScoreBoard from "./components/ScoreBoard";


export default function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");
  const [resetKey, setResetKey] = useState(0);

  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [ties, setTies] = useState(0);

  // Check who win lose or tie and update the score board based on it
  const determineWinner = (player, computer) => {
    if (player === computer) {
      setResult("Tie!");
      setTies((t) => t + 1);
      return;
    }

    const winCases = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper",
    };

    if (winCases[player] === computer) {
      setResult("You Win!");
      setWins((w) => w + 1);
    } else {
      setResult("You Lose!");
      setLosses((l) => l + 1);
    }
  };

  // Player throw 
  const handlePlayerSelect = (choice) => {
    setPlayerChoice(choice);
    setComputerChoice(null);
    setResult("");
  };

  // Computer Throw
  const handleComputerFinish = (finalChoice) => {
    setComputerChoice(finalChoice);
    determineWinner(playerChoice, finalChoice);
    setPlayerChoice(null);
  };

  // Reset the game when user press Reset Game set all thing to 0 ot null 
  const resetGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult("");
    setWins(0);
    setLosses(0);
    setTies(0);
    setResetKey(prev => prev + 1);
  };

  return (
    <div className="app">
      <h1>Rock Paper Scissors Game </h1>

      <ScoreBoard wins={wins} losses={losses} ties={ties} />
      <button className="reset-btn" onClick={resetGame}> Reset Game </button>

      <PlayerThrow onSelect={handlePlayerSelect} resetKey={resetKey} />

      <ComputerThrow playerChoice={playerChoice} onComputerFinish={handleComputerFinish} />

      <ResultDisplay result={result} />

    </div>
  );
}
