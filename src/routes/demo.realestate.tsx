import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { DemoBar } from "@/components/site/DemoBar";
import realestateHero from "@/assets/images/realestate_hero.png";
import { Home, Heart, Building2 } from "lucide-react";

export const Route = createFileRoute("/demo/realestate")({
  head: () => ({ meta: [{ title: "Atrium Realty — Premium Glassmorphic Real Estate" }] }),
  component: Page,
});

const listings = [
  { id: 1, n: "Bandra Seaface Apartment", a: "Carter Road, Bandra West", b: 3, ba: 2, sf: 2100, p: 4250000, tag: "New Listing", desc: "Soaring ceilings, authentic materials, and bespoke high-end finishes overlooking the sea." },
  { id: 2, n: "Koramangala Villa", a: "80 Feet Road, Koramangala", b: 4, ba: 3, sf: 3400, p: 3850000, tag: "Open House", desc: "Impeccably restored architectural townhouse with private south-facing garden." },
  { id: 3, n: "Bodakdev Penthouse", a: "Sindhu Bhavan Road, Ahmedabad", b: 1, ba: 1, sf: 720, p: 985000, tag: "Sold Out Soon", desc: "Charming sun-drenched loft studio overlooking quiet green avenues in Ahmedabad." },
  { id: 4, n: "Worli Heights Duplex", a: "Dr. Annie Besant Road, Worli", b: 4, ba: 4, sf: 4800, p: 12500000, tag: "Featured Penthouse", desc: "Duplex penthouse featuring wrap-around terrace and private outdoor sky pool." },
  { id: 5, n: "Whitefield Duplex", a: "ITPL Main Road, Bangalore", b: 2, ba: 2, sf: 1450, p: 1620000, tag: "Price Reduced", desc: "Industrial style conversion featuring exposed brick, concrete floors, and tech corridor views." },
  { id: 6, n: "Lutyens Bungalow", a: "Prithviraj Road, New Delhi", b: 3, ba: 3, sf: 2800, p: 5750000, tag: "Exclusive", desc: "Traditional heritage layout with marble fireplace and designer gourmet kitchen." },
];

