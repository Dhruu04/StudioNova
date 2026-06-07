import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { Sliders, Sparkles } from "lucide-react";

export function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50); // 0 to 100
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const [containerWidth, setContainerWidth] = useState(1080);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    // Direct DOM styling update for zero-latency dragging
    containerRef.current.style.setProperty('--slider-pos', `${percentage}%`);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging.current) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    if (isDragging.current && containerRef.current) {
      const currentPos = containerRef.current.style.getPropertyValue('--slider-pos');
      if (currentPos) {
        const val = parseFloat(currentPos);
        setSliderPosition(isNaN(val) ? 50 : val);
      }
    }
    isDragging.current = false;
    document.body.style.userSelect = "";
  };

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.getBoundingClientRect().width);
      }
    };

    updateWidth();

    const onMouseMove = (e: MouseEvent) => handleMouseMove(e);
    const onTouchMove = (e: TouchEvent) => handleTouchMove(e);
    const onMouseUp = () => handleMouseUp();

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("resize", updateWidth);

    const observer = new ResizeObserver(updateWidth);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("resize", updateWidth);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative py-32 px-6 md:px-10 border-t border-border overflow-hidden">
      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-neon mb-4">
              § Style Comparison — Side by Side
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-foreground">
              Contrast the <span className="italic text-gradient">aesthetic shift</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground leading-relaxed text-sm">
            Drag the slider to see how a generic basic layout (right) compares to our premium, theme-adaptive modular design system (left) in real-time.
          </p>
        </div>

        {/* Slider Box */}
        <div 
          ref={containerRef}
          className="relative w-full aspect-[16/10] md:aspect-[21/9] rounded-[2rem] border border-border shadow-2xl overflow-hidden select-none bg-card"
          style={{ "--slider-pos": `${sliderPosition}%` } as any}
          data-cursor="pointer"
        >
          
          {/* RIGHT SIDE: BEFORE (Boring plain markup) */}
          <div className="absolute inset-0 w-full h-full bg-[#f8fafc] text-slate-800 p-8 md:p-16 flex items-center justify-center font-sans">
            <div className="max-w-lg w-full border border-slate-300 bg-white p-6 shadow-sm rounded-none text-left">
              <span className="text-[10px] text-slate-400 font-bold uppercase font-mono tracking-widest">
                DEFAULT SYSTEM TEMPLATE
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-slate-900 mt-2 font-sans border-b border-slate-200 pb-3">
                Atrium Health Center
              </h3>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed font-sans">
                Our clinic offers various medical services to patients. We ensure that you receive standard care from general practitioners and pediatricians.
              </p>
              <div className="mt-6 flex justify-between items-center text-xs font-mono border-t border-slate-100 pt-4">
                <span className="text-slate-400">STAFF: 12 MEMBERS</span>
                <button className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-4 py-2 rounded-none text-xs uppercase font-sans">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>

          {/* LEFT SIDE: AFTER (Premium Theme Adaptive Style) */}
          <div 
            className="absolute inset-y-0 left-0 h-full overflow-hidden pointer-events-none"
            style={{ width: "var(--slider-pos, 50%)" }}
          >
            {/* Inner child must maintain the parent container's width to avoid compression warping */}
            <div 
              className="absolute inset-0 h-full p-8 md:p-16 flex items-center justify-center bg-background text-foreground transition-colors duration-700"
              style={{ width: containerWidth }}
            >
              
              {/* Premium card */}
              <div 
                className="max-w-lg w-full border border-border bg-card/60 backdrop-blur-xl p-8 shadow-2xl relative overflow-hidden transition-all duration-300 text-left"
                style={{ borderRadius: "var(--radius)" }}
              >
                {/* Accent lighting glow */}
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[var(--neon)]/15 blur-[60px] pointer-events-none" />
                
                <div className="flex justify-between items-start">
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-2.5 py-0.5 text-[9px] font-mono text-primary font-bold shadow-sm">
                      <Sparkles className="w-2.5 h-2.5 text-neon" /> CLINIC OFFICE // COHORT V2
                    </span>
                    <h3 className="text-3xl mt-4 leading-[0.95] text-foreground font-display font-extrabold">
                      Atrium Health
                    </h3>
                  </div>
                  <span className="h-2 w-2 rounded-full bg-neon animate-pulse shrink-0" />
                </div>

                <p className="text-sm text-muted-foreground mt-4 leading-relaxed font-sans">
                  Our boutique medical space pairs inquiry-driven diagnostic labs with high-end customer care. Curated for physical and digital wellness.
                </p>

                <div className="mt-8 pt-4 border-t border-border flex justify-between items-center text-xs font-mono">
                  <span className="text-muted-foreground/80">STAFF OVERVIEW // ACTIVE</span>
                  <button 
                    className="bg-primary text-primary-foreground font-bold px-6 py-3 uppercase tracking-wider text-[10px] hover:scale-[1.02] shadow-glow transition duration-300"
                    style={{ borderRadius: "calc(var(--radius) / 2)" }}
                  >
                    Deploy Appointment
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* SLIDER DIVIDER DRAG HANDLE */}
          <div 
            className="absolute inset-y-0 w-1 bg-primary cursor-col-resize z-30"
            style={{ left: "var(--slider-pos, 50%)" }}
            onMouseDown={(e) => {
              isDragging.current = true;
              document.body.style.userSelect = "none";
              e.preventDefault();
            }}
            onTouchStart={(e) => {
              isDragging.current = true;
              e.preventDefault();
            }}
          >
            {/* Floating drag handle button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground border-2 border-white/20 flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition pointer-events-none">
              <Sliders className="w-4 h-4 rotate-90" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
