import GreetingHero from '../Components/GreetingHero/GreetingHero'
import NavBar from '../Components/Navbar/NavBar'

const ProfilePage = () => {
    return (
        <>
            <NavBar currentPage='Profile'/>
            <GreetingHero/>
        </>
    )
}   

export default ProfilePage