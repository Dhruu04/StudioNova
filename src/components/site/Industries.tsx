import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { 
  Building2, 
  Dumbbell, 
  Sparkles, 
  Palette, 
  ShoppingBag, 
  Utensils, 
  Activity, 
  GraduationCap,
  Calculator,
  Eye,
  CheckCircle2,
  Terminal
} from "lucide-react";

import realestateHero from "@/assets/images/realestate_hero.png";
import fitnessHero from "@/assets/images/fitness_hero.png";
import salonHero from "@/assets/images/salon_hero.png";
import galleryHero from "@/assets/images/gallery_hero.png";
import ecommerceHero from "@/assets/images/ecommerce_hero.png";
import restaurantHero from "@/assets/images/restaurant_hero.png";
import healthHero from "@/assets/images/health_hero.png";
import educationHero from "@/assets/images/education_hero.png";

const industries = [
  {
    tag: "01 / Real Estate",
    title: "Premium Living",
    desc: "Interactive mortgage calculator, maps, and sleek glass design.",
    theme: "Glassmorphism",
    image: realestateHero,
    to: "/demo/realestate",
    span: "lg:col-span-4 md:col-span-6",
    cardClass: "bg-card/70 border-border hover:border-primary/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] rounded-[2rem]",
    badgeClass: "bg-primary/10 text-primary border-primary/20",
    textClass: "text-foreground",
    descClass: "text-muted-foreground",
    overlay: "bg-gradient-to-t from-background via-background/40 to-transparent",
    icon: Building2,
    interactiveNode: (
      <div className="absolute right-6 top-6 bg-card border border-border rounded-xl p-3 hidden sm:block max-w-[160px] text-[10px] font-mono shadow-xl animate-pulse">
        <div className="text-primary font-bold mb-1 flex items-center gap-1">
          <Calculator className="w-3 h-3" /> CALCULATOR
        </div>
        <div className="text-muted-foreground">Estimated Payment</div>
        <div className="text-foreground text-xs font-bold">$2,840/mo</div>
      </div>
    )
  },
  {
    tag: "02 / Fitness & Wellness",
    title: "Forge Athletic",
    desc: "Cyberpunk kinetic schedule scheduler, membership intakes, status grids.",
    theme: "Cyberpunk",
    image: fitnessHero,
    to: "/demo/fitness",
    span: "lg:col-span-2 md:col-span-3",
    cardClass: "bg-card/70 border-border hover:border-primary hover:shadow-[0_0_30px_rgba(163,230,53,0.15)] rounded-none relative after:absolute after:bottom-0 after:right-0 after:w-4 after:h-4 after:bg-primary after:clip-path-triangle",
    badgeClass: "bg-primary/10 text-primary border-primary/20 font-mono tracking-widest",
    textClass: "text-foreground font-mono",
    descClass: "text-muted-foreground font-sans",
    overlay: "bg-gradient-to-t from-background via-background/60 to-transparent",
    icon: Dumbbell,
    interactiveNode: (
      <div className="absolute top-4 right-4 bg-card border border-border px-2 py-1 font-mono text-[9px] text-primary uppercase tracking-tighter flex items-center gap-1">
        <Terminal className="w-2.5 h-2.5" /> STATUS_ACTIVE
      </div>
    )
  },
  {
    tag: "03 / Beauty & Style",
    title: "Oak & Mane",
    desc: "Pastel colors, soft 3D claymorphic containers, cost calculator.",
    theme: "Claymorphism",
    image: salonHero,
    to: "/demo/salon",
    span: "lg:col-span-2 md:col-span-3",
    cardClass: "bg-card/70 border-border hover:border-primary hover:shadow-glow rounded-[2.5rem]",
    badgeClass: "bg-primary/10 text-primary border-primary/20",
    textClass: "text-foreground",
    descClass: "text-muted-foreground",
    overlay: "bg-gradient-to-t from-background/40 via-background/80 to-transparent",
    icon: Sparkles,
    interactiveNode: null
  },
  {
    tag: "04 / Culture & Events",
    title: "L'Espace Art",
    desc: "Neubrutalist bold typography, black outlines, ticketing inquirer.",
    theme: "Neubrutalism",
    image: galleryHero,
    to: "/demo/gallery",
    span: "lg:col-span-2 md:col-span-3",
    cardClass: "bg-card text-foreground border-4 border-foreground hover:shadow-[8px_8px_0px_var(--foreground)] transition-all hover:-translate-x-1 hover:-translate-y-1 rounded-none",
    badgeClass: "bg-primary text-primary-foreground border-2 border-foreground font-black uppercase",
    textClass: "text-foreground font-black",
    descClass: "text-muted-foreground font-medium",
    overlay: "bg-gradient-to-t from-background/20 to-transparent",
    icon: Palette,
    interactiveNode: (
      <div className="absolute right-4 top-4 bg-accent text-accent-foreground border-2 border-foreground px-2 py-0.5 text-[9px] font-black tracking-widest rotate-6 flex items-center gap-1">
        <Eye className="w-3 h-3" /> SHOW
      </div>
    )
  },
  {
    tag: "05 / Fine Commerce",
    title: "Drift Goods",
    desc: "Minimalist warm layout, elegant serif highlights, checkout cart logic.",
    theme: "Warm Minimalist",
    image: ecommerceHero,
    to: "/demo/ecommerce",
    span: "lg:col-span-2 md:col-span-3",
    cardClass: "bg-card/70 border-border hover:border-primary hover:shadow-lg rounded-3xl",
    badgeClass: "bg-primary/10 text-primary border-primary/20 font-serif italic",
    textClass: "text-foreground font-serif",
    descClass: "text-muted-foreground font-sans text-xs",
    overlay: "bg-gradient-to-t from-background/40 via-background/80 to-transparent",
    icon: ShoppingBag,
    interactiveNode: null
  },
  {
    tag: "06 / Fine Dining",
    title: "Maison Lumière",
    desc: "Luxury forest green and gold theme, dynamic reservation wizard.",
    theme: "Luxury Editorial",
    image: restaurantHero,
    to: "/demo/restaurant",
    span: "lg:col-span-4 md:col-span-6",
    cardClass: "bg-card/70 border-border hover:border-primary hover:shadow-[0_0_30px_rgba(201,168,76,0.15)] rounded-[2rem]",
    badgeClass: "bg-primary/10 text-primary border-primary/20 font-serif italic",
    textClass: "text-foreground font-serif",
    descClass: "text-muted-foreground",
    overlay: "bg-gradient-to-t from-background via-background/80 to-transparent",
    icon: Utensils,
    interactiveNode: (
      <div className="absolute right-6 top-6 bg-card border border-border rounded-xl p-3 hidden sm:block max-w-[180px] text-[10px] font-mono shadow-xl">
        <div className="text-primary font-bold mb-1 flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3" /> RESERVATION_OK
        </div>
        <div className="text-muted-foreground">Table for 2 - 8:00 PM</div>
      </div>
    )
  },
  {
    tag: "07 / Health & Care",
    title: "Atrium Health",
    desc: "Soft clinical blue and teal gradients, secure health screening workflow.",
    theme: "Trust-UI",
    image: healthHero,
    to: "/demo/health",
    span: "lg:col-span-3 md:col-span-3",
    cardClass: "bg-card/70 border-border hover:border-primary hover:shadow-glow rounded-[2rem]",
    badgeClass: "bg-primary/10 text-primary border-primary/20",
    textClass: "text-foreground",
    descClass: "text-muted-foreground",
    overlay: "bg-gradient-to-t from-background/40 via-background/80 to-transparent",
    icon: Activity,
    interactiveNode: null
  },
  {
    tag: "08 / Future Learning",
    title: "Polaris Academy",
    desc: "SaaS Bento design, multi-stage course enrollment module, dashboard layouts.",
    theme: "Bento SaaS",
    image: educationHero,
    to: "/demo/education",
    span: "lg:col-span-3 md:col-span-3",
    cardClass: "bg-card/70 border-border hover:border-primary hover:shadow-glow rounded-[2rem]",
    badgeClass: "bg-primary/10 text-primary border-primary/20",
    textClass: "text-foreground",
    descClass: "text-muted-foreground",
    overlay: "bg-gradient-to-t from-background/40 via-background/80 to-transparent",
    icon: GraduationCap,
    interactiveNode: (
      <div className="absolute right-6 top-6 flex items-center gap-2 bg-card rounded-full px-3 py-1 border border-border text-[9px] font-mono text-primary shadow-sm">
        <span className="h-1.5 w-1.5 rounded-full bg-neon animate-ping" />
        BENTO ENGINE V1.2
      </div>
    )
  }
];

