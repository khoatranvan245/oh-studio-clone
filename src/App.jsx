import { Routes, Route } from 'react-router-dom'
import ContactPage from './pages/ContactPage'
import ProfilePage from './pages/ProfilePage'
import HomePage from './pages/HomePage'


const App = () => {
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
