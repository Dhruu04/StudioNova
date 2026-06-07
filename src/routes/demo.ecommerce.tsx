import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { DemoBar } from "@/components/site/DemoBar";
import ecommerceHero from "@/assets/images/ecommerce_hero.png";
import { Sparkles, Package, ShoppingBag } from "lucide-react";

export const Route = createFileRoute("/demo/ecommerce")({
  head: () => ({ meta: [{ title: "Drift Goods — Warm Minimalist Store" }] }),
  component: Page,
});

const products = [
  { id: 1, n: "Atlas Tote Bag", c: "Bags", p: 148, desc: "Hand-stitched full grain vachetta leather tote with solid brass hardware." },
  { id: 2, n: "Linen Overshirt", c: "Apparel", p: 220, desc: "Pre-washed Belgian linen shirt in a relaxed, tailored silhouette." },
  { id: 3, n: "Ceramic Vase", c: "Home", p: 64, desc: "Hand-thrown stoneware vase with a speckled matte sand glaze." },
  { id: 4, n: "Merino Wool Throw", c: "Home", p: 180, desc: "Ultra-soft woven merino blanket with delicate eyelash fringe details." },
  { id: 5, n: "Leather Card Case", c: "Accessories", p: 56, desc: "Slim profile Italian leather sleeve with three hand-burnished slots." },
  { id: 6, n: "Linen Lounge Trouser", c: "Apparel", p: 195, desc: "Drawstring trousers crafted from mid-weight organic linen fibers." },
];

