import { useEffect, useState } from "react";
  import { motion, useMotionValue, useSpring } from "motion/react";

  export function CustomCursor() {
    const [cursorType, setCursorType] = useState<string | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    // Core coordinates
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Spring physics configuration for the lag ring
    const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
    const ringX = useSpring(mouseX, springConfig);
    const ringY = useSpring(mouseY, springConfig);

    useEffect(() => {
      const moveMouse = (e: MouseEvent) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
        if (!isVisible) setIsVisible(true);
      };

      const handleMouseDown = () => setIsClicked(true);
      const handleMouseUp = () => setIsClicked(false);
      const handleMouseLeave = () => setIsVisible(false);
      const handleMouseEnter = () => setIsVisible(true);

      window.addEventListener("mousemove", moveMouse);
      window.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("mouseleave", handleMouseLeave);
      document.addEventListener("mouseenter", handleMouseEnter);

      // Event delegation to detect cursor targets
      let lastCursorType: string | null = null;
      const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const interactiveEl = target.closest("[data-cursor]");
        let nextType: string | null = null;
        if (interactiveEl) {
          nextType = interactiveEl.getAttribute("data-cursor");
        } else {
          // Fallback check for links and buttons to expand cursor
          const isButtonOrLink = target.closest("a, button, input[type='range'], select");
          if (isButtonOrLink) {
            nextType = "pointer";
          }
        }

        if (nextType !== lastCursorType) {
          lastCursorType = nextType;
          setCursorType(nextType);
        }
      };

      window.addEventListener("mouseover", handleMouseOver);

      return () => {
        window.removeEventListener("mousemove", moveMouse);
        window.removeEventListener("mousedown", handleMouseDown);
        window.removeEventListener("mouseup", handleMouseUp);
        document.removeEventListener("mouseleave", handleMouseLeave);
        document.removeEventListener("mouseenter", handleMouseEnter);
        window.removeEventListener("mouseover", handleMouseOver);
      };
    }, [isVisible]);

    if (typeof window === "undefined" || !isVisible) return null;

    // Custom sizes based on hover state
    const getRingSize = () => {
      if (cursorType === "drag") return 64;
      if (cursorType === "view") return 64;
      if (cursorType === "pointer") return 40;
      if (isClicked) return 12;
      return 24;
    };

    const size = getRingSize();

    return (
      <div className="hidden lg:block pointer-events-none fixed inset-0 z-[9999]">
        {/* Main trailing soft spotlight aura */}
        <motion.div
          className="absolute flex items-center justify-center rounded-full border text-center font-mono text-[9px] uppercase tracking-widest font-black shadow-lg"
          style={{
            x: ringX,
            y: ringY,
            width: size,
            height: size,
            translateX: "-50%",
            translateY: "-50%",
            borderColor: "var(--color-neon)",
            backgroundColor: "var(--color-neon-glow)",
            color: "var(--color-foreground)",
          }}
          animate={{
            scale: isClicked ? 0.85 : 1,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 20 }}
        >
          {cursorType === "drag" && "DRAG"}
          {cursorType === "view" && "VIEW"}
        </motion.div>
      </div>
    );
  }
