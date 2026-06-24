"use client";
import styles from "./css/Hero.module.css"

export default function Hero() {
  const stats = [
   {
    value: "04",
    label: "FEATURED BUILDS",
  },
  {
    value: "03",
    label: "MERGED PR",
  },
  {
    value: "2028",
    label: "GRADUATION TARGET",
  },
  {
    value: "ACTIVE",
    label: "LEARNING STATUS",
  },
];
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.grid}></div>

        <div className={styles.overlay}></div>

        <div className={styles.content}>
          <div className={styles.badge}>
            ▸ SYSTEM ONLINE
          </div>

          <h1 className={styles.title}>
            KRISHNA PANDEY:
            <br />
            <span className={styles.primary}>
              BUILDER
            </span>{" "}
            &{" "}
            <span className={styles.secondary}>
              OPEN SOURCE
            </span>
            <br />
            CONTRIBUTOR
          </h1>

          <p className={styles.description}>
            Architecting high-performance systems and
            leading vast open-source initiatives.
            Precision engineering meets kinetic design
            in the shell.
          </p>

          <div className={styles.actions}>
            <button className={styles.primaryBtn}>
              VIEW PROJECTS
            </button>

            <button className={styles.secondaryBtn}>
              INITIALIZE CONTACT
            </button>
          </div>
        </div>
      </section>

      <section className={styles.stats}>
  {stats.map((item, index) => (
    <div key={index} className={styles.stat}>
      <h3>{item.value}</h3>
      <p>{item.label}</p>
    </div>
  ))}
</section>
    </>
  );
}