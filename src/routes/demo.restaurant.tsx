import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { DemoBar } from "@/components/site/DemoBar";
import restaurantHero from "@/assets/images/restaurant_hero.png";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/demo/restaurant")({
  head: () => ({ meta: [{ title: "Maison Lumière — Luxury Restaurant Experience" }] }),
  component: Page,
});

const menu = {
  Starters: [
    { n: "Heirloom Heritage Burrata", d: "sweet basil oil, heirloom tomatoes, slow-toasted sourdough", p: 18 },
    { n: "Yuzu Tuna Tartare", d: "fresh wild tuna, avocado purée, black sesame crisp", p: 24 },
    { n: "Porcini Wild Mushroom Soup", d: "truffle foam, chive oil, toasted pine nuts", p: 19 },
  ],
  Mains: [
    { n: "Pan-Seared Duck à l'Orange", d: "glazed blood orange reduction, baby fennel purée", p: 42 },
    { n: "Miso-Glazed Black Cod", d: "sweet sake glaze, baby bok choy, toasted sesame", p: 38 },
    { n: "A5 Wagyu Ribeye", d: "charred shallot, bone marrow reduction, black garlic", p: 78 },
  ],
  Desserts: [
    { n: "Tahitian Vanilla Crème Brûlée", d: "caramelized sugar crust, fresh seasonal berries", p: 14 },
    { n: "Liquid Gold Chocolate Sphere", d: "hot passionfruit syrup, edible gold leaf, dark chocolate", p: 16 },
  ],
};

