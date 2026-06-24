import styles from "../../styles/Skill.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SkillsPage() {
  return (
    <>
      <Navbar />

      <main className={styles.skillsPage}>
        <section className={styles.hero}>
          <span className={styles.label}>
            ■ SYSTEM SPECIFICATIONS
          </span>

          <h1 className={styles.title}>
            TECH STACK
            <br />
            <span>& CAPABILITIES</span>
          </h1>

          <p className={styles.description}>
            Building modern web applications with Next.js,
            JavaScript and Python while exploring open source,
            backend engineering and AI-powered solutions.
          </p>
        </section>

        <section className={styles.grid}>
          {/* Frontend */}

          <article className={styles.card}>
            <div className={styles.cardTag}>UI/UX</div>

            <h3>Frontend</h3>

            <div className={styles.techs}>
              <span>React</span>
              <span>Next.js</span>
              <span>JavaScript</span>
              <span>CSS Modules</span>
              <span>Framer Motion</span>
            </div>
          </article>

          {/* Backend */}

          <article className={styles.card}>
            <div className={styles.cardTag}>SERVER</div>

            <h3>Backend</h3>

            <div className={styles.techs}>
              <span>Node.js</span>
              <span>Express</span>
              <span>Python</span>
              <span>REST API</span>
            </div>
          </article>

          {/* Programming Languages */}

          <article className={styles.card}>
            <div className={styles.cardTag}>LANG</div>

            <h3>Programming</h3>

            <div className={styles.techs}>
              <span>JavaScript</span>
              <span>Python</span>
              <span>C++</span>
            </div>
          </article>

          {/* Databases */}

          <article className={styles.card}>
            <div className={styles.cardTag}>DATA</div>

            <h3>Databases</h3>

            <div className={styles.techs}>
              <span>MongoDB</span>
              <span>MongoDB Atlas</span>
              <span>MySQL</span>
            </div>
          </article>

          {/* Tools */}

          <article className={styles.card}>
            <div className={styles.cardTag}>OPS</div>

            <h3>Tools & Infrastructure</h3>

            <div className={styles.techs}>
              <span>Git</span>
              <span>GitHub</span>
              <span>Linux</span>
              <span>Vercel</span>
            </div>
          </article>

          {/* AI / ML */}

          <article className={styles.card}>
            <div className={styles.cardTag}>INTELLIGENCE</div>

            <h3>AI / ML</h3>

            <div className={styles.techs}>
              <span>Python</span>
              <span>OpenAI API</span>
              <span>Transformers</span>
              <span>Hugging Face</span>
            </div>
          </article>
        </section>

        <section className={styles.timeline}>
          <div className={styles.timelineLabel}>
            ■ LEARNING VECTOR
          </div>

          {/* DSA */}

          <div className={styles.timelineItem}>
            <div className={styles.dot}></div>

            <div>
              <h4>DSA & Problem Solving</h4>

              <span>Current Focus</span>

              <p>
                Currently strengthening data structures,
                algorithms and coding interview fundamentals
                through consistent practice and problem solving.
              </p>
            </div>
          </div>

          {/* Full Stack */}

          <div className={styles.timelineItem}>
            <div className={styles.dotMuted}></div>

            <div>
              <h4>Full-Stack Development</h4>

              <span>Established Baseline</span>

              <p>
                Building responsive frontend applications,
                backend services and REST APIs using modern
                JavaScript ecosystems.
              </p>
            </div>
          </div>

          {/* Open Source */}

          <div className={styles.timelineItem}>
            <div className={styles.dotMuted}></div>

            <div>
              <h4>Open Source Contributions</h4>

              <span>Current Journey</span>

              <p>
                Contributing to community-driven projects,
                learning collaborative development workflows
                and improving real-world software systems.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}