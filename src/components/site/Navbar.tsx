import { motion } from "motion/react";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50 px-6 md:px-10 py-5"
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between rounded-full border border-border bg-card/60 backdrop-blur-xl px-5 py-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] hover:border-primary/20 transition-all duration-300">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="h-2.5 w-2.5 rounded-full bg-neon shadow-[0_0_12px_var(--neon)] group-hover:scale-110 transition" />
          <span className="font-display text-xl tracking-tight text-foreground group-hover:text-neon transition">Studio Nova</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-mono text-muted-foreground">
          <a href="#work" className="hover:text-foreground transition">Work</a>
          <a href="#industries" className="hover:text-foreground transition">Industries</a>
          <a href="#process" className="hover:text-foreground transition">Process</a>
          <a href="#calculator" className="hover:text-foreground transition">Calculator</a>
        </nav>
        <a
          href="#contact"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-xs uppercase tracking-wider font-bold shadow-sm hover:scale-[1.03] transition-all"
        >
          <span className="relative z-10">Start Project</span>
          <span className="relative z-10">→</span>
          <span className="absolute inset-0 bg-gradient-to-r from-neon to-primary opacity-0 group-hover:opacity-100 transition duration-500" />
        </a>
      </div>
    </motion.header>
  );
}
