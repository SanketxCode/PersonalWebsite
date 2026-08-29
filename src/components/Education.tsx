"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/data";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title text-center"
          >
            Education
          </motion.h2>

          <motion.div
            className="card"
            initial={{ opacity: 0, y: 50, rotateX: -30 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          >
            <div className="flex items-start gap-5">
              <motion.div
                className="shrink-0 w-14 h-14 rounded-xl bg-[var(--accent-subtle)] border border-[var(--accent-border)] flex items-center justify-center"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <GraduationCap size={24} className="text-[var(--accent)]" />
              </motion.div>
              <div className="flex-1">
                <motion.h3
                  className="text-lg md:text-xl font-semibold text-[var(--text-primary)] mb-2"
                  whileHover={{ color: "var(--accent-hover)", x: 5 }}
                >
                  {education.degree}
                </motion.h3>
                <p className="text-sm md:text-base text-[var(--text-secondary)] mb-3">
                  {education.institution}
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm md:text-base text-[var(--text-tertiary)]">
                  <span>{education.period}</span>
                  <span className="text-[var(--text-muted)]">·</span>
                  <span>
                    CGPA:{" "}
                    <motion.span
                      className="stat-highlight"
                      whileHover={{
                        scale: 1.2,
                        display: "inline-block",
                        rotate: [0, -10, 10, 0],
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {education.cgpa}
                    </motion.span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
