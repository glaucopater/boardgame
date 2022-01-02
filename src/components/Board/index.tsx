import { BoardProps } from "./types";
import "./styles.css";
import { SyntheticEvent } from "react";
import { Tile } from "../Tile";

// a component that renders a chess board with pieces
export const Board = (props: BoardProps) => {
  const { height, width } = props;

  const handleClick = (event: SyntheticEvent) => {
    console.log(event.target);
  };

  // create the board
  return (
    <div className="board-row">
      {[...Array(width)].map((_item, rowIndex) => {
        const row = [...Array(height)].map((_item, index) => (
          <span
            className="board-item"
            key={rowIndex + "-" + index}
            onClick={handleClick}
          >
            <Tile ></Tile>
          </span>
        ));

        return <div key={rowIndex}>{row} </div>;
      })}
    </div>
  );
};
