import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.logo}>© Oli Harris 2023</p>
      <div className={styles.socialLinks}>
        <ul>
          <li>
            <a href="">Twitter</a>
          </li>
          <li>
            <a href="">Linkedin</a>
          </li>
          <li>
            <a href="">Mail</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
