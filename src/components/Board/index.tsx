import { BoardProps } from "./types";
import "./styles.css";

// a component that renders a chess board with pieces
export const Board = (props: BoardProps) => {
  console.log(
    "🚀 ~ file: index.tsx ~ line 14 ~ Board ~ Board",
    Array(props.width)
  );

  //

  // create the board
  return (
    <div className="board-row">
      {[...Array(props.width)].map((item, rowIndex) => {
        const row = [...Array(props.height)].map((item, index) => (
          <span className="board-item" key={rowIndex + "-" + index}>
            {rowIndex + "-" + index}
          </span>
        ));

        return <div key={rowIndex}>{row} </div>;
      })}
    </div>
  );
};