function Page() {
  const [cart, setCart] = useState<Record<number, number>>({});
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    document.documentElement.className = "theme-minimalist";
  }, []);

  const items = Object.entries(cart).map(([id, qty]) => ({ ...products.find(p => p.id === +id)!, qty }));
  const total = items.reduce((s, i) => s + i.p * i.qty, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);

  const filteredProducts = filter === "All" ? products : products.filter(p => p.c === filter);

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#2C2A29] selection:bg-[#E2DED0] selection:text-[#2C2A29] overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <DemoBar label="E-commerce (Minimalist)" accent="#c47d60" />

      <header className="sticky top-0 z-40 bg-[#FAF9F5]/80 backdrop-blur-md border-b border-[#2C2A29]/5 px-6 md:px-12 py-5 flex items-center justify-between">
        <div className="text-xl font-bold tracking-widest text-[#2C2A29] flex items-center gap-1 font-serif">
          DRIFT <span className="text-[#c47d60]">.</span> GOODS
        </div>
        <nav className="hidden md:flex gap-10 text-xs uppercase tracking-widest font-semibold text-[#6E6B64]">
          <a href="#shop" className="hover:text-[#c47d60] transition-colors">Shop</a>
          <a href="#" className="hover:text-[#c47d60] transition-colors">Journal</a>
          <a href="#" className="hover:text-[#c47d60] transition-colors">About</a>
        </nav>
        <button onClick={() => setOpen(true)} className="relative group bg-[#2C2A29] text-white px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-[#c47d60] transition duration-300">
          BAG {count > 0 && <span className="ml-2 bg-white text-[#2C2A29] text-[10px] font-bold px-2 py-0.5 rounded-full">{count}</span>}
        </button>
      </header>

      {/* Hero */}
      <section className="px-6 md:px-12 py-20 md:py-28 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-1.5 bg-[#E2DED0]/50 text-[#6E6B64] rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3 h-3 text-[#c47d60]" /> Slow Crafted in Jaipur, Rajasthan
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-normal leading-[1.02] tracking-tight font-serif text-[#2C2A29]">
            Objects designed for <span className="italic text-[#c47d60]">quieter spaces</span> &amp; longer journeys.
          </h1>
          <p className="mt-8 text-base text-[#6E6B64] max-w-md leading-relaxed">
            A curation of small-batch essentials woven, thrown, and stitched by hand. Honoring texture, simplicity, and organic form.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 items-center">
            <a href="#shop" className="bg-[#2C2A29] hover:bg-[#c47d60] text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest shadow-md transition duration-300">
              EXPLORE COLLECTION
            </a>
            <span className="text-xs uppercase tracking-widest text-[#6E6B64] font-semibold">Free shipping over $150</span>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="lg:col-span-6 relative aspect-square rounded-[3rem] overflow-hidden border border-[#2c2a29]/5 shadow-xl">
          <img src={ecommerceHero} alt="Crafted ceramics and leather bags" className="absolute inset-0 w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F5]/35 to-transparent" />
          <div className="absolute bottom-6 right-6 bg-[#FAF9F5]/90 backdrop-blur rounded-2xl p-5 shadow-lg max-w-[240px] border border-white/40">
            <div className="text-[10px] text-[#c47d60] font-black uppercase tracking-wider">FEATURED PIECE</div>
            <div className="text-lg font-serif mt-1 font-bold text-[#2C2A29]">Atlas Leather Tote</div>
            <div className="text-xs text-[#6E6B64] mt-1">$148 · Vegetable tanned</div>
          </div>
        </motion.div>
      </section>

      {/* Products list */}
      <section id="shop" className="px-6 md:px-12 py-24 max-w-7xl mx-auto border-t border-[#2C2A29]/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#c47d60] font-bold mb-2">// OUR SHELVES</div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-normal font-serif text-[#2C2A29]">THE SHOP</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {["All", "Apparel", "Home", "Bags", "Accessories"].map(t => (
              <button 
                key={t} 
                onClick={() => setFilter(t)} 
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest transition border ${
                  filter === t 
                    ? "bg-[#2C2A29] text-white border-[#2C2A29]" 
                    : "border-[#2C2A29]/10 hover:border-[#2C2A29] text-[#6E6B64] hover:text-[#2C2A29]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((p, i) => (
            <motion.div 
              key={p.id} 
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group flex flex-col justify-between"
            >
              <div>
                <div className="aspect-square rounded-[2rem] bg-[#E2DED0] relative overflow-hidden shadow-inner flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#c47d60]/5 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                    <Package className="w-10 h-10 text-[#2C2A29]/20 group-hover:scale-110 transition-transform" />
                  </div>
                  <button
                    onClick={() => setCart({ ...cart, [p.id]: (cart[p.id] || 0) + 1 })}
                    className="absolute bottom-6 left-6 right-6 bg-[#2C2A29] text-white py-3.5 rounded-full text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition shadow-lg hover:bg-[#c47d60]"
                  >
                    ADD TO BAG · ${p.p}
                  </button>
                </div>
                <div className="mt-4">
                  <div className="text-[10px] uppercase tracking-widest text-[#c47d60] font-bold">{p.c}</div>
                  <h3 className="text-xl font-bold mt-1 font-serif text-[#2C2A29]">{p.n}</h3>
                  <p className="mt-2 text-xs text-[#6E6B64] leading-relaxed line-clamp-2">{p.desc}</p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#2C2A29]/5 flex justify-between items-center text-sm font-semibold">
                <span className="text-[#2C2A29] font-serif font-bold">${p.p}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cart Drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} className="fixed inset-0 bg-black/30 z-50 backdrop-blur-xs" />
            <motion.aside initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 28 }} className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-[#FAF9F5] z-50 flex flex-col shadow-2xl border-l border-[#2C2A29]/5">
              <div className="p-6 border-b border-[#2C2A29]/10 flex items-center justify-between">
                <h3 className="text-2xl font-serif font-bold text-[#2C2A29]">Your Bag ({count})</h3>
                <button onClick={() => setOpen(false)} className="text-2xl font-light hover:text-[#c47d60]">×</button>
              </div>
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {items.length === 0 ? (
                  <p className="text-[#6E6B64] text-center py-16 font-serif italic">Your bag is currently empty.</p>
                ) : (
                  items.map(it => (
                    <div key={it.id} className="flex gap-4 items-center">
                      <div className="h-16 w-16 rounded-xl bg-[#E2DED0] flex items-center justify-center border border-[#2C2A29]/5">
                        <ShoppingBag className="w-6 h-6 text-[#2C2A29]/60" />
                      </div>
                      <div className="flex-1">
                        <div className="font-serif font-bold text-[#2C2A29]">{it.n}</div>
                        <div className="text-xs text-[#6E6B64] mt-0.5">${it.p} × {it.qty}</div>
                      </div>
                      <button 
                        onClick={() => { const c = {...cart}; delete c[it.id]; setCart(c); }} 
                        className="text-xs font-bold uppercase tracking-widest text-[#c47d60] hover:text-[#2C2A29]"
                      >
                        Remove
                      </button>
                    </div>
                  ))
                )}
              </div>
              <div className="p-6 border-t border-[#2C2A29]/10 bg-[#FAF9F5]">
                <div className="flex justify-between mb-6 text-lg">
                  <span className="font-serif text-[#2C2A29]">Subtotal</span>
                  <span className="font-bold font-serif text-[#c47d60]">${total}</span>
                </div>
                <button 
                  disabled={!count} 
                  className="w-full bg-[#2C2A29] text-white py-4.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#c47d60] transition duration-300 disabled:opacity-40 disabled:scale-100"
                >
                  PROCEED TO SECURE CHECKOUT
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <footer className="py-16 px-6 md:px-12 border-t border-[#2C2A29]/10 text-center text-xs uppercase tracking-widest text-[#6E6B64]">
        © Drift Goods · Jaipur, Rajasthan // SLOW CRAFT MOVEMENT
      </footer>
    </div>
  );
}
