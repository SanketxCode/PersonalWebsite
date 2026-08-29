"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "./Icons";
import { Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] py-12">
      <div className="container">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <motion.p
            className="text-sm md:text-base text-[var(--text-muted)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            © {currentYear} {siteConfig.name}. All rights reserved.
          </motion.p>

          <motion.div
            className="flex items-center gap-6"
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
            {[
              { href: siteConfig.github, icon: GithubIcon, label: "GitHub" },
              {
                href: siteConfig.linkedin,
                icon: LinkedinIcon,
                label: "LinkedIn",
              },
              {
                href: siteConfig.leetcode,
                icon: LeetCodeIcon,
                label: "LeetCode",
              },
              { href: `mailto:${siteConfig.email}`, icon: Mail, label: "Email" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={
                  social.href.startsWith("mailto") ? undefined : "_blank"
                }
                rel={
                  social.href.startsWith("mailto")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors"
                aria-label={social.label}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  color: "var(--accent)",
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
