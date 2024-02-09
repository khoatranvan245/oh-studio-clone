import styles from './AboutSection.module.css'
const AboutSection = () => {
  return (
    <section className='animated first'>
      <p className="token">About</p>
      <p className={styles.aboutDescription}>
        A freelance designer based in the UK. I combine my experience
        in product and brand to solve problems, tell stories, and
        create compelling experiences.
      </p>
    </section>
  )
}

export default AboutSection
