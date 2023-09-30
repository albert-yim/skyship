import React, { KeyboardEventHandler, useEffect } from "react";
import { useRef } from "react";
import "./App.css";
import BATTLESHIP from "./assets/battleship.png";
import useBattleship from "./components/battleship";
import useBullet from "./components/bullet";

const canvasWidth = 1024;
const canvasHeight = 600;
function App() {
  const { battleship, pos, moveLeft, moveRight, moveUp, moveDown } =
    useBattleship();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const bullet = useBullet(canvasRef.current, { x: 300, y: 300 });
  useEffect(() => {
    document.addEventListener("keydown", keyDownEvent);
    drawGame();
  }, []);
  // useEffect(() => {
  //   if (canvasRef?.current) {
  //     drawGame();
  //   }
  // }, [canvasRef?.current]);
  // useEffect(() => {
  //   update();
  // }, [pos]);
  // useEffect(() => {
  //   keyEvents();
  //   const canvas = canvasRef.current;
  //   if (canvas) {
  //     const ctx = canvas.getContext("2d");
  //     if (!ctx) return;
  //     ctx.drawImage(battleship, 0, 0);
  //   }
  // }, [battleship]);

  // document.addEventListener("keydown", keyDownEvent);
  const keyEvents = () => {
    // document.addEventListener("keydown", keyDownEvent);
  };
  const keyDownEvent = (e: KeyboardEvent) => {
    switch (e.key) {
      case "ArrowLeft":
        moveLeft();
        e.preventDefault();
        break;
      case "ArrowRight":
        moveRight();
        e.preventDefault();
        break;
      case "ArrowUp":
        moveUp();
        e.preventDefault();
        break;
      case "ArrowDown":
        moveDown();
        e.preventDefault();
        break;
    }
  };
  const clearCanvas = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  };
  const drawSpaceShip = (ctx: CanvasRenderingContext2D) => {
    ctx.drawImage(battleship, pos.x, pos.y);
  };
  const drawGame = () => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    const msg = document.getElementById("log");
    msg.innerText = `current pos: ${pos.x}`;
    clearCanvas(ctx);
    drawSpaceShip(ctx);
    bullet.moveBullet();
  };
  window.requestAnimationFrame(drawGame);
  return (
    <div className="App">
      <h1>{`${pos.x} : ${pos.y}`}</h1>
      <h2 id="log">empty</h2>
      <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />
    </div>
  );
}

export default App;
