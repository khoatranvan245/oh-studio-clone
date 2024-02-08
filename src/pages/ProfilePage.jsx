import AboutSection from '../Components/AboutSection/AboutSection'
import ClientSection from '../Components/ClientSection/ClientSection'
import ExperienceSection from '../Components/ExperienceSection/ExperienceSection'
import GreetingHero from '../Components/GreetingHero/GreetingHero'
import NavBar from '../Components/Navbar/NavBar'
import ProfilePicture from '../Components/ProfilePicture/ProfilePicture'
import Footer from '../Components/Footer/Footer'
import Slogan from '../Components/Slogan/Slogan'

const ProfilePage = () => {
  return (
    <>
      <NavBar currentPage="Profile" />
      <GreetingHero />
      <ProfilePicture />
      <AboutSection/>
      <ExperienceSection/>
      <ClientSection/>
      <Slogan/>
      <Footer/>
    </>
  )
}

export default ProfilePage
