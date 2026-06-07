import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { DemoBar } from "@/components/site/DemoBar";
import educationHero from "@/assets/images/education_hero.png";
import { GraduationCap, Award, TrendingUp, Users, Globe, School } from "lucide-react";

export const Route = createFileRoute("/demo/education")({
  head: () => ({ meta: [{ title: "Polaris Academy — Bento SaaS Portal" }] }),
  component: Page,
});

const programs = [
  { n: "Foundational Years", age: "Ages 4–7", desc: "Play-based coding blocks, literacy, rhythm & sensory coordinate learning.", color: "from-sky-400 to-blue-500", progress: 88 },
  { n: "Middle School Lab", age: "Ages 11–14", desc: "3D printing, STEM design sprints, and digital creative humanities.", color: "from-indigo-400 to-purple-500", progress: 65 },
  { n: "High School Academy", age: "Ages 15–18", desc: "IB diploma pathway, AP computer science, and career mentoring.", color: "from-cyan-400 to-sky-500", progress: 94 },
  { n: "Summer Tech Camps", age: "Ages 8–17", desc: "Robotics, generative art, and green energy engineering projects.", color: "from-emerald-400 to-teal-500", progress: 75 },
];

const stats = [
  { k: "98%", v: "Ivy & Top Ivy Acceptance", icon: TrendingUp },
  { k: "1:8", v: "Class Mentoring Ratio", icon: Users },
  { k: "42", v: "Global Nationalities", icon: Globe },
  { k: "1973", v: "Established Campus", icon: School }
];

