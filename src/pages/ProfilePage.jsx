import GreetingHero from '../Components/GreetingHero/GreetingHero'
import NavBar from '../Components/Navbar/NavBar'
import ProfilePicture from '../Components/ProfilePicture/ProfilePicture'

const ProfilePage = () => {
  return (
    <>
      <NavBar currentPage="Profile" />
      <GreetingHero />
      <ProfilePicture />
    </>
  )
}

export default ProfilePage
