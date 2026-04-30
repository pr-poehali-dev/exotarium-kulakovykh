import { useState, useEffect } from "react";

interface HeroCarouselProps {
  images: string[];
  altPrefix: string;
  interval?: number;
}

export default function HeroCarousel({ images, altPrefix, interval = 3000 }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="rounded-2xl w-full" style={{ position: "relative", paddingBottom: "100%", overflow: "hidden" }}>
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`${altPrefix} ${i + 1}`}
          className="object-cover transition-opacity duration-700"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            opacity: i === current ? 1 : 0,
          }}
        />
      ))}
      <div style={{ position: "absolute", bottom: 12, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 8, zIndex: 10 }}>
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: 8, height: 8, borderRadius: "50%",
              background: i === current ? "hsl(142,60%,55%)" : "rgba(255,255,255,0.4)",
              border: "none", cursor: "pointer", padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}
