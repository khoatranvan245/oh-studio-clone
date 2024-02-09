import styles from './GreetingHero.module.css'
const GreetingHero = () => {
  return (
    <div className={[styles.hero, 'animated first'].join(' ')}>
      <h1>Hey 👋🏼 I'm Oli </h1>
    </div>
  )
}

export default GreetingHero
