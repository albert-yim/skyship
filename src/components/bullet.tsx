import React, { useEffect, useMemo, useState } from "react";
import BULLET from "../assets/bullet.png";
import { useObject } from "../helper/useObject";
type BulletType = {
  initPos: {
    x: number;
    y: number;
  };
};
export type Bullet = {
  drawBullet: () => void;
};
export default function useBullet_test(
  canvas: HTMLCanvasElement,
  initPos: { x: number; y: number },
): Bullet {
  const [pos, setPos] = useState(initPos);
  const drawBullet = () => {
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
    drawBullet,
  };
}
