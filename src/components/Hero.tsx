"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { ArrowDown, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const nameLetters = siteConfig.name.split("");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
      {/* Animated glow that follows mouse */}
      <motion.div
        className="hero-glow"
        animate={
          isMounted
            ? {
                x: `calc(-50% + ${mousePosition.x}px)`,
                y: `${mousePosition.y}px`,
              }
            : {}
        }
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      />

      {/* Floating particles */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[var(--accent)] rounded-full opacity-30"
              initial={{
                x: typeof window !== "undefined" ? Math.random() * window.innerWidth : 0,
                y: typeof window !== "undefined" ? Math.random() * window.innerHeight : 0,
              }}
              animate={{
                y: [
                  typeof window !== "undefined" ? Math.random() * window.innerHeight : 0,
                  typeof window !== "undefined" ? Math.random() * window.innerHeight : 0,
                ],
                x: [
                  typeof window !== "undefined" ? Math.random() * window.innerWidth : 0,
                  typeof window !== "undefined" ? Math.random() * window.innerWidth : 0,
                ],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      )}

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* SECTION 1: IDENTITY */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 section-title text-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={16} />
              </motion.div>
              Software Engineer
            </motion.div>

            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.05]">
              {nameLetters.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.05,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    scale: 1.2,
                    color: "var(--accent-hover)",
                    transition: { duration: 0.2 },
                  }}
                  className="inline-block cursor-default"
                  style={{ display: letter === " " ? "inline" : "inline-block" }}
                >
                  {letter === " " ? " " : letter}
                </motion.span>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl sm:text-2xl md:text-3xl text-[var(--text-secondary)] leading-[1.4] max-w-4xl mx-auto"
            >
              {siteConfig.headline}
            </motion.p>
          </div>

          <div className="my-20" /> {/* Spacing Gap */}

          {/* SECTION 2: SUMMARY */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-base md:text-lg lg:text-xl text-[var(--text-tertiary)] max-w-3xl mx-auto leading-[1.8] mb-32"
          >
            {siteConfig.intro}
          </motion.p>

          <motion.a
            href="#about"
            className="inline-flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-tertiary)] transition-colors"
            aria-label="Scroll to About section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 12, 0] }}
            transition={{
              opacity: { delay: 1.5 },
              y: {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <ArrowDown size={32} />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
