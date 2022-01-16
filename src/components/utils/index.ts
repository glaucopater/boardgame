export const getStyle = ({ size, type }: { size: number; type: string }) => {
  console.log(`getStyle: ${size} ${type}`);
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
