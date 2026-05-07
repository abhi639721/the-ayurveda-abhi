import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

export function Navbar() {
  const nav = [
    { label: "Products", href: "#products" },
    { label: "Ingredients", href: "#ingredients" },
    { label: "About", href: "#about" },
    { label: "Journal", href: "#testimonials" },
  ];
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-3 mt-3 flex items-center justify-between rounded-full glass px-4 py-2.5 sm:mx-4 sm:mt-4 sm:px-6 sm:py-3 lg:mx-auto lg:max-w-7xl">
        <Link to="/" className="flex items-center gap-2 text-cream">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-gold to-gold-soft text-primary sm:h-9 sm:w-9">
            <Leaf className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </span>
          <span className="font-display text-base tracking-wide text-cream sm:text-xl">The Ayurveda</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="group relative text-sm text-cream/80 transition-colors hover:text-cream">
              {n.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <a href="#products" className="rounded-full bg-gradient-to-r from-gold to-gold-soft px-4 py-1.5 text-xs font-medium text-primary shadow-glow transition-transform hover:scale-105 sm:px-5 sm:py-2 sm:text-sm">
          Shop
        </a>
      </div>
    </motion.header>
  );
}
