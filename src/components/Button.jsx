import styles from "./css/Button.module.css"
const Button = ({text,variant}) => {
  return (
    <>
    {/* <button className={styles.primary}>{text}</button> */}
    <button className={`${styles.button} ${styles[variant]}`}>{text}</button>
    </>
    
  )
}

export default Button
