import Image from "next/image";
import styles from "../../../styles/Project-Detail.module.css";

export default function ProjectDetail() {
  return (
    <main className={styles.projectPage}>
      
      {/* HERO */}

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.meta}>
            <span>CASE STUDY</span>
            <span>2024</span>
          </div>

          <h1 className={styles.title}>
            NEXUS VOID PROTOCOL
          </h1>

          <p className={styles.description}>
            A high-performance, distributed state management engine designed
            to handle real-time telemetry data for large-scale microservice
            architectures. Engineered with a focus on zero-latency data
            replication and fault tolerance.
          </p>

          <div className={styles.actions}>
            <a href="#">
              {"</>"} View Source
            </a>

            <a href="#">
              ↗ Live Demo
            </a>
          </div>
        </div>
      </section>

      {/* STACK */}

      <section className={styles.stack}>
        {[
          "Rust",
          "Go",
          "gRPC",
          "Redis Cluster",
          "Kubernetes",
          "WebSockets"
        ].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </section>

      {/* CONTENT */}

      <section className={styles.grid}>

        {/* PROBLEM */}

        <article className={styles.problem}>
          <div className={styles.cardLabel}>
            01.0 // THE PROBLEM
          </div>

          <h2>Data Velocity Bottlenecks</h2>

          <p>
            Existing telemetry ingestion pipelines were failing to process
            burst traffic effectively, leading to critical latency spikes
            during peak load. The architecture required a shift from a
            traditional polling mechanism to a push-based,
            event-driven model capable of handling 50k+ events per second
            without dropping packets.
          </p>

          <ul>
            <li>High latency during traffic surges.</li>
            <li>Data loss in volatile network conditions.</li>
            <li>Inefficient resource utilization in legacy services.</li>
          </ul>
        </article>

        {/* IMAGE */}

        <article className={styles.visual}>
          <Image
            src="/img/Hero-Background.png"
            alt="Project"
            fill
            className={styles.image}
          />
        </article>

        {/* EXECUTION */}

        <article className={styles.execution}>
          <div className={styles.cardLabel}>
            02.0 // EXECUTION
          </div>

          <h3>Rust-Based Ingestion Node</h3>

          <p>
            Rewrote the core ingestion service in Rust to leverage its
            zero-cost abstractions and memory safety guarantees.
            Implemented a custom lock-free ring buffer for intra-thread
            communication, drastically reducing context switching overhead.
          </p>

          <pre>
{`// Example snippet: Lock-free channel
let (tx, rx) = crossbeam::channel::bounded(100_000);

thread::spawn(move || {
  while let Ok(msg) = rx.recv() {
      process_telemetry(msg);
  }
});`}
          </pre>
        </article>

        {/* OUTCOME */}

        <article className={styles.outcomes}>
          <div className={styles.cardLabel}>
            03.0 // OUTCOMES
          </div>

          <h3>System Stabilization</h3>

          <p>
            The new architecture deployed to production resulted in
            immediate and measurable improvements across all key
            performance indicators.
          </p>

          <div className={styles.stats}>
            <div>
              <strong>99.9%</strong>
              <span>Uptime Maintained</span>
            </div>

            <div>
              <strong>-85%</strong>
              <span>Latency Reduction</span>
            </div>

            <div>
              <strong>50k+</strong>
              <span>Events / Sec</span>
            </div>

            <div>
              <strong>0%</strong>
              <span>Data Dropped</span>
            </div>
          </div>
        </article>

      </section>

    </main>
  );
}