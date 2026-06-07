import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Zap, ArrowUpRight, Monitor, Smartphone } from "lucide-react";

const projects = [
  {
    name: "Atrium Realty",
    kind: "Real Estate · Glassmorphic",
    blurb: "Translucent layers, neon flows, mortgage calculator, property map sheet.",
    to: "/demo/realestate",
    palette: ["#0891b2", "#1e293b", "#0f172a"],
    year: "26",
  },
  {
    name: "Forge Athletic",
    kind: "Fitness · Cyberpunk",
    blurb: "Kinetic green accents, grid-bg scanlines, class schedule reservation logs.",
    to: "/demo/fitness",
    palette: ["#84cc16", "#09090b", "#18181b"],
    year: "26",
  },
  {
    name: "Oak & Mane",
    kind: "Salon · Claymorphic",
    blurb: "Soft pastel gradients, 3D bubble panels, interactive styling calculator.",
    to: "/demo/salon",
    palette: ["#ec4899", "#fdf2f8", "#f472b6"],
    year: "26",
  },
  {
    name: "L'Espace Art",
    kind: "Gallery · Neubrutalist",
    blurb: "Stark black borders, offset card drop shadows, ticketing request form.",
    to: "/demo/gallery",
    palette: ["#000000", "#fef08a", "#fbe9e7"],
    year: "26",
  },
  {
    name: "Drift Goods",
    kind: "E-commerce · Warm Minimalist",
    blurb: "Elegant serif typography, clean layouts, slide-out drawer cart system.",
    to: "/demo/ecommerce",
    palette: ["#78716c", "#faf6f0", "#e7e5e4"],
    year: "26",
  },
  {
    name: "Maison Lumière",
    kind: "Restaurant · Luxury Gold",
    blurb: "Deep forest background, gold borders, step-by-step reservation wizard.",
    to: "/demo/restaurant",
    palette: ["#c9a84c", "#0c1f15", "#050e0a"],
    year: "26",
  },
  {
    name: "Atrium Health",
    kind: "Clinics · Clinical Clean",
    blurb: "Soft blue branding, trust metrics, medical intake appointment wizard.",
    to: "/demo/health",
    palette: ["#0ea5e9", "#0f172a", "#1e293b"],
    year: "26",
  },
  {
    name: "Polaris Academy",
    kind: "Education · Bento SaaS",
    blurb: "Bento dashboard layouts, active animations, course enrollment logs.",
    to: "/demo/education",
    palette: ["#8b5cf6", "#020617", "#0f172a"],
    year: "26",
  },
];

