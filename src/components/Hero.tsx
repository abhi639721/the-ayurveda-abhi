import { motion } from "framer-motion";
import jar from "@/assets/hero-jar.png";
import { Particles } from "./Particles";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-hero text-cream">
      <Particles count={18} />
      {/* glow orbs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full bg-gold/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-herb/40 blur-3xl" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-10 px-6 pt-32 pb-20 lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-cream/5 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-gold-soft"
          >
            <Sparkles className="h-3 w-3" /> Rooted in 5000 years
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1 }}
            className="font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl"
          >
            Ancient Ayurveda.<br />
            <span className="italic text-gradient-gold">Modern Wellness.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 max-w-lg text-lg text-cream/75"
          >
            Hand-crafted herbal formulations — pressed, powdered and brewed from the highlands of India. Pure rituals for radiant living.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#products" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-soft px-7 py-3.5 font-medium text-primary shadow-glow transition-all hover:scale-[1.04]">
              Shop Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#ingredients" className="rounded-full border border-cream/25 px-7 py-3.5 font-medium text-cream backdrop-blur transition-all hover:border-gold hover:bg-cream/5">
              Explore Products
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.8 }}
            className="mt-14 grid max-w-md grid-cols-3 gap-6 text-center"
          >
            {[["100%", "Natural"], ["GMP", "Certified"], ["5K+", "Reviews"]].map(([k,v]) => (
              <div key={k}>
                <div className="font-display text-3xl text-gradient-gold">{k}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-cream/60">{v}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating jar */}
        <div className="relative flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* halo */}
            <div className="absolute inset-0 -m-12 rounded-full bg-gradient-to-tr from-gold/30 via-transparent to-herb/30 blur-2xl animate-glow" />
            <div className="absolute inset-0 -m-20 animate-spin-slow">
              <div className="h-full w-full rounded-full border border-dashed border-gold/30" />
            </div>
            <motion.img
              src={jar}
              alt="The Ayurveda hero jar"
              width={520}
              height={520}
              className="relative h-[440px] w-[440px] object-contain drop-shadow-2xl sm:h-[520px] sm:w-[520px]"
              animate={{ y: [0, -22, 0], rotate: [-2, 2, -2] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.4em] text-cream/50">
        scroll ↓
      </div>
    </section>
  );
}
