"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title text-center"
          >
            About
          </motion.h2>

          <motion.div
            style={{ opacity, scale }}
            className="content-spacing text-[var(--text-secondary)] text-base md:text-lg text-center"
          >
            {[
              <>
                I&apos;m a Full Stack Developer at{" "}
                <motion.span
                  className="text-[var(--text-primary)] font-medium"
                  whileHover={{
                    color: "var(--accent-hover)",
                    scale: 1.05,
                    display: "inline-block",
                  }}
                >
                  Barclays
                </motion.span>
                , where I work on modernizing enterprise-grade applications and
                building reliable internal tooling. My day-to-day spans React
                frontends, Spring Boot services, CI/CD pipelines, and security
                compliance — the kind of work where attention to detail compounds
                over time.
              </>,
              <>
                Before joining full-time, I interned at Barclays building
                internal dashboards backed by Oracle and Spring Boot APIs. I
                graduated from{" "}
                <motion.span
                  className="text-[var(--text-primary)] font-medium"
                  whileHover={{
                    color: "var(--accent-hover)",
                    scale: 1.05,
                    display: "inline-block",
                  }}
                >
                  Dr D. Y. Patil Institute of Technology
                </motion.span>{" "}
                with a{" "}
                <motion.span
                  className="stat-highlight"
                  whileHover={{ scale: 1.2, display: "inline-block" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  9.31 CGPA
                </motion.span>{" "}
                in Computer Engineering.
              </>,
              <>
                Outside of work, I spend time on competitive programming —
                I&apos;m rated{" "}
                <motion.span
                  className="stat-highlight"
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, -5, 5, 0],
                    display: "inline-block",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  1575+ on LeetCode
                </motion.span>{" "}
                (top 25%) and have solved 350+ DSA problems. I enjoy the clarity
                that comes from thinking through hard problems, and I try to bring
                that same rigor to everything I build.
              </>,
            ].map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
