import React from "react";

const Cells = ({ id, cell, chance, setChance }) => {
  const handleClick = (e) => {
    const occupied =
      e.target.firstChild.classList.contains("o") ||
      e.target.firstChild.classList.contains("x");

    if (!occupied) {
      if (chance === "o") {
        e.target.firstChild.classList.add("o");
        setChance("x");
      }
      if (chance === "x") {
        e.target.firstChild.classList.add("x");
        setChance("o");
      }
    }
  };
  return (
    <div className="square" id={id} onClick={handleClick}>
      <div className={cell}></div>
      {console.log(id)}
    </div>
  );
};

export default Cells;
