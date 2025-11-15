import { useEffect, useState } from "react";

const IMAGES = [ "/images/rock.PNG", "/images/paper.PNG","/images/scissors.PNG",];

const ComputerThrow = ({ playerChoice, onComputerFinish }) => {
  const [currentImg, setCurrentImg] = useState("/images/question-mark.PNG"); 
  const [isThinking, setIsThinking] = useState(false);

  useEffect(() => {

    if (!playerChoice) return;

    setIsThinking(true);

    let i = 0;
    const interval = setInterval(() => {
      setCurrentImg(IMAGES[i]);
      i = (i + 1) % 3;
    }, 500);

    // wait 3 seconds before revealing the computer throw randomly 
    const timeout = setTimeout(() => {
      clearInterval(interval);
      const finalThrow = ["rock", "paper", "scissors"][
        Math.floor(Math.random() * 3)
      ];

      setIsThinking(false);

      setCurrentImg(`/images/${finalThrow}.PNG`);

      onComputerFinish(finalThrow);
    }, 3000);
    // Clear the shuffel time after computer choice shown 
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [playerChoice]);

  return (
    <div className="computer-throw">
      <h2>Computer Choice</h2>
      <img src={currentImg} alt="Computer Choice" className="computer-image" />
      {isThinking && <h3 className="thinking-text">Computer is thinking...</h3>}
    </div>
  );
};

export default ComputerThrow;
