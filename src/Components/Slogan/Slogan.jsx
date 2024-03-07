import styles from './Slogan.module.css'

const Slogan = () => {
  return (
    <div className={[styles.slogan, 'animated first'].join(' ')}>
      <p className="animated first">Let's work together</p>
      <p className="animated second">
        <a>Get in touch</a>
      </p>
    </div>
  )
}

export default Slogan
