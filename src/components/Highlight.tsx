import { motion } from "framer-motion";
import cream from "@/assets/product-cream.png";
import { Particles } from "./Particles";
import { useCart } from "./cart/CartContext";
import { toast } from "sonner";

export function Highlight() {
  const { add } = useCart();
  const addCream = () => {
    add({ id: "saffron-cream", name: "Saffron Glow Cream", price: 62, img: cream });
    toast.success("Saffron Glow Cream added to your ritual");
  };
  return (
    <section className="relative overflow-hidden bg-hero py-20 text-cream sm:py-28">
      <Particles count={10} />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 sm:gap-12 sm:px-6 lg:grid-cols-2">
        <div className="relative order-2 text-center lg:order-1 lg:text-left">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold sm:text-xs">— Limited Edition</p>
          <h2 className="mt-3 font-display text-[2.2rem] leading-tight sm:text-5xl lg:text-6xl">
            Kumkumadi <span className="italic text-gradient-gold">Saffron</span> Glow Cream
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-cream/75 sm:mt-5 sm:text-lg lg:mx-0">
            27 botanicals. Cold-pressed Kashmiri saffron. A nightly ritual that reveals luminous, even-toned skin in 14 days — formulated from a 600-year-old palace recipe.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3 sm:mt-8 sm:gap-4 lg:justify-start">
            <button onClick={addCream} className="rounded-full bg-gradient-to-r from-gold to-gold-soft px-6 py-3 text-sm font-medium text-primary shadow-glow transition-transform hover:scale-105 sm:px-7 sm:py-3.5 sm:text-base">Add to Ritual — $62</button>
            <span className="rounded-full border border-cream/25 px-6 py-3 text-sm text-cream/80 sm:px-7 sm:py-3.5 sm:text-base">$62 · 50ml</span>
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
            className="relative h-[300px] w-auto object-contain drop-shadow-2xl sm:h-[440px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
