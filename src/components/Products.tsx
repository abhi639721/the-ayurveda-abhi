import { motion } from "framer-motion";
import { useState } from "react";
import oil from "@/assets/product-oil.png";
import cream from "@/assets/product-cream.png";
import tea from "@/assets/product-tea.png";
import powder from "@/assets/product-powder.png";

const PRODUCTS = [
  { name: "Brahmi Herbal Oil", price: "$48", img: oil, tag: "Hair & Scalp",
    benefits: ["Strengthens roots", "Calms the mind", "Cooling effect"],
    ingredients: ["Brahmi", "Bhringraj", "Sesame oil"] },
  { name: "Saffron Glow Cream", price: "$62", img: cream, tag: "Skincare",
    benefits: ["Radiant skin", "Deep hydration", "Even tone"],
    ingredients: ["Saffron", "Kumkumadi", "Almond"] },
  { name: "Tulsi Wellness Tea", price: "$24", img: tea, tag: "Immunity",
    benefits: ["Boosts immunity", "Reduces stress", "Aids digestion"],
    ingredients: ["Tulsi", "Ginger", "Ashwagandha"] },
  { name: "Ashwagandha Powder", price: "$36", img: powder, tag: "Vitality",
    benefits: ["Energy & stamina", "Restful sleep", "Hormonal balance"],
    ingredients: ["Ashwagandha root", "Shatavari"] },
];

function ProductCard({ p, i }: { p: (typeof PRODUCTS)[number]; i: number }) {
  const [hover, setHover] = useState(false);
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: i * 0.1 }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      className="group relative overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-b from-cream to-sand/60 p-6 shadow-soft transition-all duration-700 hover:shadow-glow"
      style={{ perspective: 1000 }}
    >
      <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-gold/30 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />
      <div className="flex justify-between text-xs uppercase tracking-widest text-brown/70">
        <span>{p.tag}</span>
        <span className="text-gold">●</span>
      </div>

      <div className="relative mx-auto my-6 flex h-64 items-center justify-center">
        <div className="absolute inset-0 m-8 rounded-full bg-gradient-to-tr from-gold/20 to-herb/10 blur-2xl transition-opacity duration-700 group-hover:opacity-100 opacity-50" />
        <motion.img
          src={p.img}
          alt={p.name}
          loading="lazy"
          className="relative h-full w-auto object-contain drop-shadow-xl"
          animate={hover ? { y: -16, rotate: 6, scale: 1.08 } : { y: [0, -10, 0], rotate: 0, scale: 1 }}
          transition={hover ? { duration: 0.6 } : { duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <h3 className="font-display text-2xl text-primary">{p.name}</h3>
      <div className="mt-1 flex items-baseline justify-between">
        <span className="text-gradient-gold font-display text-xl">{p.price}</span>
        <button className="rounded-full bg-primary px-4 py-2 text-xs uppercase tracking-widest text-cream transition-all hover:bg-primary/90">
          Add to Ritual
        </button>
      </div>

      {/* Reveal panel */}
      <motion.div
        initial={false}
        animate={{ height: hover ? "auto" : 0, opacity: hover ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <div className="mt-5 border-t border-gold/30 pt-4">
          <p className="text-[10px] uppercase tracking-widest text-brown/70">Benefits</p>
          <ul className="mt-2 space-y-1">
            {p.benefits.map((b, idx) => (
              <motion.li
                key={b}
                initial={{ x: -10, opacity: 0 }}
                animate={hover ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: 0.1 + idx * 0.08 }}
                className="text-sm text-primary"
              >
                — {b}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.article>
  );
}

export function Products() {
  return (
    <section id="products" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.86_0.09_85_/_0.25),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8 }} className="mb-16 max-w-2xl"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gold">— Featured Rituals</p>
          <h2 className="mt-3 font-display text-5xl text-primary lg:text-6xl">
            Crafted from <span className="italic text-gradient-gold">earth</span>, designed for you.
          </h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p, i) => <ProductCard key={p.name} p={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}
