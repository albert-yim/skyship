import React, { useEffect, useMemo, useState } from "react";
import BULLET from "../assets/bullet.png";
import { useObject } from "../helper/useObject";
type BulletType = {
  initPos: {
    x: number;
    y: number;
  };
};
export default function useBullet(
  canvas: HTMLCanvasElement,
  initPos: { x: number; y: number },
) {
  const [pos, setPos] = useState(initPos);
  const moveBullet = () => {
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(bullet, pos.x, pos.y);
    if (pos.x <= 0 || pos.y <= 0) {
      return;
    }
    setPos((prev) => {
      return {
        ...prev,
        x: prev.x - 5,
      };
    });
  };
  const { bullet } = useObject();
  return {
    bullet,
    pos,
    moveBullet,
  };
}
