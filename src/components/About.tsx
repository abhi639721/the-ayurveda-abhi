import { motion } from "framer-motion";
import jar from "@/assets/hero-jar.png";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:gap-16 sm:px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="absolute inset-0 -m-10 rounded-full bg-gradient-to-br from-gold/30 to-herb/20 blur-3xl" />
          <motion.img
            src={jar} alt="The Ayurveda jar" loading="lazy"
            animate={{ y: [0, -18, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative mx-auto h-[320px] w-auto object-contain sm:h-[440px] lg:h-[500px]"
          />
        </motion.div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold sm:text-xs">— Our Story</p>
          <h2 className="mt-3 font-display text-[2.2rem] leading-tight text-primary sm:text-5xl lg:text-6xl">
            A house of <span className="italic text-gradient-gold">healing</span>.
          </h2>
          <p className="mt-5 text-base text-brown/90 sm:mt-6 sm:text-lg">
            The Ayurveda was born from a simple promise — to bring the timeless rituals of the Indian subcontinent into the homes of seekers everywhere. We work with master vaidyas, third-generation farmers and modern scientists to create formulations that are deeply traditional and unmistakably premium.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6">
            {[["120+", "Sourcing partners"], ["27", "Countries served"], ["1.4M", "Daily rituals"], ["A+", "Quality grade"]].map(([k,v]) => (
              <div key={k} className="border-l-2 border-gold pl-4">
                <div className="font-display text-3xl text-primary">{k}</div>
                <div className="text-xs uppercase tracking-widest text-brown/60">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
