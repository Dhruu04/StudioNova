import { useState, ReactNode, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Palette, 
  Building2, 
  Zap, 
  Sparkles, 
  ShoppingBag, 
  Utensils, 
  Heart, 
  GraduationCap, 
  Radio, 
  Leaf, 
  Snowflake,
  Tv,
  Flame,
  X 
} from "lucide-react";

export interface Theme {
  id: string;
  name: string;
  icon: ReactNode;
  color: string;
  desc: string;
  mode: "light" | "dark";
  palette: string[]; // [bg, fg, neon]
}

export const themes: Theme[] = [
  // Dark mode systems
  { id: "theme-glassmorphism", name: "Glassmorphism", icon: <Building2 className="w-4 h-4" />, color: "#06b6d4", desc: "Translucent layers, cyan neon gradients", mode: "dark", palette: ["#0f172a", "#f8fafc", "#06b6d4"] },
  { id: "theme-cyberpunk", name: "Cyberpunk", icon: <Zap className="w-4 h-4" />, color: "#84cc16", desc: "High-contrast dark grid, neon green accents", mode: "dark", palette: ["#050505", "#f4f4f5", "#84cc16"] },
  { id: "theme-luxury", name: "Luxury Gold", icon: <Utensils className="w-4 h-4" />, color: "#c9a84c", desc: "Forest green editorial, gold borders", mode: "dark", palette: ["#081a11", "#f4ebe1", "#c9a84c"] },
  { id: "theme-bento", name: "Bento SaaS", icon: <GraduationCap className="w-4 h-4" />, color: "#a855f7", desc: "Modular dashboard bento, deep purple glow", mode: "dark", palette: ["#05011a", "#f3eeff", "#a855f7"] },
  { id: "theme-synthwave", name: "Retro Synthwave", icon: <Radio className="w-4 h-4" />, color: "#ff007f", desc: "Deep violet grid, hot pink neon highlights", mode: "dark", palette: ["#12092e", "#f8f8fa", "#ff007f"] },
  { id: "theme-sunset", name: "Hyper-Neon Sunset", icon: <Flame className="w-4 h-4" />, color: "#f97316", desc: "Deep violet-indigo, warm orange elements", mode: "dark", palette: ["#0d061c", "#fff7ed", "#f97316"] },
  
  // Light mode systems
  { id: "theme-claymorphism", name: "Claymorphism", icon: <Sparkles className="w-4 h-4" />, color: "#f43f5e", desc: "Soft-UI 3D bubble grids, rose pastels", mode: "light", palette: ["#fff5f5", "#4c0519", "#f43f5e"] },
  { id: "theme-neubrutalism", name: "Neubrutalism", icon: <Palette className="w-4 h-4" />, color: "#2563eb", desc: "Thick black outlines, bold drop shadows", mode: "light", palette: ["#fefce8", "#000000", "#2563eb"] },
  { id: "theme-minimalist", name: "Warm Minimalist", icon: <ShoppingBag className="w-4 h-4" />, color: "#78716c", desc: "Beige canvas, organic elements, elegant serif", mode: "light", palette: ["#faf6f0", "#1c1917", "#78716c"] },
  { id: "theme-trust", name: "Clinical Trust", icon: <Heart className="w-4 h-4" />, color: "#0ea5e9", desc: "Clean hospital sky-blue, trust-focused layout", mode: "light", palette: ["#f8fafc", "#0f172a", "#0ea5e9"] },
  { id: "theme-sage", name: "Forest Sage", icon: <Leaf className="w-4 h-4" />, color: "#586b62", desc: "Sage green canvas, warm sand accents", mode: "light", palette: ["#f4f5f1", "#2b332f", "#586b62"] },
  { id: "theme-polar", name: "Nordic Frost", icon: <Snowflake className="w-4 h-4" />, color: "#0284c7", desc: "Pristine clean light-blue tech theme", mode: "light", palette: ["#f0f4f8", "#1e293b", "#0284c7"] },
  { id: "theme-vaporwave", name: "Vaporwave Dream", icon: <Tv className="w-4 h-4" />, color: "#ff79c6", desc: "Nostalgic bubblegum pink and mint green", mode: "light", palette: ["#f5f0fa", "#4a154b", "#ff79c6"] }
];

