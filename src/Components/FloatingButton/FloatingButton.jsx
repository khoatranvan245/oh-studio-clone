import styles from './FloatingButton.module.css'

const FloatingButton = () => {
  return (
    <a className={styles.floatingButton}>
      <div className={styles.logo}></div>
      <p>Shop</p>
    </a>
  )
}

export default FloatingButton
