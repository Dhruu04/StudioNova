import { useState, useRef } from "react";
import { motion, useMotionValue, animate } from "motion/react";
import { 
  Sparkles, 
  Code, 
  Copy, 
  Check, 
  Sliders, 
  Eye, 
  HeartPulse, 
  RefreshCw,
  Zap,
  Flame,
  Heart,
  Shield,
  Trophy,
  Activity,
  Laptop
} from "lucide-react";

// Circular Progress component for Lighthouse scores
function CircularProgress({ value, label, color }: { value: number; label: string; color: string }) {
  const size = 60;
  const strokeWidth = 5;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-1.5 shrink-0">
      <div className="relative w-[60px] h-[60px] flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90" width={size} height={size}>
          {/* Track */}
          <circle
            className="text-zinc-800"
            strokeWidth={strokeWidth}
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
          {/* Bar */}
          <motion.circle
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            fill="transparent"
            r={radius}
            cx={size / 2}
            cy={size / 2}
            strokeDasharray={circumference + " " + circumference}
            animate={{ strokeDashoffset }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </svg>
        <span className="absolute text-xs font-mono font-bold text-foreground">{value}</span>
      </div>
      <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest text-center">{label}</span>
    </div>
  );
}

export function ThemePlayground() {
  // Card styles states
  const [radius, setRadius] = useState(16);
  const [borderWidth, setBorderWidth] = useState(2);
  const [borderStyle, setBorderStyle] = useState<"solid" | "dashed" | "double">("solid");
  const [blur, setBlur] = useState(8);
  const [glow, setGlow] = useState(0.4);
  const [accent, setAccent] = useState("#06b6d4"); // cyan
  const [fontFamily, setFontFamily] = useState("font-sans");
  const [noiseOpacity, setNoiseOpacity] = useState(0.03);

  // New Sandbox Personalization States
  const [enableTilt, setEnableTilt] = useState(true);
  const [tiltSensitivity, setTiltSensitivity] = useState(15);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const [isDraggingCard, setIsDraggingCard] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const [bgOpacity, setBgOpacity] = useState(60); // Percentage
  const [shimmerActive, setShimmerActive] = useState(true);
  const [rainbowActive, setRainbowActive] = useState(false);
  const [glowSpread, setGlowSpread] = useState(50); // px

  const [buttonText, setButtonText] = useState("Confirm Config");
  const [buttonVariant, setButtonVariant] = useState<"solid" | "glass" | "retro" | "pulse">("solid");
  const [buttonRadius, setButtonRadius] = useState(8);

  const [badgeText, setBadgeText] = useState("ACTIVE NODE");
  const [badgeStyle, setBadgeStyle] = useState<"neon" | "dotted" | "solid">("neon");
  const [showBadge, setShowBadge] = useState(true);

  const [headerIcon, setHeaderIcon] = useState<"eye" | "sparkles" | "code" | "heart" | "zap" | "flame" | "activity">("eye");

  // Motion physics states
  const [stiffness, setStiffness] = useState(300);
  const [damping, setDamping] = useState(20);
  const [mass, setMass] = useState(0.5);

  // Card copy states
  const [cardTitle, setCardTitle] = useState("Nova Design Engine");
  const [cardDesc, setCardDesc] = useState("This element is currently executing with custom tokens computed directly in React state and CSS variables. Drag and throw me to test spring physics!");

  // Lighthouse checklist states
  const [compressAssets, setCompressAssets] = useState(true);
  const [semanticHTML, setSemanticHTML] = useState(true);
  const [enableHTTPS, setEnableHTTPS] = useState(true);
  const [seoMeta, setSeoMeta] = useState(true);

  // Clipboard copy state
  const [copied, setCopied] = useState(false);

  // Motion values for drag snap-back
  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);

  const handleDragEnd = () => {
    setIsDraggingCard(false);
    animate(dragX, 0, { type: "spring", stiffness, damping, mass });
    animate(dragY, 0, { type: "spring", stiffness, damping, mass });
  };

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableTilt || isDraggingCard || !cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotX = -((y - centerY) / centerY) * tiltSensitivity;
    const rotY = ((x - centerX) / centerX) * tiltSensitivity;
    
    rotateX.set(rotX);
    rotateY.set(rotY);
  };

  const handleCardMouseLeave = () => {
    animate(rotateX, 0, { type: "spring", stiffness: 300, damping: 20 });
    animate(rotateY, 0, { type: "spring", stiffness: 300, damping: 20 });
  };

  const renderHeaderIcon = () => {
    const props = { className: "w-4 h-4 transition-colors", style: { color: accent } };
    switch (headerIcon) {
      case "eye": return <Eye {...props} />;
      case "sparkles": return <Sparkles {...props} />;
      case "code": return <Code {...props} />;
      case "heart": return <Heart {...props} />;
      case "zap": return <Zap {...props} />;
      case "flame": return <Flame {...props} />;
      case "activity": return <Activity {...props} />;
      default: return <Eye {...props} />;
    }
  };

  const renderButton = () => {
    const isRetro = buttonVariant === "retro";
    const isPulse = buttonVariant === "pulse";
    const isGlass = buttonVariant === "glass";
    
    return (
      <button 
        type="button"
        className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all duration-300 relative z-10 ${
          isRetro 
            ? "bg-white text-black border-[3px] border-black shadow-[4px_4px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000]" 
            : isGlass 
            ? "bg-transparent border border-border text-foreground hover:bg-white/10"
            : isPulse
            ? "animate-pulse shadow-lg text-white"
            : "text-white shadow-md hover:brightness-110 active:scale-95"
        }`}
        style={{ 
          backgroundColor: (isRetro || isGlass) ? undefined : accent,
          borderColor: isGlass ? accent : undefined,
          borderRadius: `${buttonRadius}px`,
        }}
      >
        {buttonText}
      </button>
    );
  };

  // Lighthouse score calculations
  const performanceScore = 40 + (compressAssets ? 59 : 0);
  const accessibilityScore = 50 + (semanticHTML ? 50 : 0);
  const bestPracticesScore = 60 + (enableHTTPS ? 40 : 0);
  const seoScore = 45 + (seoMeta ? 55 : 0);

  const getScoreColor = (score: number) => {
    if (score >= 90) return "#22c55e"; // green
    if (score >= 50) return "#eab308"; // yellow
    return "#ef4444"; // red
  };

  // Styling presets
  const presets = [
    {
      name: "Cyberpunk",
      radius: 0,
      borderWidth: 2,
      borderStyle: "solid" as const,
      blur: 0,
      glow: 0.8,
      accent: "#84cc16",
      fontFamily: "font-mono",
      noiseOpacity: 0.05,
      stiffness: 400,
      damping: 15,
      mass: 0.4
    },
    {
      name: "Claymorphic",
      radius: 32,
      borderWidth: 4,
      borderStyle: "double" as const,
      blur: 0,
      glow: 0.3,
      accent: "#f43f5e",
      fontFamily: "font-sans",
      noiseOpacity: 0,
      stiffness: 150,
      damping: 12,
      mass: 0.8
    },
    {
      name: "Glassmorphic",
      radius: 20,
      borderWidth: 1,
      borderStyle: "solid" as const,
      blur: 16,
      glow: 0.5,
      accent: "#06b6d4",
      fontFamily: "font-sans",
      noiseOpacity: 0.02,
      stiffness: 300,
      damping: 25,
      mass: 0.5
    },
    {
      name: "Neubrutalist",
      radius: 0,
      borderWidth: 4,
      borderStyle: "solid" as const,
      blur: 0,
      glow: 1.0,
      accent: "#2563eb",
      fontFamily: "font-mono",
      noiseOpacity: 0.08,
      stiffness: 450,
      damping: 30,
      mass: 1.0
    },
    {
      name: "Warm Minimalist",
      radius: 8,
      borderWidth: 1,
      borderStyle: "dashed" as const,
      blur: 2,
      glow: 0.1,
      accent: "#78716c",
      fontFamily: "font-serif",
      noiseOpacity: 0.04,
      stiffness: 200,
      damping: 20,
      mass: 0.6
    }
  ];

  const applyPreset = (p: typeof presets[number]) => {
    setRadius(p.radius);
    setBorderWidth(p.borderWidth);
    setBorderStyle(p.borderStyle);
    setBlur(p.blur);
    setGlow(p.glow);
    setAccent(p.accent);
    setFontFamily(p.fontFamily);
    setNoiseOpacity(p.noiseOpacity);
    setStiffness(p.stiffness);
    setDamping(p.damping);
    setMass(p.mass);
  };

  const cssCode = `.custom-card {
  --radius: ${radius}px;
  --border-width: ${borderWidth}px;
  --border-style: ${borderStyle};
  --accent-color: ${accent};
  --backdrop-blur: ${blur}px;
  --noise-opacity: ${noiseOpacity};
  --backdrop-opacity: ${bgOpacity / 100};
  --glow-spread: ${glowSpread}px;
  --shadow-glow: 0 20px ${glowSpread}px -10px ${accent}${Math.round(glow * 255).toString(16).padStart(2, "0")};
  
  border: var(--border-width) var(--border-style) var(--accent-color);
  border-radius: var(--radius);
  backdrop-filter: blur(var(--backdrop-blur));
  box-shadow: var(--shadow-glow);
  ${rainbowActive ? "animation: rainbow-border 6s linear infinite;" : ""}
}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(cssCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative py-32 px-6 md:px-10 border-t border-border overflow-hidden">
      <div className="absolute inset-0 bg-aurora opacity-20 pointer-events-none" />
      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-neon mb-4">
              § Interactive Sandbox — Showoff playground
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-foreground">
              Dynamic design <span className="italic text-gradient">sandbox</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground leading-relaxed text-sm">
            We love dynamic variables. Adjust the tokens below to compile a custom component mockup on the fly. Experience how our layouts adapt to any radius, outline, or glow level in real-time.
          </p>
        </div>

        {/* Sandbox Core Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Settings Control Panel */}
          <div className="lg:col-span-7 bg-card border border-border p-8 rounded-3xl space-y-8 shadow-xl max-h-[720px] overflow-y-auto pr-6 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
            
            {/* Presets */}
            <div>
              <span className="block font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Preset Style Frameworks
              </span>
              <div className="flex flex-wrap gap-2">
                {presets.map((p) => (
                  <button
                    key={p.name}
                    onClick={() => applyPreset(p)}
                    className="px-4 py-2 bg-secondary/50 hover:bg-secondary border border-border text-foreground hover:border-primary/50 text-xs font-mono rounded-full tracking-wider transition"
                  >
                    {p.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Slider Parameters */}
            <div className="space-y-6">
              <span className="block font-mono text-[10px] text-muted-foreground uppercase tracking-widest flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5" /> Style variables
              </span>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Radius */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-muted-foreground">Corner Radius</span>
                    <span className="text-foreground font-bold">{radius}px</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="36"
                    value={radius}
                    onChange={(e) => setRadius(Number(e.target.value))}
                    className="w-full h-1 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>

                {/* Border Width */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-muted-foreground">Border Width</span>
                    <span className="text-foreground font-bold">{borderWidth}px</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="6"
                    value={borderWidth}
                    onChange={(e) => setBorderWidth(Number(e.target.value))}
                    className="w-full h-1 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>

                {/* Glass Blur */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-muted-foreground">Glass Backdrop Blur</span>
                    <span className="text-foreground font-bold">{blur}px</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="24"
                    value={blur}
                    onChange={(e) => setBlur(Number(e.target.value))}
                    className="w-full h-1 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>

                {/* Glow Shadow */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-muted-foreground">Glow shadow intensity</span>
                    <span className="text-foreground font-bold">{Math.round(glow * 100)}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={glow * 100}
                    onChange={(e) => setGlow(Number(e.target.value) / 100)}
                    className="w-full h-1 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>

                {/* Grain Opacity */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-muted-foreground">Card noise overlay</span>
                    <span className="text-foreground font-bold">{Math.round(noiseOpacity * 100)}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="15"
                    value={noiseOpacity * 100}
                    onChange={(e) => setNoiseOpacity(Number(e.target.value) / 100)}
                    className="w-full h-1 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>

                {/* Border Style */}
                <div className="space-y-2">
                  <span className="block text-xs text-muted-foreground font-mono">Border Outline Style</span>
                  <div className="flex gap-2">
                    {(["solid", "dashed", "double"] as const).map((style) => (
                      <button
                        key={style}
                        onClick={() => setBorderStyle(style)}
                        className={`flex-1 py-1 px-3 border border-border text-[10px] uppercase font-mono rounded-lg transition ${
                          borderStyle === style ? "bg-primary text-primary-foreground border-primary" : "bg-secondary/40 text-foreground hover:bg-secondary"
                        }`}
                      >
                        {style}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Physics Swapper Sliders */}
            <div className="space-y-6 pt-6 border-t border-border">
              <span className="block font-mono text-[10px] text-muted-foreground uppercase tracking-widest flex items-center gap-1.5">
                <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Spring Physics Engine
              </span>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Stiffness */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-muted-foreground">Stiffness</span>
                    <span className="text-foreground font-bold">{stiffness}</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="500"
                    step="10"
                    value={stiffness}
                    onChange={(e) => setStiffness(Number(e.target.value))}
                    className="w-full h-1 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>

                {/* Damping */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-muted-foreground">Damping</span>
                    <span className="text-foreground font-bold">{damping}</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="45"
                    step="1"
                    value={damping}
                    onChange={(e) => setDamping(Number(e.target.value))}
                    className="w-full h-1 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>

                {/* Mass */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-muted-foreground">Mass</span>
                    <span className="text-foreground font-bold">{mass}</span>
                  </div>
                  <input
                    type="range"
                    min="0.1"
                    max="2.5"
                    step="0.1"
                    value={mass}
                    onChange={(e) => setMass(Number(e.target.value))}
                    className="w-full h-1 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>
              </div>
            </div>

            {/* Custom Content Inputs & Custom Settings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-border">
              {/* Text Personalization */}
              <div className="space-y-3">
                <span className="block font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                  Custom Card Copy
                </span>
                <input
                  type="text"
                  value={cardTitle}
                  onChange={(e) => setCardTitle(e.target.value)}
                  className="w-full bg-secondary/40 border border-border rounded-xl px-3 py-2 text-xs focus:border-primary outline-none"
                  placeholder="Card Title"
                />
                <textarea
                  value={cardDesc}
                  onChange={(e) => setCardDesc(e.target.value)}
                  className="w-full h-20 bg-secondary/40 border border-border rounded-xl px-3 py-2 text-xs focus:border-primary outline-none resize-none"
                  placeholder="Card Description"
                />
              </div>

              {/* Accent & Fonts */}
              <div className="space-y-4">
                <div>
                  <span className="block font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-2">
                    Accent Hue
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {["#06b6d4", "#84cc16", "#f43f5e", "#2563eb", "#78716c", "#a855f7", "#ff007f", "#f97316"].map((c) => (
                      <button
                        key={c}
                        onClick={() => setAccent(c)}
                        className="w-6 h-6 rounded-full border border-border transition hover:scale-110 relative"
                        style={{ backgroundColor: c }}
                      >
                        {accent === c && (
                          <span className="absolute inset-1 rounded-full bg-white/40 border border-white/50" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="block font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-2">
                    Font Family
                  </span>
                  <div className="flex gap-2">
                    {[
                      { id: "font-sans", label: "Sans" },
                      { id: "font-serif", label: "Serif" },
                      { id: "font-mono", label: "Mono" }
                    ].map((f) => (
                      <button
                        key={f.id}
                        onClick={() => setFontFamily(f.id)}
                        className={`px-3 py-1.5 border border-border text-xs rounded-lg font-mono transition ${
                          fontFamily === f.id ? "bg-primary text-primary-foreground border-primary" : "bg-secondary/40 text-foreground hover:bg-secondary"
                        }`}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Features & Shaders Customizer */}
            <div className="pt-6 border-t border-border space-y-6">
              <span className="block font-mono text-[10px] text-muted-foreground uppercase tracking-widest flex items-center gap-1.5">
                <Laptop className="w-3.5 h-3.5" /> Interactive shaders & personalization
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 3D Tilt Checkbox & Sensitivity */}
                <div className="space-y-3">
                  <label className="flex items-center gap-2.5 text-xs text-muted-foreground cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={enableTilt}
                      onChange={(e) => setEnableTilt(e.target.checked)}
                      className="rounded border-border bg-secondary/50 text-primary focus:ring-primary w-4 h-4 cursor-pointer"
                    />
                    <span>Enable 3D Parallax Tilt</span>
                  </label>
                  {enableTilt && (
                    <div className="space-y-2 pl-6">
                      <div className="flex justify-between text-[11px] font-mono">
                        <span className="text-muted-foreground">Tilt Intensity</span>
                        <span className="text-foreground font-bold">{tiltSensitivity}°</span>
                      </div>
                      <input
                        type="range"
                        min="5"
                        max="30"
                        value={tiltSensitivity}
                        onChange={(e) => setTiltSensitivity(Number(e.target.value))}
                        className="w-full h-1 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                      />
                    </div>
                  )}
                </div>

                {/* Glow Spread */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-muted-foreground">Glow spread size</span>
                    <span className="text-foreground font-bold">{glowSpread}px</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={glowSpread}
                    onChange={(e) => setGlowSpread(Number(e.target.value))}
                    className="w-full h-1 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>

                {/* Backdrop Opacity */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-muted-foreground">Card backdrop opacity</span>
                    <span className="text-foreground font-bold">{bgOpacity}%</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={bgOpacity}
                    onChange={(e) => setBgOpacity(Number(e.target.value))}
                    className="w-full h-1 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>

                {/* Shimmer & Rainbow Border */}
                <div className="space-y-3 flex flex-col justify-center">
                  <label className="flex items-center gap-2.5 text-xs text-muted-foreground cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={shimmerActive}
                      onChange={(e) => setShimmerActive(e.target.checked)}
                      className="rounded border-border bg-secondary/50 text-primary focus:ring-primary w-4 h-4 cursor-pointer"
                    />
                    <span>Inner Shimmer sweep overlay</span>
                  </label>
                  <label className="flex items-center gap-2.5 text-xs text-muted-foreground cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={rainbowActive}
                      onChange={(e) => setRainbowActive(e.target.checked)}
                      className="rounded border-border bg-secondary/50 text-primary focus:ring-primary w-4 h-4 cursor-pointer"
                    />
                    <span>Rainbow border animation</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Component CTA Button & Badge Customizer */}
            <div className="pt-6 border-t border-border space-y-6">
              <span className="block font-mono text-[10px] text-muted-foreground uppercase tracking-widest flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5" /> Card CTA button & badge configuration
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Button Settings */}
                <div className="space-y-4">
                  <span className="block font-mono text-[9px] text-muted-foreground uppercase tracking-widest">
                    CTA Button options
                  </span>
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={buttonText}
                      onChange={(e) => setButtonText(e.target.value)}
                      className="w-full bg-secondary/40 border border-border rounded-xl px-3 py-1.5 text-xs focus:border-primary outline-none"
                      placeholder="Button Label"
                    />
                    
                    <div className="space-y-2">
                      <span className="block text-[11px] text-muted-foreground font-mono">Button Style Variant</span>
                      <div className="grid grid-cols-2 gap-2">
                        {(["solid", "glass", "retro", "pulse"] as const).map((style) => (
                          <button
                            key={style}
                            onClick={() => setButtonVariant(style)}
                            className={`py-1 px-2 border border-border text-[9px] uppercase font-mono rounded-lg transition ${
                              buttonVariant === style ? "bg-primary text-primary-foreground border-primary" : "bg-secondary/40 text-foreground hover:bg-secondary"
                            }`}
                          >
                            {style}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-[11px] font-mono">
                        <span className="text-muted-foreground">Button Roundedness</span>
                        <span className="text-foreground font-bold">{buttonRadius}px</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="24"
                        value={buttonRadius}
                        onChange={(e) => setButtonRadius(Number(e.target.value))}
                        className="w-full h-1 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                      />
                    </div>
                  </div>
                </div>

                {/* Badge & Icon Settings */}
                <div className="space-y-4">
                  <span className="block font-mono text-[9px] text-muted-foreground uppercase tracking-widest">
                    Header & Badge Decorators
                  </span>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <label className="flex items-center gap-2 text-xs text-muted-foreground cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={showBadge}
                          onChange={(e) => setShowBadge(e.target.checked)}
                          className="rounded border-border bg-secondary/50 text-primary focus:ring-primary w-4.5 h-4.5 cursor-pointer"
                        />
                        <span>Show Badge</span>
                      </label>
                    </div>

                    {showBadge && (
                      <div className="space-y-2">
                        <input
                          type="text"
                          value={badgeText}
                          onChange={(e) => setBadgeText(e.target.value)}
                          className="w-full bg-secondary/40 border border-border rounded-xl px-3 py-1.5 text-xs focus:border-primary outline-none"
                          placeholder="Badge Text"
                        />
                        <div className="flex gap-2">
                          {(["neon", "dotted", "solid"] as const).map((style) => (
                            <button
                              key={style}
                              onClick={() => setBadgeStyle(style)}
                              className={`flex-1 py-1 px-2 border border-border text-[9px] uppercase font-mono rounded-lg transition ${
                                badgeStyle === style ? "bg-primary text-primary-foreground border-primary" : "bg-secondary/40 text-foreground hover:bg-secondary"
                              }`}
                            >
                              {style}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="space-y-2">
                      <span className="block text-[11px] text-muted-foreground font-mono">Header Symbol Icon</span>
                      <select
                        value={headerIcon}
                        onChange={(e) => setHeaderIcon(e.target.value as any)}
                        className="w-full bg-secondary border border-border rounded-xl px-3 py-1.5 text-xs focus:border-primary outline-none text-foreground font-mono"
                      >
                        <option value="eye">Eye (Default)</option>
                        <option value="sparkles">Sparkles</option>
                        <option value="code">Code</option>
                        <option value="heart">Heart</option>
                        <option value="zap">Zap</option>
                        <option value="flame">Flame</option>
                        <option value="activity">Activity</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lighthouse Performance checkboxes */}
            <div className="pt-6 border-t border-border space-y-3">
              <span className="block font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                Lighthouse audit parameters
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { id: "assets", label: "Optimize Asset Delivery", checked: compressAssets, set: setCompressAssets },
                  { id: "html", label: "Employ Semantic HTML Structure", checked: semanticHTML, set: setSemanticHTML },
                  { id: "https", label: "Secure Protocols (HTTPS)", checked: enableHTTPS, set: setEnableHTTPS },
                  { id: "seo", label: "Inject SEO Metadata Tags", checked: seoMeta, set: setSeoMeta }
                ].map((chk) => (
                  <label key={chk.id} className="flex items-center gap-2.5 text-xs text-muted-foreground cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={chk.checked}
                      onChange={(e) => chk.set(e.target.checked)}
                      className="rounded border-border bg-secondary/50 text-primary focus:ring-primary w-4 h-4 cursor-pointer"
                    />
                    <span>{chk.label}</span>
                  </label>
                ))}
              </div>
            </div>

          </div>

          {/* Sandbox Preview Card & Visualizers */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between lg:sticky lg:top-24 lg:self-start">
            
            {/* Draggable Mock Card */}
            <div className="relative flex-1 flex flex-col justify-center items-center py-10 px-4 bg-secondary/10 border border-border rounded-[2rem] overflow-hidden min-h-[360px]">
              <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
              <span className="absolute top-4 left-6 font-mono text-[9px] text-muted-foreground/60">PHYSICS BOUNDARY // DRAGGABLE AREA</span>

              <motion.div 
                ref={cardRef}
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                onDragStart={() => setIsDraggingCard(true)}
                onDragEnd={handleDragEnd}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                data-cursor="drag"
                className={`relative p-8 overflow-hidden w-full max-w-sm min-h-[300px] flex flex-col justify-between transition-all duration-300 relative cursor-grab active:cursor-grabbing ${
                  rainbowActive ? "animate-rainbow-border" : ""
                }`}
                style={{
                  x: dragX,
                  y: dragY,
                  rotateX: enableTilt ? rotateX : 0,
                  rotateY: enableTilt ? rotateY : 0,
                  transformStyle: "preserve-3d",
                  perspective: 1000,
                  borderRadius: `${radius}px`,
                  borderWidth: `${borderWidth}px`,
                  borderStyle: borderStyle,
                  borderColor: rainbowActive ? undefined : accent,
                  backdropFilter: `blur(${blur}px)`,
                  backgroundColor: "transparent",
                  boxShadow: rainbowActive 
                    ? undefined 
                    : `0 20px ${glowSpread}px -10px ${accent}${Math.round(glow * 255).toString(16).padStart(2, "0")}`,
                }}
              >
                {/* Customizable Card background fill opacity */}
                <div 
                  className="absolute inset-0 z-0 pointer-events-none transition-colors duration-300"
                  style={{ 
                    backgroundColor: "var(--color-card)", 
                    opacity: bgOpacity / 100 
                  }}
                />

                {/* Custom noise opacity overlay inside the card */}
                {noiseOpacity > 0 && (
                  <div 
                    className="absolute inset-0 noise pointer-events-none z-0" 
                    style={{ opacity: noiseOpacity }}
                  />
                )}

                {/* Shimmer glare overlay */}
                {shimmerActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer-sweep pointer-events-none z-0" />
                )}

                {/* Accent lighting glow */}
                <div 
                  className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-[80px] pointer-events-none opacity-40 transition-colors duration-500 z-0"
                  style={{ backgroundColor: accent }}
                />

                <div className="relative z-10 w-full flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full grid place-items-center border border-border text-foreground transition-colors duration-500" style={{ color: accent, borderColor: `${accent}30` }}>
                          {renderHeaderIcon()}
                        </div>
                        <div>
                          <h4 className={`text-sm font-bold text-foreground ${fontFamily}`}>{cardTitle}</h4>
                          <p className="text-[9px] text-muted-foreground font-mono uppercase tracking-wider">Dynamic Layout Node</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1.5">
                        <span className="h-2 w-2 rounded-full animate-ping shrink-0" style={{ backgroundColor: accent }} />
                        {showBadge && (
                          <span 
                            className={`inline-flex items-center gap-1 py-0.5 px-2 rounded-full text-[8px] font-mono font-bold tracking-wider border select-none ${
                              badgeStyle === "neon" 
                                ? "bg-card text-foreground" 
                                : badgeStyle === "dotted" 
                                ? "border-dashed bg-transparent text-muted-foreground" 
                                : "bg-primary text-primary-foreground border-transparent"
                            }`}
                            style={{
                              color: badgeStyle === "neon" ? accent : undefined,
                              borderColor: badgeStyle === "neon" ? accent : undefined,
                            }}
                          >
                            {badgeText}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="mt-8">
                      <p className={`text-xs text-muted-foreground mt-2 leading-relaxed ${fontFamily}`}>
                        {cardDesc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-border flex justify-between items-center w-full">
                    <span className="text-[9px] font-mono text-muted-foreground">SPRING ACTIVE</span>
                    {renderButton()}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Lighthouse Score Meters */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-xl">
              <div className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest mb-4 pb-2 border-b border-border flex justify-between items-center">
                <span>Google PageSpeed Insights simulation</span>
                <span className="text-emerald-400 font-bold font-mono">AUDIT VERIFIED</span>
              </div>
              <div className="flex justify-around gap-2 overflow-x-auto py-2">
                <CircularProgress value={performanceScore} label="Performance" color={getScoreColor(performanceScore)} />
                <CircularProgress value={accessibilityScore} label="Accessibility" color={getScoreColor(accessibilityScore)} />
                <CircularProgress value={bestPracticesScore} label="Best Practices" color={getScoreColor(bestPracticesScore)} />
                <CircularProgress value={seoScore} label="SEO" color={getScoreColor(seoScore)} />
              </div>
            </div>

            {/* Generated CSS variables code box */}
            <div className="bg-zinc-950 border border-white/[0.06] rounded-2xl p-6 shadow-xl relative group">
              <div className="flex justify-between items-center pb-3 border-b border-white/[0.06] mb-4">
                <div className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest flex items-center gap-1.5">
                  <Code className="w-3.5 h-3.5" /> CSS Variable Declarations
                </div>
                <button
                  onClick={copyToClipboard}
                  className="text-zinc-500 hover:text-white transition-colors p-1"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              <pre className="font-mono text-[10px] text-zinc-300 leading-relaxed overflow-x-auto select-all">
                {cssCode}
              </pre>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
