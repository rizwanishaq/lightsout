import React from "react";
import "./Cell.css";

function Cell({ isLit, flipCellsAroundMe }) {
  return (
    <td
      className={"Cell" + (isLit ? " Cell-lit" : "")}
      onClick={e => {
        flipCellsAroundMe();
      }}
    />
  );
}

export default Cell;