export function Work() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");
  const selectedProject = projects[activeIdx];

  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Set initial width
    setContainerWidth(containerRef.current.getBoundingClientRect().width);

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });
    
    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, [device]);

  const currentWidth = containerWidth || (device === "desktop" ? 660 : 270);

  return (
    <section id="work" className="relative py-32 px-6 md:px-10 overflow-hidden bg-card/10 border-t border-b border-border">
      {/* Dynamic Background Glow based on project palette */}
      <div 
        className="absolute right-0 top-1/4 w-[500px] h-[500px] rounded-full blur-[160px] opacity-10 transition-all duration-1000 pointer-events-none"
        style={{ backgroundColor: selectedProject.palette[0] }}
      />

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-neon mb-4">
              § Selected Work — Interactive Preview
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-foreground">
              Digital portfolio <br />
              <span className="italic text-gradient">
                fully functional
              </span>
            </h2>
          </div>
          <div className="max-w-md text-muted-foreground text-sm leading-relaxed">
            Click any project to load the fully functional live demo directly into the browser frame. Interact with inputs, submit test data, or switch display formats.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Project Selection List */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-[10px] font-mono tracking-widest text-muted-foreground/60 uppercase mb-4">
              CHOOSE A LIVE PREVIEW
            </div>
            {projects.map((p, i) => {
              const isActive = activeIdx === i;
              return (
                <button
                  key={p.name}
                  onClick={() => setActiveIdx(i)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 group ${
                    isActive
                      ? "bg-card border-border shadow-lg shadow-black/10"
                      : "bg-transparent border-transparent hover:bg-card/30 hover:border-border/40"
                  }`}
                >
                  <div className={`font-mono text-xs mt-1 transition-colors ${
                    isActive ? "text-neon" : "text-muted-foreground/60 group-hover:text-muted-foreground"
                  }`}>
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className={`font-display text-xl md:text-2xl transition-all ${
                        isActive ? "text-foreground font-bold" : "text-muted-foreground group-hover:text-foreground"
                      }`}>
                        {p.name}
                      </h3>
                      <span className="font-mono text-[10px] text-muted-foreground/60">
                        ’{p.year}
                      </span>
                    </div>

                    <div className={`font-mono text-[10px] uppercase mt-0.5 tracking-wider ${
                      isActive ? "text-primary font-bold" : "text-muted-foreground/60"
                    }`}>
                      {p.kind}
                    </div>

                    <p className={`text-xs mt-2 leading-relaxed transition-all ${
                      isActive ? "text-foreground" : "text-muted-foreground/75 h-0 overflow-hidden opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mt-2"
                    }`}>
                      {p.blurb}
                    </p>

                    <div className="mt-3 flex items-center gap-1">
                      {p.palette.map((c) => (
                        <span 
                          key={c} 
                          className="h-3 w-3 rounded-full border border-border" 
                          style={{ backgroundColor: c }} 
                        />
                      ))}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive CSS Frame Showcase */}
          <div className="lg:col-span-7 flex flex-col items-center">
            {/* Device Switcher Header */}
            <div className="w-full flex items-center justify-between mb-6 bg-card border border-border rounded-full p-1.5 backdrop-blur max-w-sm">
              <span className="text-[10px] font-mono font-bold text-muted-foreground ml-4">
                DEVICE VIEWPORT
              </span>
              <div className="flex gap-1">
                <button
                  onClick={() => setDevice("desktop")}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider transition flex items-center gap-1.5 ${
                    device === "desktop"
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" /> Macbook
                </button>
                <button
                  onClick={() => setDevice("mobile")}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider transition flex items-center gap-1.5 ${
                    device === "mobile"
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" /> iPhone 15
                </button>
              </div>
            </div>

            {/* Device Rendering Box */}
            <div className="w-full flex justify-center items-center min-h-[550px] relative">
              <AnimatePresence mode="wait">
                {device === "desktop" ? (
                  <motion.div
                    key="desktop"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="w-full max-w-[680px]"
                  >
                    {/* Macbook CSS Frame */}
                    <div className="relative shadow-2xl shadow-black/30">
                      {/* Bezel Screen Container */}
                      <div className="bg-zinc-900 border-[10px] border-zinc-950 rounded-t-2xl relative overflow-hidden flex flex-col">
                        {/* Top bar notch camera */}
                        <div className="absolute top-0 inset-x-0 h-4 bg-zinc-950 flex items-center justify-center z-20">
                          <div className="h-1.5 w-1.5 rounded-full bg-zinc-800" />
                        </div>
                        {/* Address Bar */}
                        <div className="bg-zinc-950 border-b border-white/[0.04] px-4 py-1.5 flex items-center justify-between text-[10px] font-mono text-zinc-500 z-10 select-none">
                          <div className="flex gap-1">
                            <span className="w-2 h-2 rounded-full bg-rose-500/60" />
                            <span className="w-2 h-2 rounded-full bg-amber-500/60" />
                            <span className="w-2 h-2 rounded-full bg-emerald-500/60" />
                          </div>
                          <div className="bg-zinc-900/60 rounded px-16 py-0.5 border border-white/[0.04] text-center w-80 truncate text-zinc-400">
                            nova.studio{selectedProject.to}
                          </div>
                          <div className="w-8 text-right flex items-center justify-end text-primary">
                            <Zap className="w-3 h-3 fill-current" />
                          </div>
                        </div>
                        {/* iframe Frame (with Resize Observer and responsive Scaling) */}
                        <div 
                          ref={containerRef}
                          className="w-full relative overflow-hidden bg-black"
                          style={{ height: `${currentWidth * (800 / 1280)}px` }}
                        >
                          <iframe
                            src={selectedProject.to}
                            title={selectedProject.name}
                            className="absolute top-0 left-0 border-none bg-black select-none origin-top-left"
                            style={{
                              width: "1280px",
                              height: "800px",
                              transform: `scale(${currentWidth / 1280})`,
                            }}
                          />
                        </div>
                      </div>
                      {/* Macbook Bottom Base */}
                      <div className="bg-zinc-800 h-3 rounded-b-xl border-t border-zinc-700/50 flex items-center justify-center relative shadow-xl">
                        <div className="absolute top-0 w-20 h-1 bg-zinc-950 rounded-b-sm" />
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="mobile"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="w-full max-w-[290px]"
                  >
                    {/* iPhone 15 CSS Frame */}
                    <div className="relative shadow-2xl shadow-black/30 w-full rounded-[2.5rem] bg-zinc-900 border-[10px] border-zinc-950 overflow-hidden flex flex-col">
                      {/* Dynamic Island */}
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-4 bg-zinc-950 rounded-full z-20 flex items-center justify-between px-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500/40" />
                        <span className="w-1 h-1 rounded-full bg-[#73ffb8]/30" />
                      </div>
                      
                      {/* Status Bar */}
                      <div className="bg-zinc-950 h-8 pt-4 px-6 flex items-center justify-between text-[9px] font-mono text-muted-foreground/60 select-none z-10">
                        <span>9:41</span>
                        <div className="flex items-center gap-1">
                          <span>5G</span>
                          <div className="w-4 h-2 border border-slate-500 rounded-sm p-0.5 flex items-center">
                            <div className="bg-slate-400 h-full w-full rounded-2xs" />
                          </div>
                        </div>
                      </div>

                      {/* Address Bar */}
                      <div className="bg-zinc-950 border-b border-white/[0.04] px-4 py-1 flex items-center justify-center text-[8px] font-mono text-zinc-500 z-10 select-none">
                        <div className="bg-zinc-900/60 rounded py-0.5 px-6 border border-white/[0.04] text-center w-full truncate text-zinc-400">
                          nova.studio{selectedProject.to}
                        </div>
                      </div>

                      {/* iframe Wrapper (with Resize Observer and responsive Scaling) */}
                      <div 
                        ref={containerRef}
                        className="w-full relative overflow-hidden bg-black"
                        style={{ height: `${currentWidth * (760 / 375)}px` }}
                      >
                        <iframe
                          src={selectedProject.to}
                          title={selectedProject.name}
                          className="absolute top-0 left-0 border-none bg-black select-none origin-top-left"
                          style={{
                            width: "375px",
                            height: "760px",
                            transform: `scale(${currentWidth / 375})`,
                          }}
                        />
                      </div>
                      
                      {/* Home Indicator */}
                      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/40 rounded-full z-20" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* View Fullscreen CTA */}
            <a
              href={selectedProject.to}
              className="mt-6 inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-neon hover:text-foreground transition"
            >
              Open Fullscreen Site
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
