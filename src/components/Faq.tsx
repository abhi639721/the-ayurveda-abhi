import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";

const FAQ = [
  { q: "Are your products 100% natural?", a: "Yes. Every formulation is made of botanicals, oils and minerals — no synthetic actives, fragrances or fillers." },
  { q: "How quickly will I see results?", a: "Most rituals show visible results within 2–4 weeks of consistent daily use. Ayurveda works best with patience." },
  { q: "Do you ship internationally?", a: "We ship to 27 countries with carbon-neutral logistics. Most orders arrive within 5–7 days." },
  { q: "Are products safe during pregnancy?", a: "Several formulations are pregnancy-safe; please consult our care team before starting any new ritual." },
];

export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:gap-12 sm:px-6 lg:grid-cols-[1fr_2fr]">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold sm:text-xs">— Questions</p>
          <h2 className="mt-3 font-display text-[2.2rem] leading-tight text-primary sm:text-5xl">Wisdom, <br/><span className="italic text-gradient-gold">answered.</span></h2>
        </div>
        <div className="divide-y divide-gold/30">
          {FAQ.map((f, i) => {
            const isOpen = i === open;
            return (
              <button key={f.q} onClick={() => setOpen(isOpen ? -1 : i)} className="block w-full py-5 text-left sm:py-6">
                <div className="flex items-center justify-between gap-4 sm:gap-6">
                  <span className="font-display text-xl text-primary sm:text-2xl">{f.q}</span>
                  <Plus className={`h-5 w-5 shrink-0 text-gold transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`} />
                </div>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-3 text-brown/80">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
