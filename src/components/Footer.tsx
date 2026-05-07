import { Leaf, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary text-cream">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,oklch(0.78_0.13_80_/_0.18),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-10">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-gold to-gold-soft text-primary"><Leaf className="h-4 w-4"/></span>
              <span className="font-display text-2xl">The Ayurveda</span>
            </div>
            <p className="mt-5 max-w-sm text-cream/70">Subscribe to The Ritual — slow letters on herbs, healing and the art of wellness.</p>
            <form className="mt-6 flex gap-2 rounded-full glass p-1.5">
              <input placeholder="your@email.com" className="flex-1 bg-transparent px-4 text-sm text-cream placeholder:text-cream/50 focus:outline-none" />
              <button className="rounded-full bg-gradient-to-r from-gold to-gold-soft px-5 py-2 text-sm font-medium text-primary">Join</button>
            </form>
          </div>
          {[
            { t: "Shop", l: ["Skincare", "Hair Care", "Wellness Teas", "Supplements"] },
            { t: "Brand", l: ["Our Story", "Sustainability", "Journal", "Press"] },
            { t: "Help", l: ["Contact", "Shipping", "Returns", "FAQ"] },
          ].map((c) => (
            <div key={c.t}>
              <h4 className="font-display text-lg text-gold-soft">{c.t}</h4>
              <ul className="mt-4 space-y-2 text-sm text-cream/70">
                {c.l.map(i => <li key={i}><a className="transition-colors hover:text-gold" href="#">{i}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-cream/15 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-cream/50">© {new Date().getFullYear()} The Ayurveda. All rituals reserved.</p>
          <div className="flex gap-4 text-cream/70">
            <a href="#"><Instagram className="h-4 w-4"/></a>
            <a href="#"><Twitter className="h-4 w-4"/></a>
            <a href="#"><Youtube className="h-4 w-4"/></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
