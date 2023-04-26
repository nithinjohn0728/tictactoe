import { useState } from "react";
import "./App.css";
import Cells from "./components/Cells";

function App() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [chance, setChance] = useState("o");
  const [winningMessage, setWinningMessage] = useState(null);
  const message = `The current chance is for ${chance}`;
  console.log(cells);
  return (
    <div className="app">
      <div className="board">
        {cells.map((cell, index) => (
          <Cells
            key={index}
            id={index}
            cell={cell}
            setCells={setCells}
            chance={chance}
            setChance={setChance}
          />
        ))}
        {message}
      </div>

      <p>This is the content</p>
    </div>
  );
}

export default App;
