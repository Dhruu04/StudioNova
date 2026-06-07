import { motion } from "motion/react";
import { Compass, Palette, Code, CheckCircle } from "lucide-react";

const steps = [
  { n: "01", t: "Discover", d: "We listen, audit, and map your customer journey. Workshops in week one.", icon: Compass },
  { n: "02", t: "Design", d: "Two divergent directions, then sharpen. Figma prototypes you can click.", icon: Palette },
  { n: "03", t: "Build", d: "Component-first development. Animations, CMS, and integrations.", icon: Code },
  { n: "04", t: "Launch", d: "QA across devices, SEO setup, analytics. We ship, then we measure.", icon: CheckCircle },
];

export function Process() {
  return (
    <section id="process" className="relative py-32 px-6 md:px-10 border-t border-border">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-7xl">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">§ Process</div>
        <h2 className="font-display text-5xl md:text-7xl leading-none mb-16 text-foreground">
          Four weeks <span className="italic text-gradient">from kickoff to live.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-border border border-border rounded-3xl overflow-hidden shadow-xl">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-8 min-h-[280px] flex flex-col justify-between group hover:bg-accent/5 transition duration-300"
              >
                <div className="flex justify-between items-start">
                  <div className="font-mono text-sm text-neon font-bold">/{s.n}</div>
                  <div className="text-primary w-8 h-8 flex items-center justify-center border border-border bg-background/50 rounded-lg group-hover:scale-110 transition duration-300">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-3xl mb-3 text-foreground group-hover:translate-x-1 transition duration-300">{s.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
