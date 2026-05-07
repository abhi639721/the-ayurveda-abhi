import { motion } from "framer-motion";
import leaf from "@/assets/leaf.png";

const ING = [
  { name: "Ashwagandha", note: "Stress & vitality" },
  { name: "Brahmi", note: "Mind clarity" },
  { name: "Turmeric", note: "Inner glow" },
  { name: "Tulsi", note: "Immunity" },
  { name: "Neem", note: "Skin purifier" },
  { name: "Saffron", note: "Radiance" },
  { name: "Triphala", note: "Digestion" },
  { name: "Shatavari", note: "Hormonal balance" },
];

export function Ingredients() {
  return (
    <section id="ingredients" className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cream to-sand/40" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-10 text-center sm:mb-14">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold sm:text-xs">— The Botanicals</p>
          <h2 className="mt-3 font-display text-[2.2rem] leading-tight text-primary sm:text-5xl lg:text-6xl">
            Eight herbs. <span className="italic text-gradient-gold">Infinite balance.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4">
          {ING.map((ing, i) => (
            <motion.div
              key={ing.name}
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              whileHover={{ y: -8, rotate: -2 }}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-gold/30 glass-light p-4 transition-shadow duration-500 hover:shadow-glow sm:rounded-3xl sm:p-6"
            >
              <img src={leaf} alt="" loading="lazy" className="absolute -bottom-6 -right-6 h-24 w-24 opacity-70 transition-transform duration-700 group-hover:scale-125 group-hover:rotate-12 sm:h-32 sm:w-32" />
              <div className="relative">
                <span className="text-[10px] uppercase tracking-widest text-brown/60 sm:text-xs">No. {String(i+1).padStart(2,"0")}</span>
                <h3 className="mt-2 font-display text-2xl text-primary sm:text-3xl">{ing.name}</h3>
                <p className="mt-2 text-xs text-brown sm:text-sm">{ing.note}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
