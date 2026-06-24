import Image from "next/image";
import styles from "../../styles/About.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const directives = [
  {
    id: "01",
    title: "Full-Stack Development",
    description:
      "Building modern web applications with Next.js, React and Node.js while focusing on clean architecture and responsive user experiences.",
    tags: ["Next.js", "React", "Node.js"],
    featured: true,
  },
  {
    id: "02",
    label: "LEARNING",
    title: "DSA & Problem Solving",
    description:
      "Strengthening algorithmic thinking, data structures and coding interview fundamentals through consistent practice.",
  },
  {
    id: "03",
    label: "OPEN SOURCE",
    title: "Community Contributions",
    description:
      "Contributing to open-source projects and learning collaborative software development workflows.",
  },
];

const timeline = [
  {
    title: "B.Tech CSE Student",
    date: "2024 - Present",
    description:
      "Pursuing Computer Science while building projects in web development, open source and AI-powered applications.",
  },
  {
    title: "Open Source Contributor",
    date: "2026",
    description:
      "Made contributions to community projects and successfully merged pull requests into open-source repositories.",
  },
  {
    title: "Started Programming Journey",
    date: "2023",
    description:
      "Began learning programming, web development and software engineering fundamentals.",
  },
];

export default function About() {
  return (
    <>
    <Navbar/>
    <main className={styles.about}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.label}>
            ● ORIGIN STORY
          </div>

          <h1 className={styles.title}>
            <span className={styles.white}>
              The Architect in
            </span>

            <span className={styles.purple}>
              The Shell.
            </span>
          </h1>

          <p className={styles.description}>
            I build systems because I believe logic is the closest thing
            we have to magic. My journey isn't just about writing code;
            it's about constructing elegant, resilient architectures
            that solve complex problems and withstand the test of time.
          </p>
        </div>

        <div className={styles.portrait}>
          <Image
            src="/img/Photo.png"
            alt="Portrait"
            fill
            priority
            className={styles.image}
          />
        </div>
      </section>

      {/* DIRECTIVES */}

      <section className={styles.directives}>
        <h2>Current Directives</h2>

        <div className={styles.headingLine}></div>

        <div className={styles.directiveGrid}>
          <article className={styles.primaryCard}>
            <div className={styles.corner}></div>

            <div className={styles.icon}>{"</>"}</div>

            <h3>{directives[0].title}</h3>

            <p>{directives[0].description}</p>

            <div className={styles.tags}>
              {directives[0].tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>

          <div className={styles.sideCards}>
            {directives
              .filter((item) => !item.featured)
              .map((item) => (
                <article
                  key={item.id}
                  className={styles.smallCard}
                >
                  <div className={styles.corner}></div>

                  <div className={styles.cardLabel}>
                    {item.id} // {item.label}
                  </div>

                  <div className={styles.icon}>{"</>"}</div>

                  <h4>{item.title}</h4>

                  <p>{item.description}</p>
                </article>
              ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}

      <section className={styles.timeline}>
        <h2>Chronology</h2>

        <div className={styles.headingLineOrange}></div>

        <div className={styles.timelineWrapper}>
          <div className={styles.centerLine}></div>

          {timeline.map((item, index) => (
  <div
    key={index}
    className={styles.timelineItem}
  >
    {index % 2 === 0 ? (
      <>
        <div className={styles.timelineContent}>
          <h3>{item.title}</h3>
          <span>{item.date}</span>
        </div>

        <div className={styles.timelineDot}></div>

        <div className={styles.timelineDescription}>
          <p>{item.description}</p>
        </div>
      </>
    ) : (
      <>
        <div className={styles.timelineDescription}>
          <p>{item.description}</p>
        </div>

        <div className={styles.timelineDot}></div>

        <div className={styles.timelineContent}>
          <h3>{item.title}</h3>
          <span>{item.date}</span>
        </div>
      </>
    )}
  </div>
))}
        </div>
      </section>
    </main>
    <Footer/>
    </>
  );
}