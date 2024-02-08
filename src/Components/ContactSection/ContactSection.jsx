import Footer from '../Footer/Footer'
import styles from './ContactSection.module.css'

const ContactSection = () => {
  return (
    <div className={styles.contactSection}>
      <div className={styles.slogan}>
        <p>Let's work together</p>
        <p>
          <a href="">Get in touch</a>
        </p>
      </div>

      <Footer />
    </div>
  )
}

export default ContactSection
