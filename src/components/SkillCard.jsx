import styles from "./css/SkillCard.module.css";

const skills = [
  "React",
  "Next.js",
  "JavaScript",
  "Node.js",
  "MongoDB",
  "C++",
  "Python",
  "Git",
  "GitHub",
  "Open Source",
  "Express.js",
  "FastAPI",
  "REST API"
];

const SkillCard = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        TECHNICAL ARSENAL
      </h2>

      <div className={styles.skills}>
        {skills.map((skill) => (
          <span
            key={skill}
            className={styles.skill}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default SkillCard;