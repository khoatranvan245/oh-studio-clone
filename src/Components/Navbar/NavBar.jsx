import styles from './NavBar.module.css'
import NavItem from './NavItem/NavItem'
const navItemList = [
  {
    id: 1,
    content: 'Home',
    active: false,
  },
  {
    id: 2,
    content: 'Profile',
    active: false,
  },
  {
    id: 3,
    content: 'Contact',
    active: false,
  },
]

const NavBar = ({ currentPage }) => {
  navItemList.forEach((item) => {
    if (item.content === currentPage) item.active = true
    else item.active = false
  })
  
  return (
    <div className={styles.navBar}>
      <ul>
        {navItemList.map((item) => (
          <NavItem
            content={item.content}
            key={item.id}
            isActive={item.active}
          />
        ))}
      </ul>
    </div>
  )
}

export default NavBar
