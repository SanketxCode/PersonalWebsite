import { siteConfig } from "@/lib/data";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="section-title text-center">About</h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="content-spacing text-[var(--text-secondary)] text-base md:text-lg text-center">
              <p>
                I&apos;m a Full Stack Developer at{" "}
                <span className="text-[var(--text-primary)] font-medium">
                  Barclays
                </span>
                , where I work on modernizing enterprise-grade applications and
                building reliable internal tooling. My day-to-day spans React
                frontends, Spring Boot services, CI/CD pipelines, and security
                compliance — the kind of work where attention to detail compounds
                over time.
              </p>
              <p>
                Before joining full-time, I interned at Barclays building
                internal dashboards backed by Oracle and Spring Boot APIs. I
                graduated from{" "}
                <span className="text-[var(--text-primary)] font-medium">
                  Dr D. Y. Patil Institute of Technology
                </span>{" "}
                with a <span className="stat-highlight">9.31 CGPA</span> in
                Computer Engineering.
              </p>
              <p>
                Outside of work, I spend time on competitive programming —
                I&apos;m rated{" "}
                <span className="stat-highlight">1575+ on LeetCode</span> (top
                25%) and have solved 350+ DSA problems. I enjoy the clarity that
                comes from thinking through hard problems, and I try to bring
                that same rigor to everything I build.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
