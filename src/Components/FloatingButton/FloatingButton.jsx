import styles from './FloatingButton.module.css'

const FloatingButton = () => {
  return (
    <div className={styles.buttonWrapper}>
      <a
        className={[styles.floatingButton, 'animated', 'fourth'].join(
          ' '
        )}
        href=""
      >
        <div className={styles.logo}></div>
        <p>Shop</p>
      </a>
    </div>
  )
}

export default FloatingButton
