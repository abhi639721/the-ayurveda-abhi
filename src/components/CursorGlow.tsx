import { useEffect, useRef, useState } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Disable on touch / small devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 1024;
    if (isTouch) {
      setEnabled(false);
      return;
    }
    let raf = 0;
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let cx = tx;
    let cy = ty;
    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const tick = () => {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      if (ref.current) ref.current.style.transform = `translate3d(${cx - 200}px, ${cy - 200}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[60] h-[400px] w-[400px] rounded-full opacity-60 mix-blend-screen"
      style={{
        background:
          "radial-gradient(closest-side, oklch(0.86 0.13 85 / 0.35), transparent 70%)",
        filter: "blur(20px)",
      }}
    />
  );
}
