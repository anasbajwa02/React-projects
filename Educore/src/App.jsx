
import './App.css'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/Hero'
import Program from './components/program/Program'
import Campus from './components/campus/Campus'
import About from './components/aboutus/About'
import Testimonial from './components/testimonial/Testimonial'
import Contact from './components/Contact us/Contact'
import Basic from './components/basic_title/basic'
import Footer from './components/footer/footer'
import VedioPlayer from './components/vedioPlayer/vedioPlayer'
import { useState } from 'react'
function App() {
 const [play , setPlay] = useState(false)

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Basic Nameprop={"Our PROGRAM"} Titleprop={"What We Offer"}>
</Basic>
      <Program></Program>
      <About setPlayState={setPlay}></About>
       <Basic Nameprop={"Gallery"} Titleprop={"Campus Photos"}>
</Basic>
      <Campus></Campus>
      <Basic Nameprop={"TESTIMONIALS"} Titleprop={"What Student Says"
}></Basic>
      <Testimonial></Testimonial>
       <Basic Nameprop={"Contact Us"} Titleprop={"Get in Touch"}>
</Basic>
      <Contact></Contact>
      <Footer></Footer>
    <VedioPlayer setPlayState={setPlay} playState={play}></VedioPlayer>
    </>
  )
}

export default App
