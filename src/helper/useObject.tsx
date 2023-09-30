import { useMemo } from "react";
import BATTLESHIP from "../assets/battleship.png";
import BULLET from "../assets/bullet.png";
import PIRATE_SHIP from "../assets/pirate_ship.png";
export const useObject = () => {
  const bullet = useMemo(() => {
    const img = new Image();
    img.src = BULLET;
    return img;
  }, []);

  const battleship = useMemo(() => {
    const img = new Image();
    img.src = BATTLESHIP;
    return img;
  }, []);

  const pirate_ship = useMemo(() => {
    const img = new Image();
    img.src = PIRATE_SHIP;
    return img;
  }, []);
  return { bullet, battleship, pirate_ship };
};
