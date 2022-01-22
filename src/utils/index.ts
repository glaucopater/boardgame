// a function that returns a random value in a, b, c, d or e
export const randomValues = (randomValues: string[]) => {
  const values = [...randomValues];
  return values[Math.floor(Math.random() * values.length)];
};

export const getStyle = ({ size, type }: { size: number; type: string }) => {
    switch (type) {
      case "center":
        return { top: size, left: size };
      case "right":
        return { right: 0, top: size };
      case "left":
        return { left: 0, top: size };
      case "top":
        return { top: 0, left: size };
      case "bottom":
        return { bottom: 0, left: size };
    }
  };
  