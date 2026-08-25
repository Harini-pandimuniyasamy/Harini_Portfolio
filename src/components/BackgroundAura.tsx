import React, { useEffect, useRef } from "react";
 
interface BackgroundAuraProps {
  isDarkMode?: boolean;
}

export const BackgroundAura: React.FC<BackgroundAuraProps> = ({ isDarkMode = true }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Particle nodes
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
      color: string;
    }

    const particles: Particle[] = [];
    const count = Math.min(Math.floor(window.innerWidth / 35), 40);
    const colors = isDarkMode
      ? ["#B99AFF", "#d4bbff", "#7C4DFF", "#9d71fa"]
      : ["#703bf7", "#9d72ff", "#8a64f5", "#5925dc"];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 0.8,
        alpha: isDarkMode ? Math.random() * 0.35 + 0.1 : Math.random() * 0.25 + 0.08,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw ambient glow gradients
      const grad1 = ctx.createRadialGradient(
        width * 0.2,
        height * 0.25,
        10,
        width * 0.2,
        height * 0.25,
        width * 0.45
      );
      if (isDarkMode) {
        grad1.addColorStop(0, "rgba(185, 154, 255, 0.06)");
        grad1.addColorStop(1, "rgba(20, 17, 34, 0)");
      } else {
        grad1.addColorStop(0, "rgba(112, 59, 247, 0.07)");
        grad1.addColorStop(1, "rgba(248, 247, 255, 0)");
      }
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const grad2 = ctx.createRadialGradient(
        width * 0.8,
        height * 0.75,
        10,
        width * 0.8,
        height * 0.75,
        width * 0.5
      );
      if (isDarkMode) {
        grad2.addColorStop(0, "rgba(124, 77, 255, 0.05)");
        grad2.addColorStop(1, "rgba(20, 17, 34, 0)");
      } else {
        grad2.addColorStop(0, "rgba(96, 50, 216, 0.06)");
        grad2.addColorStop(1, "rgba(248, 247, 255, 0)");
      }
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      });

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDarkMode]);

  return (
    <canvas
      id="bg-canvas"
      ref={canvasRef}
      className={`fixed inset-0 w-full h-full pointer-events-none z-[-1] ${isDarkMode ? "opacity-70" : "opacity-60"}`}
    />
  );
};

