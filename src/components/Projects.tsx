"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { projects } from "@/lib/data";
import { GithubIcon } from "./Icons";
import { ExternalLink, Code, Layers } from "lucide-react";
import { useState } from "react";

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
            style={{ marginBottom: "160px" }}
          >
            <h2 className="section-title mx-auto">Projects</h2>
            <p className="text-base md:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Building scalable applications with modern technologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        type: "spring",
        stiffness: 100,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative group"
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute -inset-0.5 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-hover)] rounded-3xl opacity-0 blur-xl transition-opacity duration-500"
        animate={{ opacity: isHovered ? 0.3 : 0 }}
      />

      {/* Card */}
      <div
        className="relative bg-[var(--bg-card)] border border-[var(--border)] rounded-3xl h-full flex flex-col"
        style={{ transform: "translateZ(50px)", padding: "48px 64px" }}
      >
        {/* Icon + Title row */}
        <div className="flex items-start justify-between mb-16">
          <div className="flex items-center gap-4">
            <motion.div
              className="w-14 h-14 rounded-2xl bg-[var(--accent-subtle)] border border-[var(--accent-border)] flex items-center justify-center"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Code size={28} className="text-[var(--accent)]" />
            </motion.div>
            <div>
              <motion.h3
                className="text-2xl font-bold text-[var(--text-primary)]"
                whileHover={{ color: "var(--accent-hover)" }}
              >
                {project.title}
              </motion.h3>
              <motion.div
                className="flex items-center gap-2 mt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Layers size={14} className="text-[var(--text-tertiary)]" />
                <span className="text-xs text-[var(--text-tertiary)] font-mono">
                  Full Stack Development
                </span>
              </motion.div>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4">
            {project.links.github && project.links.github !== "#" && (
              <motion.a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--accent-border)] transition-colors"
                whileHover={{ scale: 1.1, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`${project.title} GitHub`}
              >
                <GithubIcon size={20} />
              </motion.a>
            )}
            {project.links.video && project.links.video !== "#" && (
              <motion.a
                href={project.links.video}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--accent-border)] transition-colors"
                whileHover={{ scale: 1.1, rotate: -360 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`${project.title} demo`}
              >
                <ExternalLink size={20} />
              </motion.a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-12">
          {project.description}
        </p>

        {/* Details */}
        <ul className="styled-list text-sm md:text-base text-[var(--text-tertiary)] mb-16 flex-grow">
          {project.details.map((detail: string, i: number) => (
            <li key={i}>{detail}</li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="mt-auto pt-12 border-t border-[var(--border)]">
          <motion.div
            className="flex flex-wrap gap-2"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.05 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {project.tech.slice(0, 4).map((t: string) => (
              <motion.span
                key={t}
                className="text-xs font-mono px-4 py-2 rounded-full bg-[var(--accent-subtle)] text-[var(--accent-hover)] border border-[var(--accent-border)] font-medium"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                whileHover={{
                  scale: 1.1,
                  y: -2,
                  boxShadow: "0 4px 12px rgba(99, 102, 241, 0.2)",
                }}
                transition={{ duration: 0.2 }}
              >
                {t}
              </motion.span>
            ))}
            {project.tech.length > 4 && (
              <motion.span
                className="text-xs font-mono px-4 py-2 rounded-full bg-[var(--bg-tertiary)] text-[var(--text-tertiary)] border border-[var(--border)]"
                whileHover={{ scale: 1.05 }}
              >
                +{project.tech.length - 4} more
              </motion.span>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
