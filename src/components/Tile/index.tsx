import { IGenericShapeProps } from "./types";
import "./styles.css";
import { getStyle } from "../utils";

export const GenericShape = (props: IGenericShapeProps) => {
  const { height, width, pattern, id } = props;

  return (
    <div
      className={"tile " + id}
      style={{
        height: height * 3,
        width: width * 3,
      }}
    >
      {pattern.map((item, index) => (
        <div
          key={index}
          style={{ height, width, ...getStyle({ type: item, size: width }) }}
          className={item}
        ></div>
      ))}
    </div>
  );
};

const Plus_Shape = (props: any) => {
  const pattern = ["top", "right", "center", "bottom", "left"];
  return <GenericShape {...props} pattern={pattern} />;
};

const T_Shape = (props: any) => {
  const pattern = ["right", "center", "bottom", "left"];
  return <GenericShape {...props} pattern={pattern} />;
};

const Castle_Shape = (props: any) => {
  const pattern = ["top", "right", "center", "left"];
  return <GenericShape {...props} pattern={pattern} />;
};

const FaceLeft_Shape = (props: any) => {
  const pattern = ["top", "right", "center", "bottom"];
  return <GenericShape {...props} pattern={pattern} />;
};

const FaceRigth_Shape = (props: any) => {
  const pattern = ["top", "center", "bottom", "right"];
  return <GenericShape {...props} pattern={pattern} />;
};

// a function that returns a random value in a, b, c, d or e
const randomValues = (randomValues: string[]) => {
  const values = [...randomValues];
  return values[Math.floor(Math.random() * values.length)];
};

// a component that renders a chess board with pieces
export const Tile = () => {
  const randomValue = randomValues([
    "T_Shape",
    "Plus_Shape",
    "Castle_Shape",
    "FaceRigth_Shape",
    "FaceLeft_Shape",
  ]);

  const defaultProps = {
    width: 20,
    height: 20,
  };

  switch (randomValue) {
    case "Plus_Shape":
      return <Plus_Shape {...defaultProps} id={randomValue} />;
    case "Castle_Shape":
      return <Castle_Shape {...defaultProps} id={randomValue} />;
    case "FaceLeft_Shape":
      return <FaceLeft_Shape {...defaultProps} id={randomValue} />;
    case "FaceRigth_Shape":
      return <FaceRigth_Shape {...defaultProps} id={randomValue} />;
    case "T_Shape":
    default:
      return <T_Shape {...defaultProps} id={randomValue} />;
  }
};