function Page() {
  const [budget, setBudget] = useState(15000000);
  const [beds, setBeds] = useState(0);
  const [selectedHome, setSelectedHome] = useState<typeof listings[0] | null>(null);
  const filtered = listings.filter(l => l.p <= budget && l.b >= beds);

  useEffect(() => {
    document.documentElement.className = "theme-glassmorphism";
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200" style={{ fontFamily: "'Inter', sans-serif" }}>
      <DemoBar label="Real Estate (Glassmorphism)" accent="#06b6d4" />

      {/* Background radial glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-1/4 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[150px] pointer-events-none" />

      <header className="sticky top-0 z-40 bg-[#030712]/30 backdrop-blur-xl border-b border-white/10 px-6 md:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 grid place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-black text-sm font-bold shadow-lg shadow-cyan-500/20">A</div>
          <span className="font-bold text-lg tracking-wider bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">ATRIUM REALTY</span>
        </div>
        <nav className="hidden md:flex gap-8 text-xs uppercase tracking-widest font-semibold text-slate-300">
          <a href="#search" className="hover:text-cyan-400 transition-colors">Buy</a>
          <a href="#calculator" className="hover:text-cyan-400 transition-colors">Calculator</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Contact</a>
        </nav>
        <button className="bg-white/5 hover:bg-white/15 border border-white/10 px-5 py-2 rounded-xl text-xs uppercase tracking-wider transition-all">Sign In</button>
      </header>

      {/* Hero */}
      <section className="relative px-6 md:px-12 py-24 md:py-32 grid lg:grid-cols-12 gap-12 max-w-7xl mx-auto items-center">
        <div className="lg:col-span-7 z-10">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-4 py-1.5 text-xs text-cyan-400 uppercase font-mono tracking-wider mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Glassmorphic UI Showcase
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]">
            Find your next<br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">architectural masterpiece.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-6 text-slate-400 text-lg max-w-xl leading-relaxed">
            Experience real estate search elevated through beautiful transparency and modern design. Curating New York's finest luxury listings.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-10 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-3 flex flex-col md:flex-row gap-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-w-2xl">
            <div className="flex-1 px-4 py-3 text-left">
              <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Location</div>
              <input placeholder="Neighborhood or address" className="w-full mt-1 outline-none bg-transparent text-sm placeholder-slate-500" />
            </div>
            <div className="md:border-l md:border-white/10 px-6 py-3 text-left">
              <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Beds</div>
              <select value={beds} onChange={e => setBeds(+e.target.value)} className="mt-1.5 outline-none bg-transparent text-sm text-cyan-400 font-semibold cursor-pointer">
                <option value="0" className="bg-[#030712] text-white">Any Bedrooms</option>
                <option value="1" className="bg-[#030712] text-white">1+ Beds</option>
                <option value="2" className="bg-[#030712] text-white">2+ Beds</option>
                <option value="3" className="bg-[#030712] text-white">3+ Beds</option>
                <option value="4" className="bg-[#030712] text-white">4+ Beds</option>
              </select>
            </div>
            <a href="#search" className="bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-semibold text-sm px-8 py-4 rounded-2xl flex items-center justify-center hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition duration-300">
              Explore Now
            </a>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="lg:col-span-5 relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
          <img src={realestateHero} alt="Luxury Glassmorphic Villa" className="absolute inset-0 w-full h-full object-cover scale-[1.02] hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-6 left-6 right-6 bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-xl">
            <div className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest">Masterpiece Collection</div>
            <div className="text-xl font-bold mt-1 text-white">The Glasshouse Villa</div>
            <div className="text-xs text-slate-300 mt-1">Sleek Concrete, Floor-to-ceiling glass, Twilight View</div>
          </div>
        </motion.div>
      </section>

      {/* Filter / listings */}
      <section id="search" className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400 mb-2">§ Available Spaces</div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight">EXPLORE RESIDENCES</h2>
          </div>
          <div className="w-full md:w-[400px] bg-white/[0.02] border border-white/10 backdrop-blur-xl p-4 rounded-2xl flex items-center gap-4">
            <span className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Max Price:</span>
            <input type="range" min={900000} max={15000000} step={200000} value={budget} onChange={e => setBudget(+e.target.value)} className="flex-1 accent-cyan-400 bg-slate-800" />
            <span className="font-bold tabular-nums text-sm text-cyan-400">${(budget/1000000).toFixed(1)}M</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filtered.map((l, i) => (
              <motion.article 
                key={l.id} 
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedHome(l)}
                className="group relative rounded-3xl overflow-hidden bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-cyan-500/30 transition-all duration-300 cursor-pointer shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[4/3] relative overflow-hidden bg-slate-900 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/30 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                      <Building2 className="w-12 h-12 text-cyan-400 opacity-60 group-hover:scale-110 transition-transform" />
                    </div>
                    {l.tag && <span className="absolute top-4 left-4 bg-cyan-400 text-black text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">{l.tag}</span>}
                    <button className="absolute top-4 right-4 h-9 w-9 rounded-full bg-black/40 backdrop-blur-md hover:bg-cyan-500 hover:text-black text-white grid place-items-center transition">
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="p-6">
                    <div className="text-3xl font-extrabold text-cyan-400 tabular-nums">${(l.p/1000000).toFixed(2)}M</div>
                    <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">{l.a}</div>
                    <h3 className="mt-3 text-xl font-bold">{l.n}</h3>
                    <p className="mt-2 text-sm text-slate-400 line-clamp-2">{l.desc}</p>
                  </div>
                </div>
                <div className="p-6 pt-0 border-t border-white/5 mt-4 flex justify-between items-center text-xs text-slate-400 font-mono">
                  <span>{l.b} Beds</span>
                  <span>{l.ba} Baths</span>
                  <span>{l.sf.toLocaleString()} Sqft</span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Mortgage calc */}
      <section id="calculator" className="py-24 border-t border-white/10 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400 mb-2">§ Finance Tools</div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight">PLAN YOUR FINANCES</h2>
            <p className="text-slate-400 mt-2">Interact with our transparent glassmorphic calculator to outline your terms.</p>
          </div>
          <MortgageCalc />
        </div>
      </section>

      {/* Home Details Modal */}
      <AnimatePresence>
        {selectedHome && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedHome(null)} className="fixed inset-0 bg-black/75 z-50 backdrop-blur-sm" />
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="fixed inset-6 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-2xl md:w-full bg-[#080d1a] border border-white/15 rounded-3xl p-8 z-50 shadow-2xl overflow-y-auto max-h-[85vh]">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-mono uppercase text-cyan-400 bg-cyan-950/40 border border-cyan-800/30 px-3 py-1 rounded-full">{selectedHome.tag || "Available"}</span>
                  <h3 className="text-3xl font-extrabold mt-3">{selectedHome.n}</h3>
                  <p className="text-slate-400 text-xs mt-1 uppercase tracking-widest">{selectedHome.a}</p>
                </div>
                <button onClick={() => setSelectedHome(null)} className="h-8 w-8 rounded-full bg-white/5 hover:bg-white/15 grid place-items-center text-lg">×</button>
              </div>
              <div className="my-6 aspect-video bg-gradient-to-br from-cyan-900 to-indigo-900 rounded-2xl flex items-center justify-center border border-white/10">
                <Home className="w-16 h-16 text-cyan-400 animate-pulse" />
              </div>
              <p className="text-slate-300 leading-relaxed text-sm">{selectedHome.desc}</p>
              <div className="mt-6 grid grid-cols-3 gap-4 border-y border-white/10 py-4 text-center">
                <div><div className="text-2xl font-black text-cyan-400">{selectedHome.b}</div><div className="text-[10px] text-slate-500 uppercase font-mono">Bedrooms</div></div>
                <div><div className="text-2xl font-black text-cyan-400">{selectedHome.ba}</div><div className="text-[10px] text-slate-500 uppercase font-mono">Bathrooms</div></div>
                <div><div className="text-2xl font-black text-cyan-400">{selectedHome.sf.toLocaleString()}</div><div className="text-[10px] text-slate-500 uppercase font-mono">Square Feet</div></div>
              </div>
              <div className="mt-8 flex justify-between items-center gap-4">
                <div>
                  <div className="text-xs text-slate-500 uppercase font-mono">Offering Price</div>
                  <div className="text-3xl font-black text-white">${selectedHome.p.toLocaleString()}</div>
                </div>
                <button onClick={() => setSelectedHome(null)} className="bg-gradient-to-r from-cyan-400 to-blue-600 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] text-black font-bold px-6 py-3.5 rounded-xl transition">Schedule Private Viewing</button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <footer className="py-12 text-center text-xs uppercase tracking-widest text-slate-500 border-t border-white/5">© Atrium Realty · Registered RERA Broker India</footer>
    </div>
  );
}

