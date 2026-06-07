import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { DemoBar } from "@/components/site/DemoBar";
import fitnessHero from "@/assets/images/fitness_hero.png";
import { Zap } from "lucide-react";

export const Route = createFileRoute("/demo/fitness")({
  head: () => ({ meta: [{ title: "Forge Athletic — Cyberpunk Athletic Club" }] }),
  component: Page,
});

const classes = [
  { t: "06:00", n: "Sunrise HIIT", c: "Coach Rae", spots: 4, intensity: 90 },
  { t: "07:30", n: "Olympic Lifting", c: "Coach Dom", spots: 2, intensity: 75 },
  { t: "09:00", n: "Power Yoga", c: "Coach Maya", spots: 8, intensity: 45 },
  { t: "12:00", n: "Lunch Crusher", c: "Coach Rae", spots: 6, intensity: 85 },
  { t: "17:30", n: "Strength Circuit", c: "Coach Dom", spots: 3, intensity: 70 },
  { t: "19:00", n: "Conditioning", c: "Coach Lex", spots: 5, intensity: 95 },
];

const plans = [
  { n: "Single Drop-in", p: 28, d: "Single class access", perks: ["Valid for any class", "7-day expiration", "No contract"] },
  { n: "Black Pass Monthly", p: 189, d: "Unlimited access", perks: ["Unlimited classes", "Bring a friend free", "24/7 Open gym access"], pop: true },
  { n: "Elite Annual Pass", p: 1890, d: "Save $378 / year", perks: ["Everything in Monthly", "2 Private coaching sessions/mo", "Official Forge gear pack"] },
];

