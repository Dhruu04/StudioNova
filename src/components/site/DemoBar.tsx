import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export function DemoBar({ label, accent = "#fff" }: { label: string; accent?: string }) {
  return (
    <div className="fixed bottom-6 left-6 z-[100] font-sans">
      <Link
        to="/"
        className="flex items-center gap-3 rounded-full bg-black/90 backdrop-blur-2xl border px-4.5 py-3 text-[11px] font-mono shadow-2xl transition-all duration-300 group hover:scale-[1.03]"
        style={{ 
          borderColor: `${accent}30`,
          boxShadow: `0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px ${accent}15`
        }}
      >
        <span className="h-2 w-2 rounded-full animate-pulse shrink-0" style={{ backgroundColor: accent }} />
        <span className="text-zinc-400 group-hover:text-zinc-200 transition duration-300">
          DEMO · <span className="text-white font-bold uppercase tracking-wider">{label}</span>
        </span>
        <span className="text-zinc-700">|</span>
        <span className="text-zinc-300 group-hover:text-white font-bold transition duration-300 flex items-center gap-1.5">
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
          Back to Studio Nova
        </span>
      </Link>
    </div>
  );
}
