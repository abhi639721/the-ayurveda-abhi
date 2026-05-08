import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { X, Minus, Plus, ShoppingBag, Check, ArrowRight, Lock } from "lucide-react";
import { useCart } from "./CartContext";

type Step = "cart" | "shipping" | "payment" | "success";

export function CartDrawer() {
  const { items, isOpen, close, subtotal, setQty, remove, clear } = useCart();
  const [step, setStep] = useState<Step>("cart");
  const [shipping, setShipping] = useState({ name: "", email: "", address: "", city: "", zip: "", country: "India" });
  const [payment, setPayment] = useState({ card: "", exp: "", cvc: "", holder: "" });
  const [processing, setProcessing] = useState(false);

  const ship = subtotal > 75 || subtotal === 0 ? 0 : 8;
  const tax = +(subtotal * 0.05).toFixed(2);
  const total = +(subtotal + ship + tax).toFixed(2);

  const reset = () => { setStep("cart"); setProcessing(false); };
  const handleClose = () => { close(); setTimeout(reset, 300); };

  const submitPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    await new Promise(r => setTimeout(r, 1600));
    clear();
    setProcessing(false);
    setStep("success");
  };

  const steps: Step[] = ["cart", "shipping", "payment"];
  const stepIdx = steps.indexOf(step);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
            className="fixed right-0 top-0 z-[81] flex h-[100svh] w-full max-w-md flex-col bg-cream text-primary shadow-2xl sm:max-w-lg"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gold/20 px-5 py-4 sm:px-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold">— Your Ritual</p>
                <h3 className="font-display text-2xl">
                  {step === "cart" && "Shopping Bag"}
                  {step === "shipping" && "Shipping Details"}
                  {step === "payment" && "Secure Payment"}
                  {step === "success" && "Thank You"}
                </h3>
              </div>
              <button onClick={handleClose} className="grid h-9 w-9 place-items-center rounded-full border border-primary/15 transition hover:bg-primary/5">
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Stepper */}
            {step !== "success" && (
              <div className="flex items-center gap-2 border-b border-gold/15 px-5 py-3 sm:px-6">
                {steps.map((s, i) => (
                  <div key={s} className="flex flex-1 items-center gap-2">
                    <div className={`grid h-6 w-6 place-items-center rounded-full text-[10px] font-medium transition ${
                      i <= stepIdx ? "bg-gradient-to-br from-gold to-gold-soft text-primary" : "border border-primary/20 text-primary/40"
                    }`}>{i + 1}</div>
                    <span className={`text-xs uppercase tracking-widest ${i <= stepIdx ? "text-primary" : "text-primary/40"}`}>{s}</span>
                    {i < steps.length - 1 && <div className={`h-px flex-1 ${i < stepIdx ? "bg-gold" : "bg-primary/15"}`} />}
                  </div>
                ))}
              </div>
            )}

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-6">
              {step === "cart" && (
                items.length === 0 ? (
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <div className="grid h-16 w-16 place-items-center rounded-full bg-gold/10">
                      <ShoppingBag className="h-7 w-7 text-gold" />
                    </div>
                    <p className="mt-4 font-display text-2xl">Your bag is empty</p>
                    <p className="mt-1 max-w-xs text-sm text-primary/60">Begin your ritual — explore our handcrafted formulations.</p>
                    <button onClick={handleClose} className="mt-6 rounded-full bg-primary px-6 py-2.5 text-xs uppercase tracking-widest text-cream">Continue Shopping</button>
                  </div>
                ) : (
                  <ul className="space-y-4">
                    {items.map(it => (
                      <motion.li
                        key={it.id} layout
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: 40 }}
                        className="flex gap-4 rounded-2xl border border-gold/20 bg-gradient-to-br from-cream to-sand/40 p-3"
                      >
                        <div className="grid h-24 w-24 place-items-center rounded-xl bg-gradient-to-br from-gold/10 to-herb/10">
                          <img src={it.img} alt={it.name} className="h-20 w-20 object-contain drop-shadow" />
                        </div>
                        <div className="flex flex-1 flex-col">
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="font-display text-lg leading-tight">{it.name}</h4>
                            <button onClick={() => remove(it.id)} className="text-primary/40 hover:text-primary"><X className="h-4 w-4" /></button>
                          </div>
                          <p className="text-gradient-gold font-display text-base">${it.price.toFixed(2)}</p>
                          <div className="mt-auto flex items-center justify-between">
                            <div className="inline-flex items-center rounded-full border border-primary/15">
                              <button onClick={() => setQty(it.id, it.qty - 1)} className="grid h-7 w-7 place-items-center rounded-full hover:bg-primary/5"><Minus className="h-3 w-3" /></button>
                              <span className="w-7 text-center text-sm">{it.qty}</span>
                              <button onClick={() => setQty(it.id, it.qty + 1)} className="grid h-7 w-7 place-items-center rounded-full hover:bg-primary/5"><Plus className="h-3 w-3" /></button>
                            </div>
                            <span className="text-sm font-medium">${(it.price * it.qty).toFixed(2)}</span>
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                )
              )}

              {step === "shipping" && (
                <form id="shipping-form" onSubmit={(e) => { e.preventDefault(); setStep("payment"); }} className="space-y-3">
                  <Field label="Full Name" value={shipping.name} onChange={v => setShipping({ ...shipping, name: v })} required />
                  <Field label="Email" type="email" value={shipping.email} onChange={v => setShipping({ ...shipping, email: v })} required />
                  <Field label="Address" value={shipping.address} onChange={v => setShipping({ ...shipping, address: v })} required />
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="City" value={shipping.city} onChange={v => setShipping({ ...shipping, city: v })} required />
                    <Field label="ZIP" value={shipping.zip} onChange={v => setShipping({ ...shipping, zip: v })} required />
                  </div>
                  <Field label="Country" value={shipping.country} onChange={v => setShipping({ ...shipping, country: v })} required />
                </form>
              )}

              {step === "payment" && (
                <form id="payment-form" onSubmit={submitPayment} className="space-y-3">
                  <div className="flex items-center gap-2 rounded-xl border border-gold/30 bg-gold/5 p-3 text-xs text-primary/70">
                    <Lock className="h-3.5 w-3.5 text-gold" /> Encrypted & secure — this is a demo checkout.
                  </div>
                  <Field label="Cardholder Name" value={payment.holder} onChange={v => setPayment({ ...payment, holder: v })} required />
                  <Field label="Card Number" value={payment.card} placeholder="4242 4242 4242 4242"
                    onChange={v => setPayment({ ...payment, card: v.replace(/[^\d ]/g, "").slice(0, 19) })} required />
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="Expiry" value={payment.exp} placeholder="MM/YY"
                      onChange={v => setPayment({ ...payment, exp: v.slice(0, 5) })} required />
                    <Field label="CVC" value={payment.cvc} placeholder="123"
                      onChange={v => setPayment({ ...payment, cvc: v.replace(/\D/g, "").slice(0, 4) })} required />
                  </div>
                </form>
              )}

              {step === "success" && (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <motion.div
                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", damping: 12 }}
                    className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-gold to-gold-soft shadow-glow"
                  >
                    <Check className="h-9 w-9 text-primary" strokeWidth={3} />
                  </motion.div>
                  <h4 className="mt-5 font-display text-3xl">Order Confirmed</h4>
                  <p className="mt-2 max-w-xs text-sm text-primary/60">Your ritual is being prepared. A confirmation has been sent to your email.</p>
                  <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-gold">Order #AYU-{Math.floor(Math.random() * 9000 + 1000)}</p>
                  <button onClick={handleClose} className="mt-8 rounded-full bg-primary px-7 py-3 text-xs uppercase tracking-widest text-cream">Continue Shopping</button>
                </div>
              )}
            </div>

            {/* Footer */}
            {step !== "success" && items.length > 0 && (
              <div className="border-t border-gold/20 bg-gradient-to-b from-cream to-sand/40 px-5 py-4 sm:px-6">
                <div className="space-y-1 text-sm">
                  <Row label="Subtotal" value={`$${subtotal.toFixed(2)}`} />
                  <Row label="Shipping" value={ship === 0 ? "Free" : `$${ship.toFixed(2)}`} />
                  <Row label="Tax (5%)" value={`$${tax.toFixed(2)}`} />
                  <div className="my-2 h-px bg-gold/20" />
                  <Row label={<span className="font-display text-lg">Total</span>} value={<span className="font-display text-lg text-gradient-gold">${total.toFixed(2)}</span>} />
                </div>

                <div className="mt-4 flex gap-2">
                  {step !== "cart" && (
                    <button
                      onClick={() => setStep(step === "payment" ? "shipping" : "cart")}
                      className="rounded-full border border-primary/20 px-5 py-3 text-xs uppercase tracking-widest hover:bg-primary/5"
                    >Back</button>
                  )}
                  {step === "cart" && (
                    <button onClick={() => setStep("shipping")} className="group flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-soft py-3 text-xs font-medium uppercase tracking-widest text-primary shadow-glow transition hover:scale-[1.02]">
                      Checkout <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  )}
                  {step === "shipping" && (
                    <button form="shipping-form" type="submit" className="group flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-soft py-3 text-xs font-medium uppercase tracking-widest text-primary shadow-glow transition hover:scale-[1.02]">
                      Continue to Payment <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  )}
                  {step === "payment" && (
                    <button form="payment-form" type="submit" disabled={processing} className="group flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-soft py-3 text-xs font-medium uppercase tracking-widest text-primary shadow-glow transition hover:scale-[1.02] disabled:opacity-70">
                      {processing ? "Processing…" : <>Pay ${total.toFixed(2)} <Lock className="h-3.5 w-3.5" /></>}
                    </button>
                  )}
                </div>
                {step === "cart" && subtotal < 75 && (
                  <p className="mt-3 text-center text-[11px] text-primary/60">Add ${(75 - subtotal).toFixed(2)} more for free shipping</p>
                )}
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

function Field({ label, value, onChange, type = "text", required, placeholder }: {
  label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean; placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-[10px] uppercase tracking-widest text-primary/60">{label}</span>
      <input
        type={type} value={value} onChange={e => onChange(e.target.value)} required={required} placeholder={placeholder}
        className="w-full rounded-xl border border-primary/15 bg-cream px-4 py-2.5 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
      />
    </label>
  );
}

function Row({ label, value }: { label: React.ReactNode; value: React.ReactNode }) {
  return <div className="flex items-center justify-between"><span className="text-primary/70">{label}</span><span>{value}</span></div>;
}
