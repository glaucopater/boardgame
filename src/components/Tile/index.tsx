import "./styles.css";

const Plus_Shape = () => {
  return (
    <>
      <div className="top"></div>
      <div className="right"></div>
      <div className="center"></div>
      <div className="bottom"></div>
      <div className="left"></div>
    </>
  );
};

const T_Shape = () => {
  return (
    <>
      <div className="right"></div>
      <div className="center"></div>
      <div className="bottom"></div>
      <div className="left"></div>
    </>
  );
};

const Castle_Shape = () => {
  return (
    <>
      <div className="top"></div>
      <div className="right"></div>
      <div className="center"></div>
      <div className="left"></div>
    </>
  );
};

const FaceLeft_Shape = () => {
  return (
    <>
      <div className="top"></div>
      <div className="right"></div>
      <div className="center"></div>
      <div className="bottom"></div>
    </>
  );
};

const FaceRigth_Shape = () => {
  return (
    <>
      <div className="top"></div>
      <div className="center"></div>
      <div className="bottom"></div>
      <div className="left"></div>
    </>
  );
};

// a function that returns a random value in a, b, c, d or e
const randomValues = (randomValues: any) => {
  const values = [...randomValues];
  return values[Math.floor(Math.random() * values.length)];
};

// a component that renders a chess board with pieces
export const Tile = () => {
  const tileContent = <T_Shape />;

  const randomValue = randomValues([
    "T_Shape",
    "Plus_Shape",
    "Castle_Shape",
    "FaceRigth_Shape",
    "FaceLeft_Shape",
  ]);

  switch (randomValue) {
    case "T_Shape":
      return (
        <div className={"tile " + randomValue}>
          <T_Shape />
        </div>
      );
    case "Plus_Shape":
      return (
        <div className={"tile " + randomValue}>
          <Plus_Shape />{" "}
        </div>
      );
    case "Castle_Shape":
      return (
        <div className={"tile " + randomValue}>
          <Castle_Shape />
        </div>
      );
    case "FaceLeft_Shape":
      return (
        <div className={"tile " + randomValue}>
          <FaceLeft_Shape />
        </div>
      );
    case "FaceRigth_Shape":
      return (
        <div className={"tile " + randomValue}>
          <FaceRigth_Shape />
        </div>
      );

    default:
      return <div className={"tile " + randomValue}>{tileContent}</div>;
  }
};
