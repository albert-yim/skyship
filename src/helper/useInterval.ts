import { useEffect, useRef } from "react";

export function useInterval(callback: () => void, delay: number) {
  const savedCallback = useRef<() => void>(() => {});

  // 새로운 callback 반영
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // delay 변경시 새로운 interval 지정
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default useInterval;
