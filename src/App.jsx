import { Routes, Route, useLocation } from 'react-router-dom'
import ContactPage from './pages/ContactPage'
import ProfilePage from './pages/ProfilePage'
import HomePage from './pages/HomePage'
import { useEffect } from 'react'

const App = () => {
  const location = useLocation()

  useEffect(() => {
    const animatedList = document.querySelectorAll('.animated')
    const observer = new IntersectionObserver((entries) => {
      entries.map((entry) => {
        if (entry.isIntersecting) 
          if(entry.target.classList.contains('first')) entry.target.classList.add('popUp1')
          if(entry.target.classList.contains('second')) entry.target.classList.add('popUp2')
          if(entry.target.classList.contains('third')) entry.target.classList.add('popUp3')
          if(entry.target.classList.contains('fourth')) entry.target.classList.add('popUp4')
      })
    })
    animatedList.forEach((item) => observer.observe(item))
  }, [location.pathname])
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/Contact"
          element={<ContactPage />}
        />
        <Route
          path="/Profile"
          element={<ProfilePage />}
        />
      </Routes>
    </>
  )
}

export default App
