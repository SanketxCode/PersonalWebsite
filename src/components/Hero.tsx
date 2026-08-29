import { siteConfig } from "@/lib/data";
import { Reveal } from "./Reveal";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { Mail, FileText, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="hero-glow" />

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <Reveal>
            <p className="section-title mb-8 text-center">Software Engineer</p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[var(--text-primary)] mb-10 leading-[1.05]">
              {siteConfig.name}
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-xl sm:text-2xl md:text-3xl text-[var(--text-secondary)] mb-8 leading-[1.4] max-w-4xl mx-auto">
              {siteConfig.headline}
            </p>
          </Reveal>

          <Reveal delay={250}>
            <p className="text-base md:text-lg lg:text-xl text-[var(--text-tertiary)] max-w-3xl mx-auto mb-16 leading-[1.7]">
              {siteConfig.intro}
            </p>
          </Reveal>

          <Reveal delay={350}>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-24">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <GithubIcon size={18} />
                GitHub
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <LinkedinIcon size={18} />
                LinkedIn
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="btn btn-primary"
              >
                <Mail size={18} />
                Get in Touch
              </a>
              <a
                href={siteConfig.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <FileText size={18} />
                Resume
              </a>
            </div>
          </Reveal>

          <Reveal delay={500}>
            <a
              href="#about"
              className="inline-flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-tertiary)] transition-colors animate-bounce"
              aria-label="Scroll to About section"
            >
              <ArrowDown size={24} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
