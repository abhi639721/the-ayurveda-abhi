import leaf from "@/assets/leaf.png";

export function Particles({ count = 14 }: { count?: number }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => {
        const left = (i * 97) % 100;
        const dur = 14 + ((i * 7) % 18);
        const delay = (i * 1.7) % 12;
        const size = 18 + ((i * 13) % 38);
        const dx = ((i % 2 === 0 ? 1 : -1) * (20 + (i * 17) % 80));
        return (
          <img
            key={i}
            src={leaf}
            alt=""
            aria-hidden
            className="absolute opacity-60"
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
    </div>
  );
}
