import styles from "../../styles/Open-source.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const stats = [
  {
    icon: "↗",
    value: "01",
    label: "Merged Pull Request",
    badge: "OPEN SOURCE",
  },
  {
    icon: "⚡",
    value: "03+",
    label: "Contributions Submitted",
    badge: "COMMUNITY",
  },
  {
    icon: "⌘",
    value: "2026",
    label: "Contribution Journey Started",
    badge: "ACTIVE",
  },
];

const contributions = [
  {
    name: "homelab-monitor",
    role: "CONTRIBUTOR",
    desc: "Implemented a unified toast notification system and improved user feedback handling across the application.",
    tech: ["React", "TypeScript"],
    stars: "-",
    prs: "1",
  },

  {
    name: "Developer Portfolio",
    role: "CREATOR",
    desc: "Personal portfolio built with Next.js and CSS Modules featuring project showcases, open-source work and responsive design.",
    tech: ["Next.js", "JavaScript", "CSS Modules"],
    stars: "-",
    prs: "-",
  },

  {
    name: "VeriFy",
    role: "CREATOR",
    desc: "AI-powered fact-checking and news credibility analysis platform using modern web technologies and language models.",
    tech: ["Next.js", "Python", "FastAPI"],
    stars: "-",
    prs: "-",
  },
];

export default function OpenSourcePage() {
  return (
    <>
    <Navbar/>
    <main className={styles.page}>
      {/* HERO */}

      <section className={styles.hero}>
        <div className={styles.eyebrow}>
          <span></span>
          <p>SYSTEM.MODULE.OS</p>
        </div>

        <h1>
          OPEN SOURCE
          <br />
          CONTRIBUTOR
        </h1>

        <div className={styles.terminal}>
          <p>
            <span className={styles.orange}>
              root@architect
            </span>
            {" "}
            ~ % ./fetch_impact.sh --global
          </p>

          <p>{">"} Establishing connection to GitHub API... [OK]</p>
          <p>{">"} Aggregating cross-repository metrics... [OK]</p>
          <p>{">"} Compiling community impact vectors... [OK]</p>

          <div className={styles.output}>
            {">"} DATA STREAM SYNCED. READY FOR RENDER.
            <span className={styles.cursor}></span>
          </div>
        </div>
      </section>

      {/* STATS */}

      <section className={styles.statsGrid}>
        {stats.map((item) => (
          <article
            key={item.label}
            className={styles.statCard}
          >
            <div className={styles.watermark}>
              PR
            </div>

            <div className={styles.badge}>
              {item.badge}
            </div>

            <div className={styles.statIcon}>
              {item.icon}
            </div>

            <h2>{item.value}</h2>

            <span>{item.label}</span>
          </article>
        ))}
      </section>

      {/* COMMIT KINETICS */}

      <section className={styles.kinetics}>
        <div className={styles.sectionHeader}>
          <h2>Commit Kinetics</h2>

          <span>Last 365 Days</span>
        </div>

        <div className={styles.heatmap}>
          {[...Array(180)].map((_, i) => (
  <div
    key={i}
    className={`${styles.cell} ${
      [2, 15, 29, 34, 48, 67, 74, 91, 105, 126, 142, 159, 171].includes(i)
        ? styles.active
        : ""
    }`}
  />
))}
        </div>

        <div className={styles.legend}>
          <span>Less</span>

          <div className={styles.legendBoxes}>
            {[...Array(5)].map((_, i) => (
              <div key={i}></div>
            ))}
          </div>

          <span>More</span>
        </div>
      </section>

      {/* CONTRIBUTIONS */}

      <section className={styles.contributions}>
        <div className={styles.sectionHeader}>
          <h2>Core Contributions</h2>

          <a href="#">
            VIEW ALL GITHUB →
          </a>
        </div>

        <div className={styles.cards}>
          {contributions.map((item) => (
            <article
              key={item.name}
              className={styles.repoCard}
            >
              <div className={styles.repoTop}>
                <div className={styles.repoIcon}>
                  ▯
                </div>

                <div className={styles.repoRole}>
                  {item.role}
                </div>
              </div>

              <h3>{item.name}</h3>

              <p>{item.desc}</p>

              <div className={styles.divider}></div>

              <div className={styles.repoFooter}>
                <div className={styles.tech}>
                  {item.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>

                <div className={styles.metrics}>
                  <span>☆ {item.stars}</span>
                  <span>⇡ {item.prs}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
    <Footer/>
    </>
  );
}