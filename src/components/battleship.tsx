import React, { useMemo, useState } from "react";
import BATTLESHIP from "../assets/battleship.png";
import { useObject } from "../helper/useObject";

const distanceX = 5;
const distanceY = 5;
export default function useBattleship() {
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });
  const { battleship } = useObject();
  const moveLeft = () => {
    setPos((prev) => ({ ...prev, x: prev.x - distanceX }));
  };

  const moveRight = () => {
    setPos((prev) => ({ ...prev, x: prev.x + distanceX }));
    // setPos({ ...pos, x: pos.x + distanceX });
  };

  const moveUp = () => {
    setPos((prev) => ({ ...prev, y: prev.y - distanceY }));
  };
  const moveDown = () => {
    setPos((prev) => ({ ...prev, y: prev.y + distanceY }));
  };
  return {
    battleship,
    pos,
    moveLeft,
    moveRight,
    moveUp,
    moveDown,
  };
}
