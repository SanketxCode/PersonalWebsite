"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/lib/data";
import { MapPin } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  },
};

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title text-center"
          >
            Experience
          </motion.h2>

          <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            {experience.map((exp, idx) => (
              <motion.div key={idx} variants={item} className="timeline-item">
                {/* Timeline decoration with animated dot */}
                <motion.div
                  className="timeline-dot"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring" as const,
                    stiffness: 200,
                    delay: idx * 0.2,
                  }}
                >
                  <motion.div
                    className="timeline-dot-inner"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
                <div className="timeline-line" />

                {/* Content */}
                <motion.div
                  className="space-y-4"
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring" as const, stiffness: 300 }}
                >
                  {/* Header */}
                  <div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-2">
                      <motion.h3
                        className="text-xl md:text-2xl font-semibold text-[var(--text-primary)]"
                        whileHover={{ color: "var(--accent-hover)" }}
                      >
                        {exp.role}
                      </motion.h3>
                      {exp.grade && (
                        <motion.span
                          className="text-xs font-mono text-[var(--accent)] bg-[var(--accent-subtle)] px-2.5 py-1 rounded border border-[var(--accent-border)]"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {exp.grade}
                        </motion.span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm md:text-base">
                      <span className="font-medium text-[var(--text-secondary)]">
                        {exp.company}
                      </span>
                      <span className="text-[var(--text-muted)]">·</span>
                      <span className="text-[var(--text-tertiary)]">
                        {exp.period}
                      </span>
                      <span className="text-[var(--text-muted)]">·</span>
                      <motion.span
                        className="inline-flex items-center gap-1.5 text-[var(--text-tertiary)]"
                        whileHover={{ scale: 1.05 }}
                      >
                        <MapPin size={14} />
                        {exp.location}
                      </motion.span>
                    </div>
                  </div>

                  {/* Highlights with stagger */}
                  <motion.ul
                    className="styled-list text-sm md:text-base text-[var(--text-secondary)]"
                    variants={{
                      hidden: { opacity: 0 },
                      show: {
                        opacity: 1,
                        transition: { staggerChildren: 0.1 },
                      },
                    }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                  >
                    {exp.highlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          show: { opacity: 1, x: 0 },
                        }}
                        whileHover={{ x: 4 }}
                      >
                        {highlightMetrics(highlight)}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/** Bold percentage/number metrics in experience bullets */
function highlightMetrics(text: string): React.ReactNode {
  const parts = text.split(/(\d+%|\d+\+?(?:\s*(?:times?|x)))/gi);
  return parts.map((part, i) =>
    /\d+%|\d+\+?(?:\s*(?:times?|x))/i.test(part) ? (
      <span key={i} className="stat-highlight">
        {part}
      </span>
    ) : (
      part
    )
  );
}
