import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Industries } from "@/components/site/Industries";
import { Work } from "@/components/site/Work";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { ThemeSwitcher } from "@/components/site/ThemeSwitcher";
import { ThemePlayground } from "@/components/site/ThemePlayground";
import { BeforeAfterSlider } from "@/components/site/BeforeAfterSlider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Studio Nova — Websites that move, convert, delight" },
      { name: "description", content: "Boutique web studio crafting dynamic, modern sites for restaurants, salons, schools, real estate, e-commerce and more." },
    ],
  }),
  component: Index,
});

function Index() {
  const [activeTheme, setActiveTheme] = useState("theme-glassmorphism");

  // Load theme from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("studio-nova-theme");
    if (saved) {
      setActiveTheme(saved);
      document.documentElement.className = saved;
    } else {
      document.documentElement.className = "theme-glassmorphism";
    }
  }, []);

  const handleThemeChange = (themeId: string) => {
    setActiveTheme(themeId);
    localStorage.setItem("studio-nova-theme", themeId);
    document.documentElement.className = themeId;
  };

  return (
    <main className={`relative bg-background text-foreground overflow-x-hidden min-h-screen transition-all duration-700 ease-in-out ${activeTheme}`}>
      <Navbar />
      <Hero />
      <Marquee />
      <Industries />
      <ThemePlayground />
      <BeforeAfterSlider />
      <Work />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
      <ThemeSwitcher activeTheme={activeTheme} onChangeTheme={handleThemeChange} />
    </main>
  );
}
