import { siteConfig } from "@/lib/data";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "./Icons";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-12">
      <div className="container">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm md:text-base text-[var(--text-muted)]">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={siteConfig.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors"
              aria-label="LeetCode"
            >
              <LeetCodeIcon size={18} />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
