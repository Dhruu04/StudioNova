import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { DemoBar } from "@/components/site/DemoBar";
import healthHero from "@/assets/images/health_hero.png";
import { 
  Stethoscope, 
  Video, 
  TestTube2, 
  Syringe, 
  HeartPulse, 
  CheckCircle2, 
  PlusCircle 
} from "lucide-react";

export const Route = createFileRoute("/demo/health")({
  head: () => ({ meta: [{ title: "Cedar Health — Premium Clean Clinic" }] }),
  component: Page,
});

const doctors = [
  { n: "Dr. Amara Patel", s: "Family Medicine", next: "Today 3:30 PM", icon: HeartPulse, color: "text-sky-500 bg-sky-50 border-sky-200" },
  { n: "Dr. James Wu", s: "Pediatrics & Youth", next: "Tomorrow 9:00 AM", icon: HeartPulse, color: "text-emerald-500 bg-emerald-50 border-emerald-200" },
  { n: "Dr. Sofia Rojas", s: "Dermatology Specialist", next: "Today 5:15 PM", icon: HeartPulse, color: "text-purple-500 bg-purple-50 border-purple-200" },
];

const services = [
  { icon: Stethoscope, t: "Primary Care", d: "Annual physicals, chronic disease management, and wellness checks." },
  { icon: Video, t: "Virtual Telehealth", d: "Secure video consultations in under 15 minutes." },
  { icon: TestTube2, t: "Lab Diagnostics", d: "On-site blood draws, rapid testing, and imaging." },
  { icon: Syringe, t: "Immunizations", d: "Flu shots, travel vaccines, and child immunizations." },
];

