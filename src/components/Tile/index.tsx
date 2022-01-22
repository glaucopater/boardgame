import { randomValues } from "../../utils";
import {
  Plus_Shape,
  Castle_Shape,
  FaceLeft_Shape,
  FaceRigth_Shape,
  T_Shape,
} from "../Shapes";

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
