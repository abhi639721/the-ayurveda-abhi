import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import jar from "@/assets/hero-jar.png";
import { Particles } from "./Particles";
import { Tree } from "./Tree";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect } from "react";

export function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const rotY = useTransform(sx, [-1, 1], [-12, 12]);
  const rotX = useTransform(sy, [-1, 1], [10, -10]);
  const treeX = useTransform(sx, [-1, 1], [-20, 20]);
  const treeY = useTransform(sy, [-1, 1], [-15, 15]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mx.set(x);
      my.set(y);
    };
    if (window.matchMedia("(pointer: fine)").matches) {
      window.addEventListener("mousemove", onMove);
      return () => window.removeEventListener("mousemove", onMove);
    }
  }, [mx, my]);

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-hero text-cream">
      <Particles count={18} />

      {/* cinematic fog */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -bottom-20 left-0 right-0 h-[40%] bg-gradient-to-t from-primary/80 via-primary/30 to-transparent blur-2xl" />
      </div>

      {/* Background tree with parallax */}
      <motion.div
        style={{ x: treeX, y: treeY }}
        className="pointer-events-none absolute inset-0 flex items-end justify-center opacity-[0.18] sm:opacity-25"
      >
        <Tree className="h-full w-auto max-h-[110%]" />
      </motion.div>

      {/* glow orbs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-gold/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[460px] w-[460px] rounded-full bg-herb/40 blur-3xl" />

      <div className="relative mx-auto grid min-h-[100svh] max-w-7xl grid-cols-1 items-center gap-8 px-5 pt-28 pb-16 sm:px-6 sm:pt-32 sm:pb-20 lg:grid-cols-2 lg:gap-10">
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-cream/5 px-4 py-1.5 text-[10px] uppercase tracking-[0.25em] text-gold-soft sm:text-xs"
          >
            <Sparkles className="h-3 w-3" /> Rooted in 5000 years
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1 }}
            className="font-display text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl"
          >
            Ancient Ayurveda.<br />
            <span className="italic text-gradient-gold">Modern Wellness.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}
            className="mx-auto mt-5 max-w-md text-base text-cream/75 sm:mt-6 sm:max-w-lg sm:text-lg lg:mx-0"
          >
            Hand-crafted herbal formulations — pressed, powdered and brewed from the highlands of India. Pure rituals for radiant living.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}
            className="mt-8 flex flex-wrap justify-center gap-3 sm:mt-10 sm:gap-4 lg:justify-start"
          >
            <a href="#products" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-soft px-6 py-3 text-sm font-medium text-primary shadow-glow transition-all hover:scale-[1.04] sm:px-7 sm:py-3.5 sm:text-base">
              Shop Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#ingredients" className="rounded-full border border-cream/25 px-6 py-3 text-sm font-medium text-cream backdrop-blur transition-all hover:border-gold hover:bg-cream/5 sm:px-7 sm:py-3.5 sm:text-base">
              Explore Products
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.8 }}
            className="mx-auto mt-10 grid max-w-md grid-cols-3 gap-4 text-center sm:mt-14 sm:gap-6 lg:mx-0"
          >
            {[["100%", "Natural"], ["GMP", "Certified"], ["5K+", "Reviews"]].map(([k,v]) => (
              <div key={k}>
                <div className="font-display text-2xl text-gradient-gold sm:text-3xl">{k}</div>
                <div className="mt-1 text-[10px] uppercase tracking-widest text-cream/60 sm:text-xs">{v}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating jar with 3D tilt */}
        <div className="relative flex items-center justify-center" style={{ perspective: 1200 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
            className="relative"
          >
            <div className="absolute inset-0 -m-12 rounded-full bg-gradient-to-tr from-gold/30 via-transparent to-herb/30 blur-2xl animate-glow" />
            <div className="absolute inset-0 -m-16 animate-spin-slow sm:-m-20">
              <div className="h-full w-full rounded-full border border-dashed border-gold/30" />
            </div>
            <motion.img
              src={jar}
              alt="The Ayurveda hero jar"
              width={520}
              height={520}
              loading="eager"
              decoding="async"
              className="relative h-[300px] w-[300px] object-contain drop-shadow-2xl sm:h-[440px] sm:w-[440px] lg:h-[520px] lg:w-[520px]"
              animate={{ y: [0, -22, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* dynamic floor shadow */}
            <motion.div
              animate={{ scaleX: [1, 0.85, 1], opacity: [0.55, 0.35, 0.55] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 left-1/2 h-6 w-3/4 -translate-x-1/2 rounded-[50%] bg-black/50 blur-2xl"
            />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-cream/50 sm:block sm:text-xs">
        scroll ↓
      </div>
    </section>
  );
}
