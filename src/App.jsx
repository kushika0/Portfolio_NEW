import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default App
