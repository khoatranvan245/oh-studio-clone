import NavBar from '../Components/Navbar/NavBar'
import Hero from '../Components/Hero/Hero'
import ProductList from '../Components/ProductList/ProductList'
import Slogan from '../Components/Slogan/Slogan'
import Footer from '../Components/Footer/Footer'
import FloatingButton from '../Components/FloatingButton/FloatingButton'

const HomePage = () => {
  return (
    <>
       <NavBar currentPage = 'Home'/>
      <Hero />
      <ProductList />
      <Slogan />
      <Footer />
      <FloatingButton />
    </>
  )
}

export default HomePage
