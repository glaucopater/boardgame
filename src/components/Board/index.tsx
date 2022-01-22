import { BoardProps } from "./types";
import { Tile } from "../Tile";
import "./styles.css";

// a component that renders a chess board with pieces
export const Board = (props: BoardProps) => {
  const { height, width } = props;

  // create the board
  return (
    <div className="board-row">
      {[...Array(width)].map((_item, rowIndex) => {
        const row = [...Array(height)].map((_item, index) => (
          <span className="board-item" key={`${rowIndex}-${index}`}>
            <Tile />
          </span>
        ));
        return <div key={rowIndex}>{row} </div>;
      })}
    </div>
  );
};
