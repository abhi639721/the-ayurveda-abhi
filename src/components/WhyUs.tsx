import { motion } from "framer-motion";
import { Leaf, ShieldCheck, FlaskConical, Award, Sprout, Heart } from "lucide-react";

const items = [
  { icon: Leaf, title: "100% Natural", desc: "Pure botanical extracts, nothing synthetic." },
  { icon: ShieldCheck, title: "Chemical Free", desc: "No parabens, sulfates, or fillers." },
  { icon: FlaskConical, title: "Lab Tested", desc: "Verified potency in every single batch." },
  { icon: Award, title: "GMP Certified", desc: "Manufactured to global quality standards." },
  { icon: Sprout, title: "Ethically Sourced", desc: "Partnered with regenerative farms." },
  { icon: Heart, title: "Made with Care", desc: "Traditional methods, modern precision." },
];

export function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-primary py-28 text-cream">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,oklch(0.78_0.13_80_/_0.18),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">— Why The Ayurveda</p>
            <h2 className="mt-3 font-display text-5xl">Purity you can <span className="italic text-gradient-gold">feel</span>.</h2>
            <p className="mt-5 text-cream/70">Every formula honours the original Ayurvedic texts while meeting today's most rigorous standards of quality and transparency.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {items.map((it, i) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className="glass rounded-2xl p-6"
              >
                <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-gold to-gold-soft text-primary">
                  <it.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-2xl">{it.title}</h3>
                <p className="mt-1 text-sm text-cream/70">{it.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
