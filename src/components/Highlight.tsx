import { motion } from "framer-motion";
import cream from "@/assets/product-cream.png";
import { Particles } from "./Particles";

export function Highlight() {
  return (
    <section className="relative overflow-hidden bg-hero py-28 text-cream">
      <Particles count={10} />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">— Limited Edition</p>
          <h2 className="mt-3 font-display text-5xl lg:text-6xl">
            Kumkumadi <span className="italic text-gradient-gold">Saffron</span> Glow Cream
          </h2>
          <p className="mt-5 max-w-lg text-cream/75">
            27 botanicals. Cold-pressed Kashmiri saffron. A nightly ritual that reveals luminous, even-toned skin in 14 days — formulated from a 600-year-old palace recipe.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#products" className="rounded-full bg-gradient-to-r from-gold to-gold-soft px-7 py-3.5 font-medium text-primary shadow-glow transition-transform hover:scale-105">Discover the ritual</a>
            <span className="rounded-full border border-cream/25 px-7 py-3.5 text-cream/80">$62 · 50ml</span>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative order-1 flex justify-center lg:order-2"
        >
          <div className="absolute inset-0 m-10 rounded-full bg-gradient-to-br from-gold/40 to-herb/30 blur-3xl animate-glow" />
          <motion.img
            src={cream} alt="Saffron Glow Cream" loading="lazy"
            animate={{ y: [0, -20, 0], rotate: [-3, 3, -3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-[440px] w-auto object-contain drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
