"use client";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ProjectGrid from "@/components/ProjectGrid";
import styles from "../styles/home.module.css"
import SkillCard from "@/components/SkillCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <Navbar/>
      <Hero />

  <section className={styles.section}>
  <div className={styles.topbar}>
    <h2 className={styles.title}>
      FEATURED OPERATIONS
    </h2>

    <a href="/projects" className={styles.link}>
      All Projects →
    </a>
  </div>

  <div className={styles.grid}>
    <ProjectGrid/>
  </div>
</section>
<SkillCard/>
<Footer/>
    </>
  );
}