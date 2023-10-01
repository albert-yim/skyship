import React, { useEffect, useState } from "react";
import { useObject } from "../helper/useObject";

const startPos = {
  x: 300,
  y: 300,
};
const boundary = {
  minX: startPos.x - 100,
  minY: startPos.y - 100,
  maxX: startPos.x + 100,
  maxY: startPos.y + 100,
};
export default function Enemy(canvas: HTMLCanvasElement) {
  const [pos, setPos] = useState({ x: 100, y: 10 });
  const [movePos, _setMovePos] = useState({ x: 0, y: 0 });
  const { pirate_ship } = useObject();

  const moveEnemy = () => {
    setPos((prev) => {
      const { minX, minY, maxX, maxY } = boundary;
      const x = Math.min(maxX, Math.max(minX, prev.x + movePos.x));
      const y = Math.min(maxY, Math.max(minY, prev.y + movePos.y));
      return { x, y };
    });
  };
  /**
   * 다음 해적선이 움직일 위치를 설정하는 함수
   */
  const setMovePos = () => {
    const negativeRandom = () => {
      return Math.round(Math.random()) * 2 - 1;
    };
    const x = Math.random() * 0.3 * negativeRandom();
    const y = Math.random() * 0.3 * negativeRandom();
    _setMovePos({ x, y });
  };

  /**
   * 해적선을 캔버스에 그리는 함수
   * 또한 새로 그릴때 마다 해적선 움직이기
   */
  const drawEnemy = () => {
    const ctx = canvas?.getContext("2d");
    if (!ctx) return;
    moveEnemy();
    ctx.drawImage(pirate_ship, pos.x, pos.y);
  };
  useEffect(() => {
    // 2초 마다 해적선이 움직일 방향 바꾸기
    setInterval(() => setMovePos(), 3000);
  }, []);
  return {
    drawEnemy,
  };
}
