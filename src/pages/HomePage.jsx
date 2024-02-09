import NavBar from '../Components/Navbar/NavBar'
import Hero from '../Components/Hero/Hero'
import ProductList from '../Components/ProductList/ProductList'
import Slogan from '../Components/Slogan/Slogan'
import Footer from '../Components/Footer/Footer'
import FloatingButton from '../Components/FloatingButton/FloatingButton'
import { useEffect } from 'react'

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <NavBar currentPage="Home" />
      <Hero />
      <ProductList />
      <Slogan />
      <Footer />
      <FloatingButton />
    </>
  )
}

export default HomePage
