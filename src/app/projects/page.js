import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import ProjectGrid from "@/components/ProjectGrid";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import projects from "@/data/projects";

import styles from "../../styles/Projectpage.module.css";

export default function ProjectsPage() {
  const featuredProject = projects[0];

  return (
    <>
    <Navbar/>
    <main className={styles.projectsPage}>

      {/* HERO */}

      <section className={styles.hero}>
        <div className={styles.eyebrow}>
          <span></span>
          <p>EST. 2024</p>
        </div>

        <SectionTitle
          title="PROJECT MATRIX"
          desc="A curated index of deployed architectural solutions, algorithmic integrations, and high-fidelity interfaces. Built for the modern distributed ecosystem."
        />
      </section>

      {/* FILTER BAR */}

      <section className={styles.controls}>
        <div className={styles.filters}>
          <button className={styles.active}>ALL SYSTEMS</button>
          <button>WEB INFRA</button>
          <button>AI INTEGRATION</button>
          <button>CRITICAL TOOLS</button>
        </div>

        <div className={styles.search}>
          <input
            type="text"
            placeholder="QUERY DATABASE..."
          />
        </div>
      </section>

      {/* FEATURED PROJECT */}

      <section className={styles.featured}>
        <ProjectCard
          image={featuredProject.logo}
          title={featuredProject.title}
          desc={featuredProject.desc}
          tech={featuredProject.tech}
          projectUrl={featuredProject.projectUrl}
        />
      </section>

      {/* PROJECT GRID */}

      <section className={styles.matrix}>
        <ProjectGrid />
      </section>

    </main>
    </>
  );
}