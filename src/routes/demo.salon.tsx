import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { DemoBar } from "@/components/site/DemoBar";
import salonHero from "@/assets/images/salon_hero.png";
import { Sparkles, Scissors, UserRound, Gift } from "lucide-react";

export const Route = createFileRoute("/demo/salon")({
  head: () => ({ meta: [{ title: "Oak & Mane — Claymorphic Hair Salon" }] }),
  component: Page,
});

const services = [
  { n: "Signature Cut", d: "45 min · with senior stylist", p: 95 },
  { n: "Color & Highlights", d: "2h · full balayage", p: 240 },
  { n: "Blowout", d: "30 min · wash + style", p: 55 },
  { n: "Treatment Mask", d: "20 min · keratin or olaplex", p: 75 },
  { n: "Bridal Trial", d: "90 min · hair + makeup", p: 180 },
  { n: "Men's Grooming", d: "30 min · cut + beard", p: 65 },
];

const stylists = [
  { n: "Mira", role: "Founder · Color Specialist", years: 14, icon: Sparkles, color: "text-pink-500 bg-pink-50 border-pink-200" },
  { n: "Jules", role: "Cuts · Editorial Expert", years: 9, icon: Scissors, color: "text-blue-500 bg-blue-50 border-blue-200" },
  { n: "Devi", role: "Curl & Wave Specialist", years: 7, icon: UserRound, color: "text-amber-500 bg-amber-50 border-amber-200" },
];

