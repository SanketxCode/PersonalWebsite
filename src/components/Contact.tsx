"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title text-center"
          >
            Contact
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-12 leading-[1.2]"
          >
            {"Let's connect.".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.03 }}
                whileHover={{
                  scale: 1.2,
                  color: "var(--accent-hover)",
                  display: "inline-block",
                }}
              >
                {char === " " ? " " : char}
              </motion.span>
            ))}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base md:text-lg lg:text-xl text-[var(--text-secondary)] mb-16 max-w-2xl mx-auto leading-[1.7]"
          >
            I&apos;m always open to discussing new opportunities, interesting
            projects, or anything related to software engineering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.a
              href={`mailto:${siteConfig.email}`}
              className="btn btn-primary text-base"
              whileHover={{
                scale: 1.05,
                y: -3,
                boxShadow: "0 10px 30px rgba(99, 102, 241, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Mail size={18} />
              </motion.div>
              {siteConfig.email}
            </motion.a>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-8 text-sm md:text-base text-[var(--text-tertiary)]"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.2, delayChildren: 0.8 },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.span
              className="inline-flex items-center gap-2"
              variants={{
                hidden: { opacity: 0, x: -20 },
                show: { opacity: 1, x: 0 },
              }}
              whileHover={{ scale: 1.1, color: "var(--text-secondary)" }}
            >
              <Phone size={16} />
              {siteConfig.phone}
            </motion.span>
            <motion.span
              className="inline-flex items-center gap-2"
              variants={{
                hidden: { opacity: 0, x: 20 },
                show: { opacity: 1, x: 0 },
              }}
              whileHover={{ scale: 1.1, color: "var(--text-secondary)" }}
            >
              <MapPin size={16} />
              {siteConfig.location}
            </motion.span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
