import { useEffect, useState } from "react";
import leaf from "@/assets/leaf.png";

export function Particles({ count = 14 }: { count?: number }) {
  const [n, setN] = useState(count);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const isMobile = window.innerWidth < 768;
    setN(isMobile ? Math.max(4, Math.round(count / 2.5)) : count);
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: n }).map((_, i) => {
        const left = (i * 97) % 100;
        const dur = 14 + ((i * 7) % 18);
        const delay = (i * 1.7) % 12;
        const size = 14 + ((i * 13) % 32);
        const dx = (i % 2 === 0 ? 1 : -1) * (20 + ((i * 17) % 80));
        return (
          <img
            key={i}
            src={leaf}
            alt=""
            aria-hidden
            className="absolute opacity-60 will-change-transform"
            style={{
              left: `${left}%`,
              top: `-10%`,
              width: size,
              height: size,
              animation: `drift ${dur}s linear ${delay}s infinite`,
              ['--dx' as never]: `${dx}px`,
              filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))",
            }}
          />
        );
      })}

      {/* ambient light rays */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "conic-gradient(from 200deg at 80% 0%, transparent 0deg, oklch(0.86 0.13 85 / 0.18) 20deg, transparent 40deg, transparent 360deg)",
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
}
