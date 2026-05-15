"use client";

import { useEffect, useRef } from "react";

export default function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    class Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        // Ultra-slow, majestic movement
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        // Tiny structural nodes
        this.radius = Math.random() * 1.5 + 0.5;
      }

      update(canvasWidth: number, canvasHeight: number) {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce gently off the invisible walls of the screen
        if (this.x < 0 || this.x > canvasWidth) this.vx *= -1;
        if (this.y < 0 || this.y > canvasHeight) this.vy *= -1;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(34, 197, 94, 0.8)"; // Core Green
        ctx.fill();
      }
    }

    let nodes: Node[] = [];

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      nodes = [];
      
      // Auto-scale node count for perfect mobile performance
      const nodeCount = window.innerWidth < 768 ? 40 : 90;
      for (let i = 0; i < nodeCount; i++) {
        nodes.push(new Node(canvas.width, canvas.height));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw lines between nodes that are close to each other
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].update(canvas.width, canvas.height);
        nodes[i].draw(ctx);

        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // If nodes are within 150px, connect them with a truss line
          if (distance < 150) {
            ctx.beginPath();
            // The line fades out as the nodes get further apart
            const opacity = 1 - (distance / 150);
            ctx.strokeStyle = `rgba(34, 197, 94, ${opacity * 0.3})`; // Subtle connecting beam
            ctx.lineWidth = 1;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      init();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      // Brought to the front (z-[20]) but made super subtle so it doesn't block your text
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[20] mix-blend-screen opacity-30"
    />
  );
}