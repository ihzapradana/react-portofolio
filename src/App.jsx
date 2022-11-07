import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutMe from './components/Pages/AboutMe'
import Home from './components/Pages/Home'
import Blog from './components/Pages/Blog'
import Profile from './components/Pages/Profile'
import AboutMePage from './components/Pages/AboutMe'
import HomePage from './components/Pages/Home'
import ProfilePage from './components/Pages/Profile'
import BlogPage from './components/Pages/Blog'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/about' element={<AboutMePage />}/>
        <Route path='/profile' element={<ProfilePage />}/>
        <Route path='/block' element={<BlogPage />}/>
      </Routes>
    </>
  )
}

export default App;