function Page() {
  const [booked, setBooked] = useState<number[]>([]);
  const [activePlan, setActivePlan] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.className = "theme-cyberpunk";
  }, []);

  return (
    <div className="min-h-screen bg-[#070707] text-white overflow-x-hidden selection:bg-[#73ffb8] selection:text-black" style={{ fontFamily: "'Inter', sans-serif" }}>
      <DemoBar label="Fitness (Cyberpunk)" accent="#73ffb8" />

      {/* Grid Overlay with scanlines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(115,255,184,0.02)_100%)] pointer-events-none" />

      <header className="sticky top-0 z-40 bg-[#070707]/80 backdrop-blur-md border-b-2 border-[#73ffb8]/30 px-6 md:px-12 py-5 flex items-center justify-between">
        <div className="font-black text-2xl tracking-tighter text-white">
          FORGE<span className="text-[#73ffb8] animate-pulse">/</span>ATHLETIC
        </div>
        <nav className="hidden md:flex gap-8 text-xs uppercase tracking-[0.2em] font-black">
          <a href="#schedule" className="hover:text-[#73ffb8] transition-colors">Schedule</a>
          <a href="#plans" className="hover:text-[#73ffb8] transition-colors">Pricing</a>
          <a href="#" className="hover:text-[#73ffb8] transition-colors">Inside the Forge</a>
        </nav>
        <a href="#plans" className="bg-[#73ffb8] text-black font-black text-xs uppercase tracking-widest px-6 py-3 border-2 border-transparent hover:border-[#73ffb8] hover:bg-transparent hover:text-white transition duration-300">
          JOIN NOW
        </a>
      </header>

      {/* Hero */}
      <section className="relative px-6 md:px-12 py-24 md:py-32 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 z-10">
          <div className="inline-flex items-center gap-2 border-2 border-[#73ffb8] bg-[#73ffb8]/5 rounded-none px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-[#73ffb8] mb-6">
            <span className="h-2 w-2 bg-[#73ffb8] animate-ping" />
            STATION 01 / MUMBAI MH
          </div>
          <motion.h1 initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] text-white">
            PUNISH LIMITS.<br />
            <span className="text-[#73ffb8] bg-clip-text text-shadow-[0_0_20px_#73ffb8/50]">FORGE LEGACY.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-8 text-slate-400 text-lg max-w-lg leading-relaxed">
            High-octane conditioning, heavyweight iron, and zero excuses. Built for athletes who demand visual and physical excellence.
          </motion.p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#schedule" className="bg-white text-black px-8 py-4 font-black uppercase text-sm tracking-widest border-2 border-white hover:bg-transparent hover:text-white transition duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
              RESERVE SQUAD CLASS
            </a>
            <a href="#plans" className="border-2 border-[#73ffb8] text-[#73ffb8] px-8 py-4 font-black uppercase text-sm tracking-widest hover:bg-[#73ffb8] hover:text-black transition duration-300 shadow-[0_0_15px_rgba(115,255,184,0.1)]">
              MEMBERSHIPS
            </a>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="lg:col-span-5 relative aspect-square border-2 border-[#73ffb8]/20 shadow-[0_0_50px_rgba(115,255,184,0.05)]">
          <div className="absolute -inset-1 bg-[#73ffb8]/10 blur-xl pointer-events-none" />
          <img src={fitnessHero} alt="Futuristic Cyberpunk Gym" className="absolute inset-0 w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 bg-black/80 border-l-4 border-[#73ffb8] p-4 font-mono text-xs">
            <div className="text-[#73ffb8] font-bold uppercase tracking-widest">LIVE DATA FEED // ACTIVE</div>
            <div className="text-white mt-1">HUMIDITY: 42% // CO2 LEVEL: OPTIMAL</div>
            <div className="text-white">MEMBERS INSIDE: 18 / 24 CAP</div>
          </div>
        </motion.div>
      </section>

      {/* Grid Stats */}
      <section className="px-6 md:px-12 py-12 border-y-2 border-white/5 bg-black/40">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            ["12", "SQUAD SIZE LIMIT"],
            ["50min", "KINETIC RUNTIME"],
            ["1:6", "COACHING RATIO"],
            ["100%", "RAW EFFORT"],
          ].map(([k, v]) => (
            <div key={k} className="border-l-2 border-[#73ffb8] pl-6 py-2">
              <div className="text-5xl font-black text-white tracking-tighter tabular-nums">{k}</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mt-1">{v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-[#73ffb8] mb-2">§ CYBER SCHEDULER</div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter">DAILY BATTLE SESSIONS</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {["MON","TUE","WED","THU","FRI","SAT","SUN"].map((d, i) => (
              <button key={d} className={`px-5 py-3 font-black text-xs tracking-widest border-2 transition ${i === 2 ? "bg-[#73ffb8] text-black border-[#73ffb8]" : "border-white/10 hover:border-white/30 text-slate-400 hover:text-white"}`}>{d}</button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {classes.map((c, i) => {
            const b = booked.includes(i);
            return (
              <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="grid grid-cols-12 items-center gap-6 p-6 border-2 border-white/5 bg-black/20 hover:border-[#73ffb8]/40 transition duration-300 relative group">
                <div className="absolute right-0 top-0 bottom-0 w-1 bg-transparent group-hover:bg-[#73ffb8] transition" />
                <div className="col-span-12 md:col-span-2 text-3xl font-black tracking-tight tabular-nums text-white group-hover:text-[#73ffb8] transition-colors">{c.t}</div>
                <div className="col-span-12 md:col-span-4">
                  <div className="font-black text-lg uppercase tracking-wider">{c.n}</div>
                  <div className="text-xs uppercase tracking-widest text-[#73ffb8] font-mono mt-0.5">{c.c}</div>
                </div>
                <div className="col-span-12 md:col-span-3">
                  <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Session Intensity</div>
                  <div className="h-2 bg-white/5 rounded-none border border-white/10 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 via-[#73ffb8] to-[#73ffb8]" style={{ width: `${c.intensity}%` }} />
                  </div>
                </div>
                <div className="col-span-6 md:col-span-1 text-sm font-mono text-slate-400 tabular-nums">{c.spots - (b ? 1 : 0)} / {c.spots} SPOTS LEFT</div>
                <div className="col-span-6 md:col-span-2 text-right">
                  <button onClick={() => setBooked(b ? booked.filter(x => x !== i) : [...booked, i])}
                    className={`w-full py-3.5 text-xs font-black uppercase tracking-widest border-2 transition duration-300 ${b ? "bg-white text-black border-white" : "bg-[#73ffb8] text-black border-[#73ffb8] hover:bg-transparent hover:text-white"}`}>
                    {b ? "DE-RESERVE" : "LOCK SPOT"}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="px-6 md:px-12 py-24 border-t-2 border-white/5 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-[#73ffb8] mb-2">§ MEMBERSHIP</div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter">SELECT RECRUIT LEVEL</h2>
          <p className="text-slate-400 mt-3 max-w-md mx-auto">No contracts, no nonsense. Pick your access level and start forging.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map(p => (
            <div key={p.n} className={`p-8 border-2 ${p.pop ? "border-[#73ffb8] bg-[#73ffb8]/5 shadow-[0_0_30px_rgba(115,255,184,0.05)]" : "border-white/10"} relative flex flex-col justify-between`}>
              {p.pop && <div className="absolute -top-3.5 left-8 bg-[#73ffb8] text-black px-4 py-1 text-[10px] font-black uppercase tracking-widest">POPULAR // ELITE</div>}
              <div>
                <div className="text-xs uppercase tracking-widest text-[#73ffb8] font-mono">{p.n}</div>
                <div className="text-6xl font-black mt-4 text-white tabular-nums">${p.p}<span className="text-sm font-normal text-slate-500 uppercase tracking-widest">/{p.n.includes("Annual") ? "yr" : "mo"}</span></div>
                <div className="text-xs text-slate-400 font-mono mt-2 uppercase">{p.d}</div>
                <ul className="mt-8 space-y-4 text-sm text-slate-300">
                  {p.perks.map(x => <li key={x} className="flex items-center gap-2"><span className="text-[#73ffb8] font-bold">✓</span> {x}</li>)}
                </ul>
              </div>
              <button onClick={() => setActivePlan(p.n)} className={`w-full mt-10 py-4 font-black uppercase tracking-widest text-xs border-2 transition duration-300 ${p.pop ? "bg-[#73ffb8] text-black border-[#73ffb8] hover:bg-transparent hover:text-white" : "border-white/20 hover:bg-white hover:text-black"}`}>
                DEPLOY MEMBERSHIP
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {activePlan && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActivePlan(null)} className="fixed inset-0 bg-black/90 z-50" />
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0c0c0c] border-2 border-[#73ffb8] p-8 z-50 max-w-sm w-full text-center">
              <div className="text-[#73ffb8] mb-4 flex justify-center">
                <Zap className="w-12 h-12 animate-pulse fill-current" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight">Recruit Verified</h3>
              <p className="text-slate-400 text-sm mt-3 font-mono">You are deploying: <span className="text-white font-bold">{activePlan}</span></p>
              <div className="bg-white/5 p-4 border border-white/10 font-mono text-xs text-left mt-6">
                STATUS: REGISTERED<br />
                LOCATION: MUMBAI METRO AREA<br />
                FEES: PAID ON ACTIVATION
              </div>
              <button onClick={() => setActivePlan(null)} className="w-full mt-6 bg-[#73ffb8] text-black font-black py-3.5 tracking-wider text-xs uppercase hover:bg-white transition duration-300">
                DISMISS FEED
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <footer className="py-12 text-center text-[10px] uppercase tracking-[0.22em] text-slate-600 border-t-2 border-white/5">© Forge Athletic · Mumbai MH // SYSTEM STABLE</footer>
    </div>
  );
}
