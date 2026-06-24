import styles from "./css/SectionTitle.module.css"

const SectionTitle = ({title,desc}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{title}</h1>
      <p className={styles.desc}>{desc}</p>
    </div>
  )
}

export default SectionTitle
