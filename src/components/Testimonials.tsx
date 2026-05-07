import { motion } from "framer-motion";
import { Star } from "lucide-react";

const T = [
  { name: "Anaya R.", text: "The saffron cream is unlike anything I've used. My skin has never looked this alive.", role: "Mumbai" },
  { name: "Liam K.", text: "Tulsi tea is now my morning ritual. I feel calmer, sharper, lighter.", role: "London" },
  { name: "Sara M.", text: "Quality you can feel. The Brahmi oil transformed my hair in weeks.", role: "Dubai" },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-gradient-to-b from-sand/40 to-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-10 max-w-2xl sm:mb-14">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold sm:text-xs">— Loved by thousands</p>
          <h2 className="mt-3 font-display text-[2.2rem] leading-tight text-primary sm:text-5xl">Whispers of <span className="italic text-gradient-gold">wellness</span>.</h2>
        </div>
        <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
          {T.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-gold/20 bg-cream p-6 shadow-soft sm:p-8"
            >
              <div className="flex gap-1 text-gold">
                {Array.from({length:5}).map((_,k)=> <Star key={k} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-4 font-display text-xl leading-snug text-primary sm:text-2xl">"{t.text}"</blockquote>
              <figcaption className="mt-6 text-sm">
                <div className="font-medium text-primary">{t.name}</div>
                <div className="text-xs uppercase tracking-widest text-brown/60">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
