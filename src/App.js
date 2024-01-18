import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Heropage from './Components/Hero/Heropage'
import Slider from './Components/Slider/Slider'
import About from './Components/About/About'
import Explore from './Components/Explore/Explore'
import Review from './Components/Review/Review'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
    <Navbar/>
    <Heropage/>
    <Slider/>
    <About/>
    <Explore/>
    <Review/>
    <Footer/>
    </>
  )
}

export default App