export function Industries() {
  return (
    <section id="industries" className="relative py-32 px-6 md:px-10 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-r from-primary/5 via-neon/5 to-accent/5 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-neon mb-4">
              § Industries — interactive live templates
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-foreground">
              Tap any tile to <span className="italic text-gradient">tour the theme</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground leading-relaxed text-sm">
            We built every demo using a unique visual framework—from soft Claymorphism to bold Neubrutalism. Open any card to experience live interactions: checkout carts, calculators, scheduling intake flows, and real-time validation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {industries.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                className={`${it.span} flex`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.05, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  to={it.to}
                  className={`group relative flex flex-col justify-between overflow-hidden border p-8 w-full min-h-[360px] cursor-pointer transition-all duration-500 ${it.cardClass}`}
                >
                  {/* Hero preview background (zooms on hover) */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                      src={it.image}
                      alt={it.title}
                      className="w-full h-full object-cover object-top opacity-20 group-hover:opacity-45 scale-[1.03] group-hover:scale-110 transition-all duration-700 ease-out filter brightness-[0.7]"
                    />
                    <div className={`absolute inset-0 ${it.overlay} z-10`} />
                  </div>

                  {/* Top Bar */}
                  <div className="relative z-20 flex items-start justify-between">
                    <div className="flex flex-col gap-2">
                      <span className="font-mono text-[10px] tracking-widest text-neon uppercase">
                        {it.tag}
                      </span>
                      <span className={`inline-flex rounded-full border px-2.5 py-0.5 text-[9px] uppercase font-bold tracking-wider ${it.badgeClass}`}>
                        {it.theme}
                      </span>
                    </div>
                    {it.interactiveNode}
                  </div>

                  {/* Bottom details */}
                  <div className="relative z-20 mt-auto pt-10">
                    <div className="text-primary p-2 border border-border bg-card/80 rounded-xl w-10 h-10 flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className={`font-display text-3xl mb-2 transition-transform duration-300 group-hover:translate-x-1 ${it.textClass}`}>
                      {it.title}
                    </h3>
                    <p className={`text-sm leading-relaxed mb-5 ${it.descClass}`}>
                      {it.desc}
                    </p>
                    <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wide text-neon group-hover:text-foreground transition-colors">
                      Explore Interface 
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
