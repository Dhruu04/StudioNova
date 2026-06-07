import { useEffect, useRef } from "react";
import { motion } from "motion/react";

const words = ["restaurants.", "salons.", "schools.", "studios.", "boutiques.", "agencies."];

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{ x: number; y: number; vx: number; vy: number; radius: number; alpha: number }> = [];
    const particleCount = 65;

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.3 + 0.1
      });
    }

    let mouse = { x: -1000, y: -1000 };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const onMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    // Dynamic color fetch from computed styles
    const getNeonColor = () => {
      const temp = document.createElement("div");
      temp.style.color = "var(--neon)";
      document.body.appendChild(temp);
      const computed = window.getComputedStyle(temp).color;
      document.body.removeChild(temp);
      return computed || "rgb(6, 182, 212)";
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const neonColor = getNeonColor();
      const rgbBase = neonColor.match(/\d+/g);

      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        if (mouse.x > -500) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 150) {
            const force = (150 - dist) / 150;
            p.x -= (dx / dist) * force * 1.2;
            p.y -= (dy / dist) * force * 1.2;
          }
        }

        const colorStr = rgbBase 
          ? `rgba(${rgbBase[0]}, ${rgbBase[1]}, ${rgbBase[2]}, ${p.alpha})`
          : neonColor;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = colorStr;
        ctx.fill();

        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 110) {
            const alpha = ((110 - dist) / 110) * 0.12 * p.alpha;
            const lineStr = rgbBase
              ? `rgba(${rgbBase[0]}, ${rgbBase[1]}, ${rgbBase[2]}, ${alpha})`
              : neonColor;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = lineStr;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <section id="top" className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-aurora opacity-90 transition-all duration-700" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 noise opacity-[0.03] mix-blend-overlay pointer-events-none" />

      {/* Floating Canvas Particle Layer */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Fluid Glowing Orbs */}
      <div className="absolute top-[15%] left-[-10%] h-[400px] w-[400px] rounded-full bg-[var(--neon)]/10 blur-[120px] animate-[float_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-[10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[var(--accent)]/10 blur-[150px] animate-[float_10s_ease-in-out_infinite]" style={{ animationDelay: "2s" }} />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 pt-32 pb-20 z-10 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2 text-xs font-mono text-primary shadow-glow"
        >
          <span className="h-2 w-2 rounded-full bg-neon animate-ping" />
          BOOKING Q3 2026 // 4 SLOTS REMAINING
        </motion.div>

        <h1 className="mt-8 font-display text-[clamp(2.8rem,8.5vw,8.5rem)] leading-[0.92] tracking-tighter text-foreground">
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            We build websites
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="block italic bg-gradient-to-r from-primary via-neon to-accent bg-clip-text text-transparent"
          >
            that move souls
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="block text-muted-foreground/80"
          >
            &amp; drive conversions.
          </motion.span>
        </h1>

        <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-xl text-lg text-muted-foreground leading-relaxed font-sans"
          >
            A high-end creative studio crafting premium, responsive digital frameworks for{" "}
            <span className="inline-flex items-baseline overflow-hidden h-[1.2em] align-baseline">
              <span className="flex flex-col animate-[wordcycle_12s_steps(6)_infinite] text-neon font-bold italic" style={{ animationName: "wordcycle" }}>
                {words.map((w) => (
                  <span key={w} className="h-[1.2em]">{w}</span>
                ))}
              </span>
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex items-center gap-4 flex-wrap"
          >
            <a href="#work" className="group inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-8 py-4 font-bold text-xs uppercase tracking-wider shadow-glow hover:scale-[1.03] transition duration-300">
              View Work
              <span className="transition-transform group-hover:translate-x-1 font-mono text-sm">→</span>
            </a>
            <a href="#calculator" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-8 py-4 text-xs font-bold uppercase tracking-wider text-foreground hover:bg-foreground hover:text-background transition duration-300">
              Cost Calculator
            </a>
          </motion.div>
        </div>

        {/* Bento Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden border border-border shadow-2xl backdrop-blur-md"
        >
          {[
            ["140+", "shipped sites"],
            ["98", "lighthouse avg"],
            ["12", "serviced niches"],
            ["4.9★", "client rating"],
          ].map(([k, v]) => (
            <div key={k} className="bg-card/60 p-8 flex flex-col justify-center">
              <div className="font-display text-4xl md:text-5xl text-foreground font-extrabold">{k}</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mt-2 font-mono">{v}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @keyframes wordcycle {
          0%,14% { transform: translateY(0); }
          16%,30% { transform: translateY(-1.2em); }
          32%,46% { transform: translateY(-2.4em); }
          48%,62% { transform: translateY(-3.6em); }
          64%,78% { transform: translateY(-4.8em); }
          80%,94% { transform: translateY(-6em); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
