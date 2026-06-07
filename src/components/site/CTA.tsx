import { useState } from "react";
import { motion } from "motion/react";
import { 
  Calendar, 
  ShoppingCart, 
  FileText, 
  Lock, 
  Calculator, 
  ArrowRight, 
  Sparkles,
  Info,
  Clock
} from "lucide-react";

const projectTypes = [
  { id: "landing", label: "Landing Page", basePrice: 1250, defaultPages: 1, maxPages: 3, desc: "A high-conversion single-page showcase." },
  { id: "multipage", label: "Corporate Site", basePrice: 2600, defaultPages: 5, maxPages: 15, desc: "Multi-page brand framework with CMS." },
  { id: "ecommerce", label: "DTC Storefront", basePrice: 3800, defaultPages: 5, maxPages: 25, desc: "Custom shopping experience & payment engine." },
  { id: "dashboard", label: "Custom Portal", basePrice: 5200, defaultPages: 5, maxPages: 20, desc: "SaaS dashboard, database, and user auth." }
] as const;

const availableFeatures = [
  { id: "booking", label: "Booking & Scheduling", price: 600, icon: <Calendar className="w-3.5 h-3.5" /> },
  { id: "ecommerce", label: "Cart & Subscriptions", price: 950, icon: <ShoppingCart className="w-3.5 h-3.5" /> },
  { id: "cms", label: "Blog & Content CMS", price: 750, icon: <FileText className="w-3.5 h-3.5" /> },
  { id: "auth", label: "Client Portal & Auth", price: 1200, icon: <Lock className="w-3.5 h-3.5" /> },
  { id: "animations", label: "Calculators/Tools", price: 500, icon: <Calculator className="w-3.5 h-3.5" /> }
];

const animationLevels = [
  { id: "standard", label: "Clean UI", multiplier: 1.0, desc: "Polished transitions & standard micro-interactions." },
  { id: "premium", label: "Kinetic Fluid", multiplier: 1.25, desc: "Smooth spring physics, custom entry reveals, and custom borders." },
  { id: "extreme", label: "Bespoke WebGL/3D", multiplier: 1.55, desc: "Immersive shaders, custom canvas visuals, and premium 3D features." }
] as const;

