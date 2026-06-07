export function Footer() {
  return (
    <footer className="border-t border-border px-6 md:px-10 py-10">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-neon" />
          <span className="font-display text-lg text-foreground">Studio Nova</span>
          <span className="font-mono text-xs">© 2026</span>
        </div>
        <div className="font-mono text-xs">Ahmedabad · Mumbai · Bengaluru</div>
        <div className="flex items-center gap-5">
          <a href="#" className="hover:text-foreground transition">Instagram</a>
          <a href="#" className="hover:text-foreground transition">Dribbble</a>
          <a href="#" className="hover:text-foreground transition">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