function Page() {
  const [reason, setReason] = useState("");
  const [doc, setDoc] = useState<number | null>(null);
  const [slot, setSlot] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.documentElement.className = "theme-trust";
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] overflow-x-hidden selection:bg-[#e2f8ff] selection:text-[#0284c7]" style={{ fontFamily: "'Inter', sans-serif" }}>
      <DemoBar label="Health Clinic (Clinical Clean)" accent="#0ea5e9" />

      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 md:px-12 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 grid place-items-center rounded-xl bg-sky-500 text-white shadow-md shadow-sky-500/10">
            <PlusCircle className="w-5 h-5" />
          </div>
          <span className="font-extrabold text-lg tracking-wide text-slate-800">CEDAR HEALTH</span>
        </div>
        <nav className="hidden md:flex gap-8 text-xs uppercase tracking-wider font-semibold text-slate-500">
          <a href="#services" className="hover:text-sky-600 transition">Services</a>
          <a href="#doctors" className="hover:text-sky-600 transition">Providers</a>
          <a href="#book" className="hover:text-sky-600 transition">Book Online</a>
        </nav>
        <a href="tel:+15551234567" className="bg-sky-50 hover:bg-sky-100 text-sky-600 font-bold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider transition">
          Call 555-1234
        </a>
      </header>

      {/* Hero */}
      <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-100 text-sky-600 rounded-full px-4 py-1.5 text-xs font-semibold mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-500 animate-pulse" /> Same-day appointments available
          </div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-[1.05] text-slate-900">
            Healthcare built for<br />
            <span className="text-sky-500">peace of mind.</span>
          </motion.h1>
          <p className="mt-8 text-slate-500 text-lg max-w-xl leading-relaxed">
            A modernized care experience offering both in-person clinic appointments and instant virtual telehealth. Accepts most private insurances.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#book" className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 py-4 rounded-xl text-xs uppercase tracking-widest shadow-md transition duration-300">
              BOOK AN APPOINTMENT
            </a>
            <a href="#" className="bg-white hover:bg-slate-50 text-slate-700 font-bold px-8 py-4 rounded-xl text-xs uppercase tracking-widest border border-slate-200 transition duration-300">
              VIRTUAL TELEHEALTH
            </a>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="lg:col-span-5 relative aspect-square rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-xl">
          <img src={healthHero} alt="Modern clinic lobby reception" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f8fafc]/50 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 bg-white/95 border border-slate-100 rounded-2xl p-5 shadow-lg">
            <div className="text-[10px] text-sky-500 font-bold uppercase tracking-widest font-mono">Clinic Office</div>
            <div className="text-xl font-bold mt-1 text-slate-800">Ahmedabad Branch</div>
            <div className="text-xs text-slate-500 mt-1">C.G. Road // Open daily until 7 PM</div>
          </div>
        </motion.div>
      </section>

      {/* Services */}
      <section id="services" className="px-6 md:px-12 py-24 max-w-7xl mx-auto border-t border-slate-100">
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-sky-500 font-bold">// CLINICAL DEPARTMENTS</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mt-2">OUR SERVICES</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {services.map((s, i) => {
            const ServiceIcon = s.icon;
            return (
              <motion.div key={s.t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md hover:border-sky-300 transition duration-300">
                <div className="text-4xl text-sky-500 bg-sky-50 rounded-2xl w-14 h-14 flex items-center justify-center border border-sky-100">
                  <ServiceIcon className="w-7 h-7" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{s.t}</h3>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">{s.d}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Booking Wizard */}
      <section id="book" className="px-6 md:px-12 py-24 bg-sky-50/50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-100">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center">APPOINTMENT SCHEDULER</h2>
          <p className="text-center text-xs text-slate-400 mt-2">Complete these three steps to book a provider slot.</p>

          {done ? (
            <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-12">
              <div className="h-20 w-20 rounded-full bg-sky-100 text-sky-500 grid place-items-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="mt-6 text-2xl font-black text-slate-800">Appointment Booked</h3>
              <p className="mt-3 text-slate-500 text-sm">Your visit with <span className="text-slate-900 font-bold">{doctors[doc!]?.n}</span> is scheduled for <span className="text-sky-500 font-bold">{slot}</span>.<br />Check your email for reservation credentials.</p>
              <button onClick={() => { setDone(false); setReason(""); setDoc(null); setSlot(""); }} className="mt-8 bg-sky-500 text-white px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm hover:bg-sky-600 transition">New Schedule</button>
            </motion.div>
          ) : (
            <div className="mt-10 space-y-8">
              <div>
                <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-3">1 · Reason for visit</div>
                <div className="flex flex-wrap gap-2">
                  {["Annual physical", "Sick visit", "Follow-up check", "Vaccination", "Lab diagnostics", "Telehealth consultation"].map(r => (
                    <button key={r} onClick={() => setReason(r)} className={`px-5 py-2.5 rounded-full text-xs font-semibold border transition duration-300 ${reason === r ? "bg-sky-500 border-sky-500 text-white shadow-md shadow-sky-500/10" : "bg-[#f8fafc] border-slate-200 hover:border-sky-300 text-slate-600"}`}>{r}</button>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-3">2 · Select a physician</div>
                <div className="grid sm:grid-cols-3 gap-4">
                  {doctors.map((d, i) => {
                    const DocIcon = d.icon;
                    return (
                      <button key={d.n} onClick={() => setDoc(i)} className={`p-5 rounded-2xl border text-left transition duration-300 ${doc === i ? "border-sky-500 bg-sky-50/45 shadow-sm shadow-sky-500/5" : "bg-[#f8fafc] border-slate-200 hover:border-sky-300"}`}>
                        <div className={`w-12 h-12 rounded-xl grid place-items-center text-xl mb-3 border ${d.color}`}>
                          <DocIcon className="w-6 h-6" />
                        </div>
                        <div className="font-extrabold text-sm text-slate-800">{d.n}</div>
                        <div className="text-xs text-slate-400 mt-0.5">{d.s}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-3">3 · Select appointment time</div>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-2.5">
                  {["9:00 AM","10:30 AM","11:45 AM","1:15 PM","2:30 PM","4:00 PM"].map(t => (
                    <button key={t} onClick={() => setSlot(t)} className={`py-3.5 rounded-xl text-xs font-bold border transition duration-300 ${slot === t ? "bg-sky-500 border-sky-500 text-white shadow-md" : "bg-[#f8fafc] border-slate-200 hover:border-sky-300 text-slate-600"}`}>{t}</button>
                  ))}
                </div>
              </div>

              <button onClick={() => setDone(true)} disabled={!reason || doc === null || !slot} className="w-full bg-sky-500 text-white py-4.5 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-sky-600 transition shadow-md disabled:opacity-40 disabled:scale-100 disabled:cursor-not-allowed">
                CONFIRM RESERVATION
              </button>
            </div>
          )}
        </div>
      </section>

      <footer className="py-12 text-center text-xs uppercase tracking-widest text-slate-400 border-t border-slate-100 bg-white">
        © Cedar Health · C.G. Road, Ahmedabad // MODERN CLINICAL CARE SYSTEM
      </footer>
    </div>
  );
}
