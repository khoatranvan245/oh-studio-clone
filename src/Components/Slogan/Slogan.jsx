import styles from './Slogan.module.css'

const Slogan = () => {
  return (
    <div className={[styles.slogan, 'animated first'].join(' ')}>
      <p>Let's work together</p>
      <p>
        <a>Get in touch</a>
      </p>
    </div>
  )
}

export default Slogan
