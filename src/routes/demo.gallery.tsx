import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { DemoBar } from "@/components/site/DemoBar";
import galleryHero from "@/assets/images/gallery_hero.png";
import { Palette } from "lucide-react";

export const Route = createFileRoute("/demo/gallery")({
  head: () => ({ meta: [{ title: "Atrium Contemporary — Neubrutalist Art Space" }] }),
  component: Page,
});

const works = [
  { id: 1, t: "Untitled (Cobalt Hours)", a: "Léa Marchetti", y: 2025, color: "#a2d2ff", ratio: "aspect-[3/4]" },
  { id: 2, t: "Fragment IX", a: "Kenji Watari", y: 2024, color: "#ff8fa3", ratio: "aspect-square" },
  { id: 3, t: "Soft Architecture", a: "Amira Faye", y: 2025, color: "#ffd166", ratio: "aspect-[4/5]" },
  { id: 4, t: "Field Recording", a: "Dane Holloway", y: 2026, color: "#06d6a0", ratio: "aspect-[3/4]" },
  { id: 5, t: "Mantle", a: "Léa Marchetti", y: 2025, color: "#f8f9fa", ratio: "aspect-square" },
  { id: 6, t: "Glass Hymn", a: "Yara Osei", y: 2026, color: "#b5e2fa", ratio: "aspect-[4/5]" },
];

const events = [
  { d: "Jun 14", t: "Opening: Léa Marchetti — Cobalt Hours", time: "7:00 PM" },
  { d: "Jun 22", t: "Artist talk: Kenji Watari", time: "6:30 PM" },
  { d: "Jul 03", t: "Members preview: Summer Group Show", time: "5:00 PM" },
];

