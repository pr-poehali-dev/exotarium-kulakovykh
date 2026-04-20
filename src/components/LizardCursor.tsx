import { useEffect, useRef, useState } from "react";

export default function LizardCursor() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [angle, setAngle] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const prev = useRef({ x: -200, y: -200 });
  const posRef = useRef({ x: -200, y: -200 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const dx = e.clientX - prev.current.x;
      const dy = e.clientY - prev.current.y;
      const dist = Math.sqrt(dx ** 2 + dy ** 2);

      if (dist > 1) {
        const newAngle = Math.atan2(dy, dx) * (180 / Math.PI);
        setAngle(newAngle);
        setFlipped(Math.abs(newAngle) > 90);
      }

      prev.current = { x: e.clientX, y: e.clientY };
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", onMove);

    const render = () => {
      setPos({ ...posRef.current });
      rafRef.current = requestAnimationFrame(render);
    };
    rafRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <style>{`* { cursor: none !important; }`}</style>
      <div
        style={{
          position: "fixed",
          left: pos.x,
          top: pos.y,
          transform: `translate(-50%, -50%) rotate(${angle}deg) scaleY(${flipped ? -1 : 1})`,
          pointerEvents: "none",
          zIndex: 99999,
          fontSize: "28px",
          lineHeight: 1,
          userSelect: "none",
          filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.6))",
        }}
      >
        🦎
      </div>
    </>
  );
}
