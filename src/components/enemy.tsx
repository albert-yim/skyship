import React, { useEffect, useState } from "react";
import { Bullet } from "../class/Bullet";
import useInterval from "../helper/useInterval";
import { useObject } from "../helper/useObject";

const startPos = {
  x: 300,
  y: 300,
};
const boundary = {
  minX: startPos.x - 50,
  minY: startPos.y - 50,
  maxX: startPos.x + 50,
  maxY: startPos.y + 50,
};
const speed = 0.3;

export default function Enemy(canvas: HTMLCanvasElement) {
  const [pos, setPos] = useState(startPos);
  const [movePos, _setMovePos] = useState({ x: 0, y: 0 });
  const [bulletList, setBulletList] = useState<Bullet[]>([]);
  const { pirate_ship, bullet: bulletImg } = useObject();

  const shootBullet = () => {
    const bullet: Bullet = new Bullet(bulletImg, pos.x, pos.y);
    setBulletList((prev) => [...prev, bullet]);
  };
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
    const x = Math.random() * speed * negativeRandom();
    const y = Math.random() * speed * negativeRandom();
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
    bulletList?.map((bullet) => bullet.drawBullet(ctx));
    updateBulletList();
  };
  const updateBulletList = () => {
    const newBulletList = bulletList.filter((bullet) => bullet.isValid());
    setBulletList(newBulletList);
  };
  useEffect(() => {
    // 2초 마다 해적선이 움직일 방향 바꾸기
    setInterval(() => setMovePos(), 3000);
  }, []);
  useInterval(shootBullet, 3000);
  return {
    drawEnemy,
  };
}
