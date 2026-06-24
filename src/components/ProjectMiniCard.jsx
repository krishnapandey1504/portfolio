import React from 'react'
import styles from "./css/ProjectMiniCard.module.css"
import Image from 'next/image'
const ProjectMiniCard = ({title,logo,desc,label,tech}) => {
    console.log({
  title,
  desc,
  tech,
  label,
  logo
});
  return (
    <div className={styles.container}>
        <div className={styles.label}>
            {label}
        </div>
        <div className={styles.image}>
            <Image src={logo} alt={title} height={50} width={50}/>
        </div>
        <div className={styles.title}>
            <h3>{title}</h3>
        </div>
        <div className={styles.desc}>
            <p>{desc}</p>
        </div>
        <div className={styles.divider}>

        </div>
        <div className={styles.tech}>
            {tech?.map((item)=>(
                <span key={item}>{item}</span>
            ))}
        </div>
    </div>
  )
}

export default ProjectMiniCard
