import React from 'react'
import styles from "./css/Footer.module.css"
const Footer = () => {
  return (
 <footer className={styles.footer}>
  <p className={styles.copyright}>
    © 2024 ARCHITECT_IN_THE_SHELL. ALL RIGHTS RESERVED.
  </p>

  <div className={styles.socials}>
    <a href="#">GitHub</a>
    <a href="#">LinkedIn</a>
    <a href="#">Twitter</a>
    <a href="#">Email</a>
  </div>
</footer>
  )
}

export default Footer
