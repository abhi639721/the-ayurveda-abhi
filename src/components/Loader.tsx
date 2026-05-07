import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Leaf } from "lucide-react";

export function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => { const t = setTimeout(() => setShow(false), 1400); return () => clearTimeout(t); }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] grid place-items-center bg-hero"
        >
          <div className="flex flex-col items-center gap-5 text-cream">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }} className="grid h-16 w-16 place-items-center rounded-full border border-gold/40">
              <Leaf className="h-7 w-7 text-gold" />
            </motion.div>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-display text-2xl tracking-[0.3em] text-cream/80">THE AYURVEDA</motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
