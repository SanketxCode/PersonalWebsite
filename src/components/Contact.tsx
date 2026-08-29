import { siteConfig } from "@/lib/data";
import { Reveal } from "./Reveal";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="section-title text-center">Contact</h2>
          </Reveal>

          <Reveal delay={100}>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-8 leading-[1.2]">
              Let&apos;s connect.
            </h3>
          </Reveal>

          <Reveal delay={150}>
            <p className="text-base md:text-lg lg:text-xl text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto leading-[1.7]">
              I&apos;m always open to discussing new opportunities, interesting
              projects, or anything related to software engineering.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href={`mailto:${siteConfig.email}`}
                className="btn btn-primary text-base"
              >
                <Mail size={18} />
                {siteConfig.email}
              </a>
            </div>
          </Reveal>

          <Reveal delay={250}>
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm md:text-base text-[var(--text-tertiary)]">
              <span className="inline-flex items-center gap-2">
                <Phone size={16} />
                {siteConfig.phone}
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin size={16} />
                {siteConfig.location}
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
