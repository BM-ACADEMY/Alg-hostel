// import Footer from '@/Modules/Header/Footer'
import AboutSection from '@/Modules/Pages/Home/AboutSection'
import ContactSection from '@/Modules/Pages/Home/ContactSection'
import FacilitiesSection from '@/Modules/Pages/Home/FacilityCard'
import Homecontent from '@/Modules/Pages/Home/Homecontent'
import Home from '@/Modules/Pages/Home/Homepage'
import TestimonialSlider from '@/Modules/Pages/Home/TestimonialSlider'
import React from 'react'

const Homeroute = () => {
  return (
    <div>
        <Home/>
        <Homecontent/>
        <AboutSection/>
        <FacilitiesSection/>
        <TestimonialSlider/>
        <ContactSection/>
        {/* <Footer/> */}
    </div>
  )
}

export default Homeroute