function MortgageCalc() {
  const [price, setPrice] = useState(2500000);
  const [down, setDown] = useState(20);
  const [years, setYears] = useState(30);
  const rate = 0.065;
  const principal = price * (1 - down / 100);
  const m = rate / 12;
  const n = years * 12;
  const monthly = (principal * m) / (1 - Math.pow(1 + m, -n));

  return (
    <div className="grid md:grid-cols-2 gap-8 bg-white/[0.02] border border-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl">
      <div className="space-y-6">
        <div>
          <div className="flex justify-between text-xs font-semibold tracking-wider text-slate-300 uppercase mb-2">
            <span>Home Price</span>
            <span className="font-mono text-cyan-400 font-bold">${(price/1000000).toFixed(2)}M</span>
          </div>
          <input type="range" min={500000} max={15000000} step={100000} value={price} onChange={e => setPrice(+e.target.value)} className="w-full accent-cyan-400 bg-slate-800" />
        </div>
        <div>
          <div className="flex justify-between text-xs font-semibold tracking-wider text-slate-300 uppercase mb-2">
            <span>Down Payment</span>
            <span className="font-mono text-cyan-400 font-bold">{down}% (${(price * down / 100).toLocaleString()})</span>
          </div>
          <input type="range" min={5} max={50} value={down} onChange={e => setDown(+e.target.value)} className="w-full accent-cyan-400 bg-slate-800" />
        </div>
        <div>
          <div className="flex justify-between text-xs font-semibold tracking-wider text-slate-300 uppercase mb-2">
            <span>Amortization Term</span>
            <span className="font-mono text-cyan-400 font-bold">{years} Years</span>
          </div>
          <input type="range" min={10} max={30} step={5} value={years} onChange={e => setYears(+e.target.value)} className="w-full accent-cyan-400 bg-slate-800" />
        </div>
      </div>
      <div className="bg-gradient-to-br from-cyan-950/40 to-blue-950/40 border border-white/15 rounded-2xl p-8 flex flex-col justify-center text-center md:text-left shadow-inner">
        <div className="text-xs text-slate-400 uppercase tracking-widest font-mono">Estimated Monthly Payment</div>
        <div className="text-5xl font-black mt-2 text-cyan-400 tracking-tight tabular-nums">${Math.round(monthly).toLocaleString()}<span className="text-sm font-normal text-slate-500">/mo</span></div>
        <div className="mt-4 text-xs text-slate-400 leading-relaxed font-mono">
          calculated at 6.5% APR interest rates with a total principal loan amount of <span className="text-white font-bold">${Math.round(principal).toLocaleString()}</span>
        </div>
        <button className="mt-6 w-full bg-white text-black font-bold py-3.5 rounded-xl hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:text-black transition duration-300">Get Pre-Approved Instantly</button>
      </div>
    </div>
  );
}
