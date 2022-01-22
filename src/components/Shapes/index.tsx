import { IGenericShapeProps } from "./types";
import "./styles.css";
import { getStyle } from "../../utils";
import { useState } from "react";

export const GenericShape = (props: IGenericShapeProps) => {
  const { height, width, pattern, id, } = props;
  const [rotation, setRotation] = useState(0);

  const handleClick = () => {
    setRotation(rotation + 90);
  };

  return (
    <div
      className={`tile ${id}`}
      style={{
        height: height * 3,
        width: width * 3,
        transform: `rotate(${rotation}deg)`,
      }}
      onClick={handleClick}
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

export const Plus_Shape = (props: any) => {
  const pattern = ["top", "right", "center", "bottom", "left"];
  return <GenericShape {...props} pattern={pattern} />;
};

export const T_Shape = (props: any) => {
  const pattern = ["right", "center", "bottom", "left"];
  return <GenericShape {...props} pattern={pattern} />;
};

export const Castle_Shape = (props: any) => {
  const pattern = ["top", "right", "center", "left"];
  return <GenericShape {...props} pattern={pattern} />;
};

export const FaceLeft_Shape = (props: any) => {
  const pattern = ["top", "right", "center", "bottom"];
  return <GenericShape {...props} pattern={pattern} />;
};

export const FaceRigth_Shape = (props: any) => {
  const pattern = ["top", "center", "bottom", "right"];
  return <GenericShape {...props} pattern={pattern} />;
};
