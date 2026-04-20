import { useEffect, useRef, useState } from "react";

export default function LizardCursor() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [angle, setAngle] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const prev = useRef({ x: -200, y: -200 });
  const current = useRef({ x: -200, y: -200 });
  const target = useRef({ x: -200, y: -200 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);

    const animate = () => {
      const dx = target.current.x - current.current.x;
      const dy = target.current.y - current.current.y;
      current.current = {
        x: current.current.x + dx * 0.12,
        y: current.current.y + dy * 0.12,
      };

      const moveDx = current.current.x - prev.current.x;
      const moveDy = current.current.y - prev.current.y;
      const dist = Math.sqrt(moveDx ** 2 + moveDy ** 2);

      if (dist > 0.5) {
        const newAngle = Math.atan2(moveDy, moveDx) * (180 / Math.PI);
        setAngle(newAngle);
        setFlipped(Math.abs(newAngle) > 90);
      }

      prev.current = { ...current.current };
      setPos({ x: current.current.x, y: current.current.y });
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
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
          transition: "transform 0.05s linear",
        }}
      >
        🦎
      </div>
    </>
  );
}
