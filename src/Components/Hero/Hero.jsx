import styles from './Hero.module.css'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={[styles.slogan, 'animated', 'first'].join(' ')}>
        <p>
          A brand and product designer working with clients globally
        </p>
      </div>
      <div className={[styles.expertise, 'animated', 'second'].join(' ')}>
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