function Page() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ child: "", grade: "", email: "" });

  useEffect(() => {
    document.documentElement.className = "theme-bento";
  }, []);

  return (
    <div className="min-h-screen bg-[#f1f5f9] text-[#0f1b3d] overflow-x-hidden selection:bg-[#cbd5e1] selection:text-[#1e3a8a]" style={{ fontFamily: "'Inter', sans-serif" }}>
      <DemoBar label="Education (Bento SaaS)" accent="#3b82f6" />

      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 md:px-12 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 grid place-items-center rounded-xl bg-[#0f1b3d] text-white text-base font-bold shadow-lg">P</div>
          <span className="font-extrabold text-lg tracking-wider text-slate-800">POLARIS</span>
        </div>
        <nav className="hidden md:flex gap-8 text-xs uppercase tracking-wider font-semibold text-slate-500">
          <a href="#programs" className="hover:text-[#3b82f6] transition">Programs</a>
          <a href="#dashboard" className="hover:text-[#3b82f6] transition">Dashboard</a>
          <a href="#apply" className="hover:text-[#3b82f6] transition">Apply</a>
        </nav>
        <a href="#apply" className="bg-[#3b82f6] hover:bg-blue-600 text-white font-bold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider transition">
          Apply Now
        </a>
      </header>

      {/* Bento Layout Grid for Hero & Stats */}
      <main className="max-w-7xl mx-auto px-6 py-12 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Hero Card - Bento Box 1 */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-[2rem] p-8 md:p-12 flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-blue-500/5 blur-[80px] pointer-events-none" />
            
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 rounded-full px-4 py-1.5 text-xs font-semibold mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" /> Admissions active // cohort 2026
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
                Where curious minds<br />
                learn in <span className="text-[#3b82f6] underline decoration-wavy decoration-2">sprints.</span>
              </h1>
              <p className="mt-6 text-slate-500 text-base max-w-xl leading-relaxed">
                An inquiry-driven IB World Campus for students ages 4–18. Combining rigorous scientific coding labs with global humanities.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#apply" className="bg-[#0f1b3d] hover:bg-slate-800 text-white font-bold px-8 py-3.5 rounded-xl text-xs uppercase tracking-widest shadow-md transition duration-300">
                START PROCESS
              </a>
              <a href="#programs" className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-8 py-3.5 rounded-xl text-xs uppercase tracking-widest transition duration-300">
                SEE PROGRAM CURRICULUM
              </a>
            </div>
          </div>

          {/* Interactive Image Frame - Bento Box 2 */}
          <div className="lg:col-span-4 bg-white border border-slate-200 rounded-[2rem] overflow-hidden relative shadow-sm aspect-square lg:aspect-auto">
            <img src={educationHero} alt="Students in learning lab" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 border border-slate-100 rounded-xl p-4 shadow-md">
              <span className="text-[10px] text-blue-500 font-bold tracking-widest font-mono">CAMPUS LINK</span>
              <div className="text-sm font-bold text-slate-800 mt-0.5">Bengaluru Main Campus</div>
            </div>
          </div>

        </div>

        {/* Stats Grid - Bento Box row 2 */}
        <section id="dashboard" className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.k} className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm flex items-center gap-4 hover:border-blue-300 transition duration-300">
                <div className="text-3xl bg-slate-50 h-12 w-12 rounded-xl grid place-items-center text-blue-500">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-slate-900 tracking-tight">{s.k}</div>
                  <div className="text-xs text-slate-400 font-semibold mt-0.5">{s.v}</div>
                </div>
              </div>
            );
          })}
        </section>

        {/* Program Cards - Bento Box row 3 */}
        <section id="programs" className="space-y-6">
          <div className="text-center py-10">
            <span className="font-mono text-xs uppercase tracking-widest text-[#3b82f6] font-bold">// INTEGRATED MENTORSHIP</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase text-slate-900 mt-2">OUR LEARNING TRACKS</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {programs.map((p, i) => (
              <div key={p.n} className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-indigo-200 transition duration-300">
                <div>
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#3b82f6] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">{p.age}</span>
                    <span className="font-mono text-xs text-slate-400">#0{i+1}</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mt-4 leading-tight">{p.n}</h3>
                  <p className="mt-3 text-sm text-slate-500 leading-relaxed">{p.desc}</p>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100">
                  <div className="flex justify-between items-center text-xs text-slate-400 font-semibold mb-2">
                    <span>Curriculum Completion Score</span>
                    <span className="text-indigo-600 font-mono font-bold">{p.progress}%</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-600" style={{ width: `${p.progress}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Apply wizard Bento Form */}
        <section id="apply" className="bg-gradient-to-br from-[#0f1b3d] to-[#1e3a8a] text-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-blue-900">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-extrabold">APPLY ONLINE</h2>
              <p className="text-blue-200 text-xs mt-1">Takes 3 easy steps. Follow the dashboard guide below.</p>
            </div>

            <div className="flex gap-2.5 mb-8">
              {[0, 1, 2].map((i) => (
                <div key={i} className={`flex-1 h-1.5 rounded-full ${i <= step ? "bg-blue-400" : "bg-white/10"}`} />
              ))}
            </div>

            <div className="bg-white text-slate-900 rounded-3xl p-8 shadow-2xl">
              <AnimatePresence mode="wait">
                {step === 0 && (
                  <motion.div key="step0" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}>
                    <span className="text-[10px] text-blue-500 font-bold uppercase tracking-wider font-mono">Step 1 / 3 // Child Bio</span>
                    <h3 className="text-xl font-bold text-slate-950 mt-1 mb-6">Who is applying?</h3>
                    <div className="space-y-4">
                      <input placeholder="Child's full name" value={form.child} onChange={e => setForm({...form, child: e.target.value})} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-blue-500 outline-none bg-slate-50" />
                      <select value={form.grade} onChange={e => setForm({...form, grade: e.target.value})} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-blue-500 outline-none bg-slate-50 cursor-pointer">
                        <option value="">Choose grade entry...</option>
                        {["Pre-K","K","Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Grade 7","Grade 8","Grade 9","Grade 10","Grade 11","Grade 12"].map(g => <option key={g}>{g}</option>)}
                      </select>
                    </div>
                  </motion.div>
                )}
                {step === 1 && (
                  <motion.div key="step1" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}>
                    <span className="text-[10px] text-blue-500 font-bold uppercase tracking-wider font-mono">Step 2 / 3 // Contact</span>
                    <h3 className="text-xl font-bold text-slate-950 mt-1 mb-6">Contact Channels</h3>
                    <input placeholder="Parent email address" type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-blue-500 outline-none bg-slate-50" />
                  </motion.div>
                )}
                {step === 2 && (
                  <motion.div key="step2" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-6">
                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full mx-auto mb-4 grid place-items-center shadow-inner">
                      <GraduationCap className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-950">Application Logged</h3>
                    <p className="text-slate-500 text-xs mt-3 leading-relaxed">
                      Thank you for submitting, parent of <span className="font-bold text-slate-800">{form.child || "applicant"}</span>. We will review this application for <span className="font-bold text-slate-800">{form.grade}</span> and contact you at <span className="text-blue-500 font-bold font-mono">{form.email}</span> within 48 hours.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {step < 2 && (
                <div className="flex justify-between mt-8 pt-6 border-t border-slate-100">
                  <button onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0} className="px-5 py-2.5 text-xs uppercase tracking-wider font-bold text-slate-400 disabled:opacity-30">← Back</button>
                  <button onClick={() => setStep(step + 1)} className="bg-[#0f1b3d] text-white px-6 py-2.5 rounded-xl text-xs uppercase tracking-wider font-bold hover:bg-blue-600 transition duration-300">{step === 1 ? "Submit" : "Continue"} →</button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 text-center text-xs uppercase tracking-widest text-slate-400 border-t border-slate-200 bg-white">
        © Polaris Academy · Whitefield, Bengaluru // MODERN BENTO PORTAL
      </footer>
    </div>
  );
}