function Page() {
  const [tab, setTab] = useState<keyof typeof menu>("Starters");
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState("");
  const [booked, setBooked] = useState(false);

  useEffect(() => {
    document.documentElement.className = "theme-luxury";
  }, []);

  return (
    <div className="min-h-screen bg-[#020d09] text-[#f5ebd6] overflow-x-hidden selection:bg-[#d4af37]/20 selection:text-[#d4af37]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
      <DemoBar label="Restaurant (Luxury Editorial)" accent="#d4af37" />

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-between">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.06)_0%,transparent_60%)]" />
        
        <header className="relative px-8 md:px-16 pt-12 flex items-center justify-between text-xs tracking-[0.4em] uppercase border-b border-[#d4af37]/10 pb-6">
          <div className="font-bold text-base text-white tracking-widest">MAISON LUMIÈRE</div>
          <nav className="hidden md:flex gap-10 text-[#d4af37] font-semibold">
            <a href="#menu" className="hover:text-white transition">Menu</a>
            <a href="#reserve" className="hover:text-white transition">Reserve</a>
            <a href="#" className="hover:text-white transition">Wine Cellar</a>
          </nav>
          <div className="text-[#d4af37] font-semibold">MUMBAI // NEW DELHI</div>
        </header>

        <div className="relative flex-1 grid lg:grid-cols-12 gap-12 items-center px-8 md:px-16 py-16 max-w-7xl mx-auto">
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-6 font-mono font-bold">
              ◈ TWELVE-COURSE MICHELIN TASTING MENU
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl sm:text-6xl md:text-8xl leading-[0.9] text-white tracking-tight"
            >
              A symphony of <br />
              <span className="italic text-[#d4af37] font-normal">elevated taste.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-8 max-w-lg text-lg text-[#f5ebd6]/70 leading-relaxed">
              Three Michelin stars. Cultivated by master chefs, celebrating seasonal local crops and premium imported ingredients.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-10 flex gap-4">
              <a href="#reserve" className="bg-[#d4af37] text-black px-8 py-4 font-bold tracking-widest uppercase text-xs hover:bg-[#fff] transition">
                Reserve Table
              </a>
              <a href="#menu" className="border border-[#d4af37]/30 px-8 py-4 text-[#d4af37] tracking-widest uppercase text-xs hover:bg-[#d4af37]/5 transition">
                Explore Menu
              </a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="lg:col-span-5 relative aspect-square rounded-full overflow-hidden border border-[#d4af37]/25 shadow-2xl p-3 bg-[#051c12]/20">
            <div className="w-full h-full rounded-full overflow-hidden border border-[#d4af37]/10 relative">
              <img src={restaurantHero} alt="Gourmet dish" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 brightness-95" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020d09] via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="relative py-32 px-8 md:px-16 border-t border-[#d4af37]/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.4em] uppercase text-[#d4af37] font-bold font-mono">§ LA CARTE DE LA MAISON</span>
            <h2 className="text-3xl sm:text-5xl md:text-7xl italic text-white mt-2">Signature Flavors</h2>
          </div>

          <div className="flex gap-10 justify-center border-b border-[#d4af37]/15 mb-16">
            {(Object.keys(menu) as Array<keyof typeof menu>).map((k) => (
              <button
                key={k}
                onClick={() => setTab(k)}
                className={`pb-4 text-sm tracking-[0.2em] uppercase transition font-semibold ${tab === k ? "text-[#d4af37] border-b border-[#d4af37]" : "text-[#f5ebd6]/40 hover:text-[#f5ebd6]"}`}
              >
                {k}
              </button>
            ))}
          </div>

          <motion.div key={tab} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="grid md:grid-cols-2 gap-12">
            {menu[tab].map((item) => (
              <div key={item.n} className="border-b border-[#d4af37]/10 pb-6 flex flex-col justify-between">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-2xl italic font-bold text-white leading-tight">{item.n}</h3>
                  <span className="text-xl text-[#d4af37] font-bold tabular-nums">${item.p}</span>
                </div>
                <p className="text-[#f5ebd6]/60 text-sm mt-2 font-sans leading-relaxed">{item.d}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Reserve */}
      <section id="reserve" className="relative py-32 px-8 md:px-16 bg-[#04120c] border-t border-[#d4af37]/10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.4em] uppercase text-[#d4af37] font-bold font-mono">§ SECURE RESERVATION</span>
            <h2 className="text-3xl sm:text-5xl md:text-7xl italic text-white mt-2">Table Booking</h2>
          </div>

          {booked ? (
            <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-[#d4af37]/5 border border-[#d4af37]/35 p-12 text-center rounded-2xl shadow-xl">
              <div className="flex justify-center mb-6 text-[#d4af37]">
                <CheckCircle2 className="w-16 h-16 stroke-[1.5]" />
              </div>
              <h3 className="text-3xl italic text-white">Reservation Confirmed</h3>
              <p className="text-[#f5ebd6]/70 text-sm mt-3">We look forward to hosting {guests} guest{guests > 1 ? "s" : ""} on {date}. Your unique dining check has been sent to your email.</p>
            </motion.div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setBooked(true); }} className="space-y-8 bg-[#020d09]/50 border border-[#d4af37]/10 p-8 md:p-12 rounded-3xl shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8">
                <label className="block">
                  <span className="text-xs tracking-[0.25em] uppercase text-[#d4af37] font-bold font-mono">Date</span>
                  <input required type="date" value={date} onChange={(e) => setDate(e.target.value)} className="mt-2 w-full bg-transparent border-b border-[#d4af37]/30 py-3 focus:border-[#d4af37] outline-none text-[#f5ebd6] font-mono text-sm [color-scheme:dark]" />
                </label>
                <label className="block">
                  <span className="text-xs tracking-[0.25em] uppercase text-[#d4af37] font-bold font-mono">Guests count</span>
                  <div className="mt-2 flex items-center justify-between border-b border-[#d4af37]/30 py-2.5">
                    <button type="button" onClick={() => setGuests(Math.max(1, guests - 1))} className="w-8 h-8 rounded-full border border-[#d4af37]/40 text-[#d4af37] flex items-center justify-center hover:bg-[#d4af37]/10">-</button>
                    <span className="text-2xl font-bold italic text-white tabular-nums">{guests}</span>
                    <button type="button" onClick={() => setGuests(Math.min(12, guests + 1))} className="w-8 h-8 rounded-full border border-[#d4af37]/40 text-[#d4af37] flex items-center justify-center hover:bg-[#d4af37]/10">+</button>
                  </div>
                </label>
              </div>
              <label className="block">
                <span className="text-xs tracking-[0.25em] uppercase text-[#d4af37] font-bold font-mono">Full Name</span>
                <input required placeholder="Your full name" className="mt-2 w-full bg-transparent border-b border-[#d4af37]/30 py-3 focus:border-[#d4af37] outline-none text-[#f5ebd6] placeholder-[#f5ebd6]/30 text-sm font-sans" />
              </label>
              <label className="block">
                <span className="text-xs tracking-[0.25em] uppercase text-[#d4af37] font-bold font-mono">Email Address</span>
                <input required type="email" placeholder="Your email address" className="mt-2 w-full bg-transparent border-b border-[#d4af37]/30 py-3 focus:border-[#d4af37] outline-none text-[#f5ebd6] placeholder-[#f5ebd6]/30 text-sm font-sans" />
              </label>
              <button className="w-full bg-[#d4af37] text-black py-4.5 font-bold tracking-widest uppercase text-xs hover:bg-white hover:text-black transition duration-300 shadow-md">
                CONFIRM TABLE RESERVATION
              </button>
            </form>
          )}
        </div>
      </section>

      <footer className="text-center py-16 text-xs tracking-[0.4em] uppercase text-[#d4af37]/50 border-t border-[#d4af37]/10 bg-[#020d09]">
        Nariman Point, Mumbai · +91 22 2284 1234 // ESTABLISHED 1987
      </footer>
    </div>
  );
}