function Page() {
  const [open, setOpen] = useState<number | null>(null);
  const [inquireSent, setInquireSent] = useState(false);

  useEffect(() => {
    document.documentElement.className = "theme-neubrutalism";
  }, []);

  return (
    <div className="min-h-screen bg-[#F4F1EA] text-black selection:bg-[#ffff3f] selection:text-black font-mono">
      <DemoBar label="Gallery (Neubrutalism)" accent="#ffff3f" />

      <header className="sticky top-0 z-40 bg-[#F4F1EA] border-b-4 border-black px-6 md:px-12 py-5 flex items-center justify-between">
        <div className="text-xl font-black uppercase tracking-tight bg-[#ffff3f] px-3 py-1 border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
          ATRIUM // CONTEMPORARY
        </div>
        <nav className="hidden md:flex gap-8 text-xs font-black uppercase">
          <a href="#works" className="hover:underline">Works</a>
          <a href="#events" className="hover:underline">Events</a>
          <a href="#visit" className="hover:underline">Visit</a>
        </nav>
        <button className="bg-black text-white hover:bg-[#ffff3f] hover:text-black font-black text-xs uppercase tracking-widest px-5 py-3 border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_rgba(0,0,0,1)] transition-all">
          MEMBERS
        </button>
      </header>

      {/* Hero */}
      <section className="relative px-6 md:px-12 py-24 md:py-32 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="inline-block bg-[#06d6a0] text-black border-2 border-black rounded-none px-4 py-1.5 text-xs font-black uppercase tracking-wider mb-6 shadow-[2px_2px_0px_rgba(0,0,0,1)]">
            SUMMER PROGRAMME 2026 // OPEN
          </div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase">
            COBALT<br />
            <span className="bg-[#ffff3f] px-2 py-1 border-2 border-black inline-block shadow-[4px_4px_0px_rgba(0,0,0,1)] mt-2">HOURS.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-8 text-sm text-[#333] max-w-md leading-relaxed border-l-4 border-black pl-4">
            A brutalist exploration of photography, concrete artifacts, and architectural installations by Léa Marchetti. Curated for the modern space.
          </motion.p>
          <div className="mt-10 flex gap-4">
            <a href="#works" className="bg-[#ff8fa3] text-black px-6 py-4 font-black uppercase text-xs tracking-widest border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:bg-[#ffff3f] transition active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              VIEW EXHIBITS
            </a>
            <a href="#visit" className="bg-white text-black px-6 py-4 font-black uppercase text-xs tracking-widest border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white transition active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              PLAN VISIT
            </a>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="lg:col-span-5 relative">
          <div className="bg-[#ffff3f] p-3 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] rounded-none">
            <div className="aspect-square border-2 border-black overflow-hidden relative">
              <img src={galleryHero} alt="Brutalist Art Gallery Exhibition" className="w-full h-full object-cover scale-[1.02] hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="mt-3 bg-white border-2 border-black p-3 text-xs">
              <div className="font-bold">EXHIBIT ROOM A // NEUBRUTALISM</div>
              <div className="text-slate-500 mt-1">CURATOR: LÉA MARCHETTI</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Works grid */}
      <section id="works" className="px-6 md:px-12 py-24 max-w-7xl mx-auto border-t-4 border-black">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#ff8fa3] font-bold mb-2">// SELECTED WORKS</div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase">THE CATALOGUE</h2>
          </div>
          <span className="text-xs uppercase bg-black text-white px-3 py-1 border-2 border-black shadow-[2px_2px_0px_rgba(255,255,63,1)]">CLICK TO MAGNIFY</span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((w, i) => (
            <motion.article 
              key={w.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setOpen(w.id)}
              className="bg-white border-4 border-black p-4 shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className={`${w.ratio} border-2 border-black relative overflow-hidden`} style={{ backgroundColor: w.color }}>
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition flex items-center justify-center">
                    <Palette className="w-10 h-10 text-black opacity-30 select-none" />
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-black text-lg uppercase tracking-tight leading-tight">{w.t}</h3>
                  <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">{w.a}</div>
                </div>
              </div>
              <div className="mt-6 pt-3 border-t-2 border-black flex justify-between items-center text-xs font-bold">
                <span>YEAR: {w.y}</span>
                <span className="bg-[#a2d2ff] px-2 py-0.5 border border-black">INQUIRE</span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Events */}
      <section id="events" className="px-6 md:px-12 py-24 bg-[#ffff3f] border-t-4 border-b-4 border-black">
        <div className="max-w-7xl mx-auto">
           <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase mb-12">// SCHEDULED EVENTS</h2>
          <div className="space-y-4">
            {events.map(e => (
              <div key={e.t} className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all group flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer">
                <div className="flex items-baseline gap-4">
                  <span className="bg-[#ff8fa3] text-black border-2 border-black font-black text-xs uppercase px-3 py-1 shadow-[2px_2px_0px_rgba(0,0,0,1)]">{e.d}</span>
                  <div className="font-black text-lg uppercase leading-tight mt-1">{e.t}</div>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-bold text-slate-500">{e.time}</span>
                  <span className="bg-black text-white px-4 py-2 border-2 border-black text-xs font-black uppercase hover:bg-[#a2d2ff] hover:text-black shadow-[2px_2px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] transition-all">RSVP</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit */}
      <section id="visit" className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border-4 border-black p-6 shadow-[5px_5px_0px_rgba(0,0,0,1)]">
            <div className="text-xs uppercase font-bold text-slate-500 mb-2">// LOCATION</div>
            <div className="text-lg font-black uppercase">88 Greene St<br />New York, NY</div>
          </div>
          <div className="bg-white border-4 border-black p-6 shadow-[5px_5px_0px_rgba(0,0,0,1)]">
            <div className="text-xs uppercase font-bold text-slate-500 mb-2">// VISIT HOURS</div>
            <div className="text-lg font-black uppercase">Wed — Sun<br />11:00 — 19:00</div>
          </div>
          <div className="bg-white border-4 border-black p-6 shadow-[5px_5px_0px_rgba(0,0,0,1)]">
            <div className="text-xs uppercase font-bold text-slate-500 mb-2">// INQUIRE</div>
            <div className="text-lg font-black uppercase break-all">collect@atrium.art<br /><span className="text-slate-500">+1 212 555 0188</span></div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {open !== null && (() => {
          const w = works.find(x => x.id === open)!;
          return (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => { setOpen(null); setInquireSent(false); }} className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm p-6 flex items-center justify-center cursor-zoom-out">
              <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} onClick={(e) => e.stopPropagation()} className="max-w-2xl w-full bg-white border-4 border-black p-6 shadow-[10px_10px_0px_rgba(0,0,0,1)] cursor-default">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-black text-2xl uppercase leading-tight">{w.t}</h3>
                  <button onClick={() => { setOpen(null); setInquireSent(false); }} className="bg-black text-white hover:bg-[#ff8fa3] hover:text-black border-2 border-black h-8 w-8 grid place-items-center font-black">×</button>
                </div>
                
                <div className={`${w.ratio} border-2 border-black max-h-[50vh] mx-auto`} style={{ backgroundColor: w.color }} />
                
                <div className="mt-6 border-t-2 border-black pt-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <div className="text-sm font-black uppercase">{w.a}</div>
                    <div className="text-xs text-slate-500 font-bold uppercase mt-1">Creation year: {w.y}</div>
                  </div>
                  <button 
                    disabled={inquireSent}
                    onClick={() => setInquireSent(true)}
                    className="w-full md:w-auto bg-[#ffff3f] text-black border-2 border-black px-6 py-3 font-black text-xs uppercase shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:bg-[#ff8fa3] transition active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_rgba(0,0,0,1)] disabled:opacity-50"
                  >
                    {inquireSent ? "INQUIRY SENT FOR REVIEW" : "INQUIRE ABOUT ORIGINAL WORK"}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>

      <footer className="py-12 text-center text-xs uppercase tracking-widest text-slate-500 border-t-4 border-black">© Atrium Contemporary // STARK CONTRAST SYSTEM</footer>
    </div>
  );
}
