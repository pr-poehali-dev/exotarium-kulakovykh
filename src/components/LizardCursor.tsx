import { useEffect, useRef } from "react";

export default function LizardCursor() {
  const elRef = useRef<HTMLDivElement>(null);
  const prev = useRef({ x: -200, y: -200 });
  const angleRef = useRef(0);
  const flippedRef = useRef(false);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      const dx = x - prev.current.x;
      const dy = y - prev.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 1) {
        angleRef.current = Math.atan2(dy, dx) * (180 / Math.PI);
        flippedRef.current = Math.abs(angleRef.current) > 90;
      }

      prev.current = { x, y };

      const scaleY = flippedRef.current ? -1 : 1;
      el.style.left = x + "px";
      el.style.top = y + "px";
      el.style.transform = `translate(-50%, -50%) rotate(${angleRef.current}deg) scaleY(${scaleY})`;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <style>{`* { cursor: none !important; }`}</style>
      <div
        ref={elRef}
        style={{
          position: "fixed",
          left: -200,
          top: -200,
          pointerEvents: "none",
          zIndex: 99999,
          fontSize: "28px",
          lineHeight: 1,
          userSelect: "none",
          filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.6))",
          willChange: "transform, left, top",
        }}
      >
        🦎
      </div>
    </>
  );
}
