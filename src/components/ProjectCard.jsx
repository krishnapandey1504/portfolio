import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import styles from "./css/Project.module.css";

const ProjectCard = ({
  image,
  title,
  desc,
  tech,
  projectUrl,
}) => {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={title}
          width={800}
          height={500}
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>

          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <ArrowUpRight className={styles.arrow} />
          </a>
        </div>

        <p className={styles.description}>
          {desc}
        </p>

        <div className={styles.techStack}>
          {tech.map((item) => (
            <span
              key={item}
              className={styles.tech}
            >
              {item}
            </span>
          ))}
        </div>

        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cta}
        >
          INITIALIZE PROTOCOL
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;