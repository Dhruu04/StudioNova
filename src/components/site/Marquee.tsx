export function Marquee() {
  const items = [
    "Web Design", "Motion", "E-Commerce", "Brand Systems", "3D / WebGL",
    "Headless CMS", "SEO", "Conversion", "AI Integration", "Performance",
  ];
  const row = [...items, ...items];
  return (
    <section className="relative py-10 border-y border-border bg-card/30 overflow-hidden">
      <div className="flex marquee whitespace-nowrap gap-12 text-5xl md:text-7xl font-display">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            <span className={i % 2 ? "text-gradient italic" : "text-foreground/80"}>{t}</span>
            <span className="text-neon">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
