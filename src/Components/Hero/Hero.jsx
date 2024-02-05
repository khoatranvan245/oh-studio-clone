import styles from './Hero.module.css'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.slogan}>
        <p>
          A brand and product designer working with clients globally
        </p>
      </div>
      <div className={styles.expertise}>
        <ul>
          <li>Expertise</li>
          <li className={styles.expertiseList}>Branding</li>
          <li className={styles.expertiseList}>Product</li>
          <li className={styles.expertiseList}>Design Systems</li>
        </ul>
      </div>
    </div>
  )
}

export default Hero
