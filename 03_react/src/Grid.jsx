import { useState } from "react";
import Card from "./Card";
import "./Grid.css";

function Grid({ numberOfCard }) {
  const [board, setBoard] = useState(Array(numberOfCard).fill(""));

  return (
    <div className="grid">
      {board.map((ele, index) => (
        <Card key={index} />
      ))}
    </div>
  );
}
export default Grid;
