"use client";

import { motion } from "framer-motion";
import { achievements } from "@/lib/data";
import { Trophy } from "lucide-react";

export function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title text-center"
          >
            Achievements
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
            {achievements.map((item, idx) => (
              <motion.div
                key={idx}
                className="card group"
                initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.15,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: [0, -20, 20, 0], scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Trophy
                      size={20}
                      className="text-[var(--accent)] shrink-0 mt-1"
                    />
                  </motion.div>
                  <div>
                    <motion.p
                      className="text-sm md:text-base font-medium text-[var(--text-primary)] mb-1 leading-snug"
                      whileHover={{ x: 5 }}
                    >
                      {item.title}
                    </motion.p>
                    {item.detail && (
                      <p className="text-xs md:text-sm text-[var(--text-tertiary)]">
                        {item.detail}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