function Page() {
  const [selected, setSelected] = useState<number[]>([]);
  const [time, setTime] = useState("");
  const [booked, setBooked] = useState(false);
  const total = selected.reduce((s, i) => s + services[i].p, 0);

  useEffect(() => {
    document.documentElement.className = "theme-claymorphism";
  }, []);

  const toggleService = (i: number) => {
    if (selected.includes(i)) {
      setSelected(selected.filter(x => x !== i));
    } else {
      setSelected([...selected, i]);
    }
  };

  return (
    <div className="min-h-screen bg-[#fdf2f0] text-[#4d2f25] overflow-x-hidden selection:bg-[#ffb3c6] selection:text-[#4d2f25]" style={{ fontFamily: "'Inter', sans-serif" }}>
      <DemoBar label="Salon & Spa (Claymorphism)" accent="#ff8fa3" />

      <header className="sticky top-0 z-40 bg-[#fdf2f0]/60 backdrop-blur-xl px-6 md:px-12 py-5 flex items-center justify-between border-b border-[#ffccd5]/40">
        <div className="text-2xl font-black tracking-tight text-[#ff708a] flex items-center gap-1">
          OAK <span className="text-[#a2d2ff]">&</span> MANE
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-bold text-[#6d4d42]">
          <a href="#services" className="hover:text-[#ff708a] transition">Services</a>
          <a href="#team" className="hover:text-[#ff708a] transition">Team</a>
          <a href="#book" className="hover:text-[#ff708a] transition">Book</a>
        </nav>
        <a href="#book" className="bg-[#ff8fa3] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest shadow-[inset_2px_2px_4px_rgba(255,255,255,0.4),inset_-2px_-2px_4px_rgba(0,0,0,0.15),6px_6px_16px_rgba(255,143,163,0.3)] hover:scale-[1.03] transition-all">
          BOOK SESSION
        </a>
      </header>

      {/* Hero */}
      <section className="relative px-6 md:px-12 py-20 md:py-28 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-1.5 bg-[#a2d2ff]/20 text-[#0077b6] rounded-full px-4 py-2 text-xs font-black uppercase tracking-wider mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" /> BENGALURU'S TOP STYLING LOUNGE 2026
          </div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-[#4d2f25]">
            Sculpting hair<br />
            into custom<br />
            <span className="text-[#ff708a] drop-shadow-sm">visual art.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-8 text-base text-[#6d4d42]/80 max-w-md leading-relaxed">
            Uncompromising quality, tactile soft styling, and plant-based keratin. Book a session with our award-winning master team.
          </motion.p>
          <div className="mt-10 flex gap-4">
            <a href="#book" className="bg-[#ff8fa3] text-white px-8 py-4 rounded-3xl font-bold uppercase text-xs tracking-widest shadow-[inset_3px_3px_6px_rgba(255,255,255,0.4),inset_-3px_-3px_6px_rgba(0,0,0,0.1),8px_8px_20px_rgba(255,143,163,0.3)] hover:scale-[1.03] transition duration-300">
              BOOK IN 30s
            </a>
            <a href="#services" className="bg-white text-[#4d2f25] px-8 py-4 rounded-3xl font-bold uppercase text-xs tracking-widest shadow-[inset_3px_3px_6px_rgba(255,255,255,0.8),inset_-3px_-3px_6px_rgba(0,0,0,0.05),8px_8px_20px_rgba(0,0,0,0.05)] hover:scale-[1.03] transition duration-300">
              EXPLORE CUTS
            </a>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="lg:col-span-5 relative">
          {/* Claymorphic Outer container */}
          <div className="aspect-[4/5] rounded-[3.5rem] bg-white border-[6px] border-[#ffccd5]/20 p-5 shadow-[inset_4px_4px_8px_rgba(255,255,255,0.9),inset_-4px_-4px_8px_rgba(0,0,0,0.06),12px_12px_30px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col justify-between relative">
            <div className="absolute inset-0 z-0">
              <img src={salonHero} alt="Salon Interior" className="w-full h-full object-cover scale-[1.02] hover:scale-105 transition-transform duration-700 opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80" />
            </div>
            
            <div className="z-10 flex justify-end">
              <span className="bg-[#a2d2ff] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-[inset_1px_1px_2px_white,2px_2px_6px_rgba(162,210,255,0.4)]">EST. 2018</span>
            </div>

            <div className="z-10 bg-white/95 border border-[#ffccd5]/30 rounded-3xl p-5 shadow-[inset_3px_3px_6px_white,inset_-3px_-3px_6px_rgba(0,0,0,0.02),8px_8px_20px_rgba(0,0,0,0.05)]">
              <div className="text-[10px] text-[#ff708a] font-black uppercase tracking-wider">NEXT OPENING</div>
              <div className="text-lg font-extrabold mt-1 text-[#4d2f25]">Tomorrow @ 2:30 PM</div>
              <div className="text-xs text-[#6d4d42] mt-0.5">Mira · Signature Style & Cut</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-[#ff708a] font-bold">
            <Sparkles className="w-3 h-3" /> OUR SERVICE MENU
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-[#4d2f25] mt-2">CHOOSE SERVICES</h2>
          <p className="text-sm text-[#6d4d42] mt-2">Tap to toggle services to include in your claymorphic booking calculator.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const active = selected.includes(i);
            return (
              <button
                key={s.n}
                onClick={() => toggleService(i)}
                className={`text-left p-6 rounded-3xl border-0 transition duration-300 ${
                  active 
                    ? "bg-[#ff8fa3] text-white shadow-[inset_3px_3px_6px_rgba(255,255,255,0.3),inset_-3px_-3px_6px_rgba(0,0,0,0.1),8px_8px_20px_rgba(255,143,163,0.4)]" 
                    : "bg-white text-[#4d2f25] shadow-[inset_4px_4px_8px_rgba(255,255,255,0.9),inset_-4px_-4px_8px_rgba(0,0,0,0.03),8px_8px_20px_rgba(0,0,0,0.04)] hover:bg-[#fbf4f2]"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold">{s.n}</h3>
                    <p className={`text-xs mt-1 leading-relaxed ${active ? "text-white/80" : "text-[#6d4d42]/70"}`}>{s.d}</p>
                  </div>
                  <div className="text-xl font-black tabular-nums">${s.p}</div>
                </div>
                <div className={`mt-6 text-[10px] uppercase tracking-widest font-bold ${active ? "text-white/90" : "text-[#ff708a]"}`}>
                  {active ? "✓ Added to Book" : "+ Add to Book"}
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-24 px-6 bg-white/40 border-y border-[#ffccd5]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-[#ff708a] font-bold">
              <Sparkles className="w-3 h-3" /> MEET THE ARTISTS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-[#4d2f25] mt-2">OUR HAIR ARTISTS</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             {stylists.map(s => {
               const StylistIcon = s.icon;
               return (
                 <div key={s.n} className="bg-white rounded-[3rem] p-6 shadow-[inset_4px_4px_8px_rgba(255,255,255,0.9),inset_-4px_-4px_8px_rgba(0,0,0,0.03),10px_10px_25px_rgba(0,0,0,0.04)] text-center flex flex-col justify-between h-[340px]">
                   <div className={`w-16 h-16 rounded-full mx-auto my-6 grid place-items-center text-3xl shadow-inner border ${s.color}`}>
                     <StylistIcon className="w-8 h-8" />
                   </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#4d2f25]">{s.n}</h3>
                  <div className="text-xs uppercase text-[#ff708a] font-bold mt-1">{s.role}</div>
                  <p className="text-xs text-[#6d4d42]/70 mt-2">{s.years} years of senior styling experience.</p>
                </div>
                <a href="#book" className="mt-6 w-full bg-[#a2d2ff] hover:bg-[#85c1f5] text-white py-3 rounded-2xl text-xs font-bold uppercase tracking-wider shadow-[inset_2px_2px_4px_rgba(255,255,255,0.4),2px_2px_6px_rgba(162,210,255,0.3)] transition">
                  Book with {s.n}
                </a>
              </div>
            )})}
          </div>
        </div>
      </section>

      {/* Book */}
      <section id="book" className="py-24 px-6 max-w-4xl mx-auto">
        <div className="bg-white rounded-[3.5rem] p-8 md:p-12 shadow-[inset_4px_4px_8px_rgba(255,255,255,0.9),inset_-4px_-4px_8px_rgba(0,0,0,0.04),12px_12px_40px_rgba(0,0,0,0.06)] border border-white">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#4d2f25]">CHOOSE YOUR TIMING</h2>
          <p className="text-xs text-center text-[#6d4d42] mt-2">Select an available appointment slot for tomorrow.</p>

          <div className="mt-8 grid grid-cols-4 md:grid-cols-6 gap-3">
            {["9:00","9:30","10:00","11:00","12:00","1:30","2:00","2:30","3:00","4:00","5:30","6:00"].map(t => (
              <button 
                key={t} 
                onClick={() => setTime(t)} 
                className={`py-3 rounded-2xl text-xs font-bold border-0 transition duration-300 shadow-sm ${
                  time === t 
                    ? "bg-[#ff8fa3] text-white shadow-[inset_2px_2px_4px_rgba(255,255,255,0.4),2px_2px_8px_rgba(255,143,163,0.4)]" 
                    : "bg-[#fdf2f0] text-[#4d2f25] hover:bg-[#ffccd5]/20"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-3xl bg-[#fdf2f0] flex items-center justify-between shadow-[inset_3px_3px_6px_rgba(0,0,0,0.03)] border border-[#ffccd5]/20">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-[#ff708a] font-bold">Selected Services</div>
              <div className="text-base font-bold text-[#4d2f25] mt-1">
                {selected.length === 0 ? "No services chosen" : `${selected.length} service${selected.length !== 1 ? "s" : ""} selected`}
                {time && ` @ ${time}`}
              </div>
            </div>
            <div className="text-3xl font-black text-[#ff708a] tabular-nums">${total}</div>
          </div>

          <button 
            disabled={!selected.length || !time} 
            onClick={() => setBooked(true)}
            className="mt-6 w-full bg-[#ff8fa3] text-white py-4.5 rounded-3xl text-sm font-black uppercase tracking-widest shadow-[inset_3px_3px_6px_rgba(255,255,255,0.4),inset_-3px_-3px_6px_rgba(0,0,0,0.1),8px_8px_24px_rgba(255,143,163,0.3)] hover:scale-[1.01] transition duration-300 disabled:opacity-40 disabled:scale-100 disabled:cursor-not-allowed"
          >
            CONFIRM APPOINTMENT
          </button>
        </div>
      </section>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {booked && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setBooked(false)} className="fixed inset-0 bg-[#4d2f25]/50 z-50 backdrop-blur-sm" />
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-[3rem] p-8 z-50 max-w-sm w-full text-center shadow-[inset_4px_4px_8px_rgba(255,255,255,0.9),inset_-4px_-4px_8px_rgba(0,0,0,0.04),12px_12px_40px_rgba(0,0,0,0.1)] border border-[#ffccd5]/30">
              <div className="w-16 h-16 bg-pink-100 text-pink-500 rounded-full mx-auto mb-4 grid place-items-center shadow-inner">
                <Gift className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-[#4d2f25] uppercase tracking-tight">Booking confirmed</h3>
              <p className="text-xs text-[#6d4d42] mt-2">Your salon stylist appointment is successfully booked. We've sent details to your inbox.</p>
              
              <div className="my-6 p-4 rounded-2xl bg-[#fdf2f0] text-xs font-mono text-left space-y-1 text-[#6d4d42] shadow-inner">
                <div>DATE: TOMORROW</div>
                <div>TIME: {time}</div>
                <div>SERVICES: {selected.length}</div>
                <div>TOTAL VALUE: ${total}</div>
              </div>

              <button onClick={() => { setBooked(false); setSelected([]); setTime(""); }} className="w-full bg-[#a2d2ff] hover:bg-[#85c1f5] text-white font-bold py-3.5 rounded-2xl text-xs uppercase tracking-widest shadow-[inset_2px_2px_4px_rgba(255,255,255,0.4),2px_2px_8px_rgba(162,210,255,0.3)] transition">
                DASHBOARD
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <footer className="py-12 text-center text-xs uppercase tracking-widest text-[#6d4d42]/70 border-t border-[#ffccd5]/30">© Oak & Mane · 10 MG Road, Bengaluru</footer>
    </div>
  );
}
