import { useState,useEffect } from "react";

const CHOICES = [
  { id: "rock", label: "Rock", src: "/images/rock.PNG" },
  { id: "paper", label: "Paper", src: "/images/paper.PNG" },
  { id: "scissors", label: "Scissors", src: "/images/scissors.PNG" },
];

const PlayerThrow = ({ onSelect,resetKey }) => {
  const [selected, setSelected] = useState(null);
    // G
    useEffect(() => {
    setSelected(null);  
  }, [resetKey]);


  const handleClick = (choice) => {
    setSelected(choice);
    onSelect(choice);
  };

  return (
    <div className="player-throw">
      <h2>Choose One To Start</h2>

      <div className="choices">
        {CHOICES.map((choice) => (
          <img
            key={choice.id}
            src={choice.src}
            alt={choice.label}
            className={selected === choice.id ? "selected" : ""}
            onClick={() => handleClick(choice.id)}
          />
        ))}
      </div>
    </div>
  );
};
export default PlayerThrow;
