import { useState } from "react";
import Card from "./Card";
import "./Grid.css";
import isWinner from "./helpers/checkWinner";

function Grid({ numberOfCard }) {
  const [board, setBoard] = useState(Array(numberOfCard).fill(""));
  const [turn, setTurn] = useState(true); // trur = O , false = X
  const [winner, setWinner] = useState(null);

  function play(index) {
    if (turn == true) {
      board[index] = "O";
    } else {
      board[index] = "X";
    }

    const win = isWinner(board, turn ? "O" : "X");

    if (win) {
      setWinner(win);
    }
    setBoard([...board]);
    setTurn(!turn);
  }
  function reset() {
    setTurn(true);
    setWinner(null);
    setBoard(Array(numberOfCard).fill(""));
  }

  return (
    <div className="grid-wrapper">
      {winner && (
        <div className="hidden-text">
          <h1 className="turn-highlight-2">Winner is: {winner}</h1>
          <button className="reset" onClick={reset}>
            Reset Game
          </button>
        </div>
      )}
      <h1 className="turn-highlight">Current Turn: {turn ? "O" : "X"}</h1>
      <div className="grid">
        {board.map((ele, index) => (
          <Card
            gameEnd={winner ? true : false}
            key={index}
            onPlay={play}
            player={ele}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
export default Grid;
