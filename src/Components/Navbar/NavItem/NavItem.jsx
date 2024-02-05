import styles from './NavItem.module.css'
import { Link } from 'react-router-dom'
const NavItem = ({ content, isActive }) => {
  const linkPath = `${content === 'Home' ? '/' : '/' + content}`

  return (
    <li className={isActive ? styles.active : styles.noActive}>
      <Link to={linkPath}>{content}</Link>
    </li>
  )
}

export default NavItem