export function ThemeSwitcher({
  activeTheme,
  onChangeTheme
}: {
  activeTheme: string;
  onChangeTheme: (themeId: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const currentTheme = themes.find((t) => t.id === activeTheme) || themes[0];
  const [currentTab, setCurrentTab] = useState<"dark" | "light">("dark");

  // Sync tab with selected theme on load or changes
  useEffect(() => {
    if (currentTheme) {
      setCurrentTab(currentTheme.mode);
    }
  }, [activeTheme]);

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 26 }}
            className="mb-4 w-[330px] bg-card/90 backdrop-blur-2xl border border-border p-5 shadow-2xl text-left"
            style={{ 
              borderRadius: "var(--radius)",
              borderColor: "var(--color-border)",
              boxShadow: `0 15px 45px -10px ${currentTheme.color}25`
            }}
          >
            {/* Header */}
            <div className="flex justify-between items-center pb-4 border-b border-border mb-4">
              <div>
                <h4 className="text-foreground font-display text-xl font-bold">Theme Shaders</h4>
                <p className="text-[9px] text-muted-foreground font-mono uppercase tracking-widest">Select Visual System</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground flex items-center justify-center transition shadow-sm border border-border"
                style={{ borderRadius: "var(--radius)" }}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Tab Swticher */}
            <div className="flex gap-1 bg-secondary/30 p-1 border border-border mb-4 relative" style={{ borderRadius: "calc(var(--radius) / 1.5)" }}>
              {(["dark", "light"] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setCurrentTab(mode)}
                  className={`flex-1 text-[10px] uppercase font-bold py-1.5 rounded-full transition relative font-mono z-10 ${
                    currentTab === mode ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                  style={{ borderRadius: "calc(var(--radius) / 2)" }}
                >
                  {currentTab === mode && (
                    <motion.span
                      layoutId="activeTabBg"
                      className="absolute inset-0 bg-primary z-0"
                      style={{ borderRadius: "calc(var(--radius) / 2)" }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{mode} systems</span>
                </button>
              ))}
            </div>

            {/* List */}
            <div className="space-y-1.5 max-h-[280px] overflow-y-auto pr-1">
              {themes
                .filter((t) => t.mode === currentTab)
                .map((t) => {
                  const isSelected = activeTheme === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => {
                        onChangeTheme(t.id);
                        setIsOpen(false);
                      }}
                      className={`w-full text-left p-3 border transition flex items-center gap-3 group relative ${
                        isSelected
                          ? "bg-primary/5 border-primary shadow-sm"
                          : "bg-transparent border-transparent hover:bg-secondary/40 hover:border-border"
                      }`}
                      style={{ borderRadius: "calc(var(--radius) / 1.5)" }}
                    >
                      <div 
                        className="h-8 w-8 rounded-xl grid place-items-center text-base shadow-inner shrink-0 border border-border"
                        style={{ 
                          backgroundColor: `${t.color}15`, 
                          color: t.color,
                          borderRadius: "calc(var(--radius) / 2)"
                        }}
                      >
                        {t.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center">
                          <span className={`text-xs font-bold truncate transition ${
                            isSelected ? "text-primary font-black" : "text-foreground group-hover:text-primary"
                          }`}>
                            {t.name}
                          </span>
                          
                          {/* Mini Visual Color Palette Swatches */}
                          <div className="flex gap-0.5 items-center shrink-0">
                            {t.palette.map((col, idx) => (
                              <span 
                                key={idx} 
                                className="w-1.5 h-1.5 rounded-full border border-border" 
                                style={{ backgroundColor: col, borderColor: "var(--color-border)" }} 
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-[9px] leading-tight mt-0.5 truncate text-muted-foreground">
                          {t.desc}
                        </p>
                      </div>
                    </button>
                  );
                })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="h-14 w-14 rounded-full bg-card border border-border flex items-center justify-center shadow-2xl hover:border-primary/45 relative group overflow-hidden"
        style={{
          boxShadow: `0 0 25px ${currentTheme.color}35, inset 0 2px 4px rgba(255, 255, 255, 0.05)`,
          borderRadius: "var(--radius)"
        }}
      >
        <span 
          className="absolute inset-0 opacity-15 bg-gradient-to-tr from-transparent to-white group-hover:opacity-30 transition-opacity duration-300"
          style={{ backgroundColor: currentTheme.color }}
        />
        <Palette className="w-5 h-5 text-foreground relative z-10 transition-transform duration-500 group-hover:rotate-45" />
      </motion.button>
    </div>
  );
}
