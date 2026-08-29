"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title text-center"
          >
            Skills
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-10 md:gap-12">
            {Object.entries(skills).map(([category, items], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                <motion.h3
                  className="text-xs tracking-[0.15em] uppercase text-[var(--text-muted)] font-semibold mb-4 text-center sm:text-left"
                  whileHover={{ color: "var(--accent)", scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {category}
                </motion.h3>
                <motion.div
                  className="flex flex-wrap justify-center sm:justify-start gap-2"
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.05,
                      },
                    },
                  }}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  {items.map((skill, i) => (
                    <motion.span
                      key={skill}
                      className="skill-pill"
                      variants={{
                        hidden: { opacity: 0, scale: 0.8, rotate: -10 },
                        show: { opacity: 1, scale: 1, rotate: 0 },
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.3 },
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
