import AboutSection from '../Components/AboutSection/AboutSection'
import ExperienceSection from '../Components/ExperienceSection/ExperienceSection'
import GreetingHero from '../Components/GreetingHero/GreetingHero'
import NavBar from '../Components/Navbar/NavBar'
import ProfilePicture from '../Components/ProfilePicture/ProfilePicture'

const ProfilePage = () => {
  return (
    <>
      <NavBar currentPage="Profile" />
      <GreetingHero />
      <ProfilePicture />
      <AboutSection/>
      <ExperienceSection/>
    </>
  )
}

export default ProfilePage
