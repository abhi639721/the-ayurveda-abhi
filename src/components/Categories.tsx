import { motion } from "framer-motion";

const CATS = ["Skincare", "Hair Care", "Immunity", "Vitality", "Digestion", "Wellness Teas"];

export function Categories() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 text-cream">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,oklch(0.78_0.13_80_/_0.15),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">— Wellness Categories</p>
            <h2 className="mt-3 font-display text-5xl">Find your ritual.</h2>
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          {CATS.map((c, i) => (
            <motion.a
              href="#products" key={c}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ scale: 1.06, y: -4 }}
              className="group relative rounded-full border border-gold/40 bg-cream/5 px-7 py-3 font-display text-2xl tracking-wide transition-colors hover:bg-gold hover:text-primary"
            >
              {c}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
