import { motion } from "framer-motion";

/**
 * Cinematic animated tree — roots growing underground, branches expanding,
 * leaves popping in, light flowing through branches.
 */
export function Tree({ className = "" }: { className?: string }) {
  const branch = (d: string, delay = 0) => (
    <motion.path
      d={d}
      stroke="url(#bark)"
      strokeWidth={2.2}
      strokeLinecap="round"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 2.2, delay, ease: [0.22, 1, 0.36, 1] }}
    />
  );
  const leaf = (cx: number, cy: number, r: number, delay: number) => (
    <motion.circle
      cx={cx}
      cy={cy}
      r={r}
      fill="url(#leafGrad)"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.85] }}
      transition={{ duration: 1.4, delay, ease: "easeOut" }}
      style={{ transformOrigin: `${cx}px ${cy}px` }}
    />
  );

  return (
    <svg
      viewBox="0 0 400 600"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <defs>
        <linearGradient id="bark" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="oklch(0.35 0.06 50)" />
          <stop offset="100%" stopColor="oklch(0.78 0.13 80)" />
        </linearGradient>
        <radialGradient id="leafGrad">
          <stop offset="0%" stopColor="oklch(0.86 0.13 130)" stopOpacity="0.95" />
          <stop offset="100%" stopColor="oklch(0.45 0.12 145)" stopOpacity="0.6" />
        </radialGradient>
        <radialGradient id="halo" cx="0.5" cy="0.4">
          <stop offset="0%" stopColor="oklch(0.86 0.13 85)" stopOpacity="0.55" />
          <stop offset="60%" stopColor="oklch(0.86 0.13 85)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* halo */}
      <circle cx="200" cy="220" r="200" fill="url(#halo)">
        <animate attributeName="r" values="190;215;190" dur="6s" repeatCount="indefinite" />
      </circle>

      {/* roots — grow downward */}
      <g style={{ transformOrigin: "200px 480px" }}>
        {branch("M200 480 C 180 520, 140 540, 100 560", 0)}
        {branch("M200 480 C 220 520, 260 540, 300 560", 0.1)}
        {branch("M200 480 C 195 530, 190 560, 180 590", 0.2)}
        {branch("M200 480 C 205 530, 210 560, 220 590", 0.25)}
      </g>

      {/* trunk */}
      {branch("M200 480 C 195 380, 205 300, 200 200", 0.3)}

      {/* main branches */}
      {branch("M200 280 C 170 250, 130 240, 90 220", 1.0)}
      {branch("M200 260 C 230 230, 270 220, 320 200", 1.1)}
      {branch("M200 220 C 175 190, 150 170, 120 150", 1.4)}
      {branch("M200 220 C 225 190, 250 170, 280 150", 1.5)}
      {branch("M200 200 C 200 160, 200 130, 200 110", 1.6)}

      {/* leaves */}
      {leaf(90, 220, 14, 2.0)}
      {leaf(70, 200, 10, 2.15)}
      {leaf(320, 200, 14, 2.1)}
      {leaf(340, 180, 10, 2.25)}
      {leaf(120, 150, 12, 2.3)}
      {leaf(105, 130, 9, 2.45)}
      {leaf(280, 150, 12, 2.35)}
      {leaf(295, 130, 9, 2.5)}
      {leaf(200, 110, 16, 2.6)}
      {leaf(180, 95, 9, 2.7)}
      {leaf(220, 95, 9, 2.75)}

      {/* light flowing through branches */}
      <motion.circle
        r="3"
        fill="oklch(0.92 0.13 85)"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 3 }}
      >
        <animateMotion
          dur="3s"
          repeatCount="indefinite"
          begin="3s"
          path="M200 480 C 195 380, 205 300, 200 200 C 200 160, 200 130, 200 110"
        />
      </motion.circle>
    </svg>
  );
}
