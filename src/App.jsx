import { Route, Routes } from 'react-router-dom'
import AboutMePage from './components/Pages/AboutMe'
import HomePage from './components/Pages/Home'
import ProfilePage from './components/Pages/Profile'
import BlogPage from './components/Pages/Blog'
import './NavBar.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/about' element={<AboutMePage />}/>
        <Route path='/profile' element={<ProfilePage />}/>
        <Route path='/blog' element={<BlogPage />}/>
      </Routes>
    </>
  )
}

export default App;
