import ProjectMiniCard from "./ProjectMiniCard";
import projects from "@/data/projects";
import styles from "./css/ProjectGrid.module.css"

const ProjectGrid = () => {
  return (
    <div className={styles.container}>
      {projects.map((project) => (
        <ProjectMiniCard
          key={project.id}
          {...project}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;