export function CTA() {
  const [projectType, setProjectType] = useState<typeof projectTypes[number]["id"]>("multipage");
  const [pages, setPages] = useState(5);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [animationLevel, setAnimationLevel] = useState<typeof animationLevels[number]["id"]>("premium");

  // Get active config info
  const typeConfig = projectTypes.find((t) => t.id === projectType) || projectTypes[1];
  const animConfig = animationLevels.find((a) => a.id === animationLevel) || animationLevels[1];

  // Adjust pages if out of range for the project type
  const handleTypeChange = (id: typeof projectTypes[number]["id"]) => {
    setProjectType(id);
    const target = projectTypes.find((t) => t.id === id);
    if (target) {
      if (pages > target.maxPages) {
        setPages(target.maxPages);
      } else if (pages < target.defaultPages) {
        setPages(target.defaultPages);
      }
    }
  };

  // Pricing math
  const basePrice = typeConfig.basePrice;
  const extraPages = Math.max(0, pages - typeConfig.defaultPages);
  const extraPagesCost = extraPages * (projectType === "landing" ? 300 : 200);
  const featuresCost = selectedFeatures.reduce((acc, fId) => {
    const feat = availableFeatures.find((f) => f.id === fId);
    return acc + (feat ? feat.price : 0);
  }, 0);

  const rawTotal = (basePrice + extraPagesCost + featuresCost) * animConfig.multiplier;
  const minPrice = Math.round((rawTotal * 0.9) / 50) * 50;
  const maxPrice = Math.round((rawTotal * 1.1) / 50) * 50;

  // Timeline math (weeks)
  const baseWeeks = projectType === "landing" ? 1.5 : projectType === "multipage" ? 3.5 : projectType === "ecommerce" ? 4.5 : 6;
  const extraWeeksPages = Math.ceil(extraPages / 5) * 0.5;
  const animWeeks = animationLevel === "standard" ? 0 : animationLevel === "premium" ? 0.5 : 1.5;
  const featuresWeeks = Math.ceil(selectedFeatures.length / 2) * 0.5;

  const minWeeks = Math.ceil(baseWeeks + extraWeeksPages + animWeeks + featuresWeeks);
  const maxWeeks = minWeeks + 1;

  // Features multi-toggle
  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  // Pre-filled email configuration link
  const featureNamesString = selectedFeatures.map((f) => {
    return availableFeatures.find((av) => av.id === f)?.label || f;
  }).join(", ") || "None";
  
  const mailSubject = encodeURIComponent("Website Quote Request - Studio Nova");
  const mailBody = encodeURIComponent(
    `Hi Studio Nova,\n\nI configured a website plan on your estimator widget and would love to get started.\n\nProject Configuration:\n- Project Type: ${typeConfig.label}\n- Pages Required: ${pages}\n- Selected Features: ${featureNamesString}\n- Experience Styling: ${animConfig.label}\n\nEstimated Quote Range: $${minPrice.toLocaleString()} - $${maxPrice.toLocaleString()}\nEstimated Timeline: ${minWeeks}-${maxWeeks} Weeks\n\nLooking forward to speaking soon!`
  );
  
  const emailLink = `mailto:hello@studionova.co?subject=${mailSubject}&body=${mailBody}`;

  return (
    <section id="calculator" className="relative px-6 md:px-10 py-32 overflow-hidden bg-background border-t border-border">
      {/* Visual background lights */}
      <div className="absolute -bottom-20 left-1/3 w-[600px] h-[350px] bg-primary/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-neon mb-4">
            § Interactive Estimator
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-foreground">
            Estimate your <span className="italic text-gradient">project scope</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-sm leading-relaxed">
            Configure your site goals, pages, and interactive assets below. Get an instant ballpark quote and timeline, then export directly to our consulting team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Configurator Controls */}
          <div className="lg:col-span-7 space-y-10">
            {/* Step 1: Project Type */}
            <div className="space-y-4">
              <label className="block font-mono text-xs text-muted-foreground uppercase tracking-widest">
                01 / Project Structure
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projectTypes.map((t) => {
                  const isSelected = projectType === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => handleTypeChange(t.id)}
                      className={`text-left p-5 rounded-2xl border transition-all duration-300 ${
                        isSelected
                          ? "bg-card border-primary shadow-lg shadow-primary/10"
                          : "bg-card/40 border-border hover:bg-card hover:border-border"
                      }`}
                    >
                      <h4 className={`font-display text-lg ${isSelected ? "text-primary" : "text-foreground"}`}>
                        {t.label}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                        {t.desc}
                      </p>
                      <span className="inline-block mt-3 font-mono text-[10px] text-muted-foreground/80 uppercase">
                        From ${t.basePrice.toLocaleString()} • Includes {t.defaultPages} {t.defaultPages === 1 ? "page" : "pages"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Page Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-baseline">
                <label className="block font-mono text-xs text-muted-foreground uppercase tracking-widest">
                  02 / Total Page Count
                </label>
                <div className="font-display text-xl text-foreground font-bold">
                  {pages} <span className="text-xs text-muted-foreground font-mono">PAGES</span>
                </div>
              </div>
              <div className="relative pt-2">
                <input
                  type="range"
                  min={typeConfig.defaultPages}
                  max={typeConfig.maxPages}
                  value={pages}
                  onChange={(e) => setPages(Number(e.target.value))}
                  className="w-full h-1 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-[10px] font-mono text-muted-foreground mt-2">
                  <span>MIN: {typeConfig.defaultPages}</span>
                  <span>MAX: {typeConfig.maxPages}</span>
                </div>
              </div>
            </div>

            {/* Step 3: Features */}
            <div className="space-y-4">
              <label className="block font-mono text-xs text-muted-foreground uppercase tracking-widest">
                03 / Premium Features
              </label>
              <div className="flex flex-wrap gap-3">
                {availableFeatures.map((feat) => {
                  const isSelected = selectedFeatures.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-medium tracking-wide transition-all ${
                        isSelected
                          ? "bg-primary/10 border-primary text-primary shadow-sm"
                          : "bg-card border-border text-foreground hover:border-primary/40"
                      }`}
                    >
                      <span className="shrink-0">{feat.icon}</span>
                      <span>{feat.label}</span>
                      <span className="font-mono text-[10px] opacity-75">
                        (+${feat.price})
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Styling Level */}
            <div className="space-y-4">
              <label className="block font-mono text-xs text-muted-foreground uppercase tracking-widest">
                04 / Experience Design & Animations
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {animationLevels.map((lvl) => {
                  const isSelected = animationLevel === lvl.id;
                  return (
                    <button
                      key={lvl.id}
                      onClick={() => setAnimationLevel(lvl.id)}
                      className={`text-left p-4 rounded-xl border transition ${
                        isSelected
                          ? "bg-primary/5 border-primary text-foreground"
                          : "bg-card/40 border-border text-muted-foreground hover:bg-card"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className={`font-mono text-xs font-bold ${isSelected ? "text-primary" : "text-foreground"}`}>
                          {lvl.label}
                        </span>
                        <span className="font-mono text-[10px] text-muted-foreground/80">
                          x{lvl.multiplier.toFixed(2)}
                        </span>
                      </div>
                      <p className="text-[10px] text-muted-foreground mt-2 leading-relaxed">
                        {lvl.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Cost Estimate Output Card */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 bg-card border border-border rounded-[2rem] p-8 md:p-10 shadow-2xl flex flex-col justify-between h-full min-h-[500px]">
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-border">
                  <div className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase flex items-center gap-1">
                    <Info className="w-3.5 h-3.5" /> ESTIMATE SPEC SHEET
                  </div>
                  <span className="h-2 w-2 rounded-full bg-neon animate-pulse" />
                </div>

                {/* Estimate details list */}
                <div className="space-y-4 py-8 text-xs font-mono">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">PROJECT BASE</span>
                    <span className="text-foreground text-right font-bold">{typeConfig.label}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">ESTIMATED PAGES</span>
                    <span className="text-foreground text-right font-bold">{pages}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">DESIGN EXPERIENCE</span>
                    <span className="text-foreground text-right font-bold">{animConfig.label}</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-muted-foreground">ADDITIONAL MODULES</span>
                    <span className="text-foreground text-right font-bold max-w-[200px] truncate">
                      {featureNamesString}
                    </span>
                  </div>
                </div>

                <div className="border-t border-border pt-8 space-y-6">
                  <div>
                    <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase block">
                      Estimated Cost Range
                    </span>
                    <div className="font-display text-4xl md:text-5xl font-black text-foreground mt-2 flex items-baseline gap-1">
                      ${minPrice.toLocaleString()}
                      <span className="text-lg text-muted-foreground font-mono font-normal"> to </span>
                      ${maxPrice.toLocaleString()}
                    </div>
                    <span className="font-mono text-[9px] text-primary mt-1 block">
                      *Taxes & hosting costs not included
                    </span>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase block flex items-center gap-1">
                      <Clock className="w-3 h-3" /> Estimated Delivery
                    </span>
                    <div className="font-display text-2xl font-bold text-foreground mt-1">
                      {minWeeks} - {maxWeeks} Weeks
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href={emailLink}
                  className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-primary text-primary-foreground px-8 py-4 font-bold text-xs uppercase tracking-wider shadow-glow hover:scale-[1.02] transition duration-300 text-center cursor-pointer"
                >
                  Send Configuration
                  <ArrowRight className="w-4 h-4 font-bold" />
                </a>
                <p className="text-[10px] text-muted-foreground text-center mt-3 font-mono">
                  Calculations will open in your default mail app
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
