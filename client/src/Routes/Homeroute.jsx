// import Footer from '@/Modules/Header/Footer'
import AboutSection from '@/Modules/Pages/Home/AboutSection'
import ContactSection from '@/Modules/Pages/Home/ContactSection'
import FacilitiesSection from '@/Modules/Pages/Home/FacilityCard'
import Homecontent from '@/Modules/Pages/Home/Homecontent'
import Home from '@/Modules/Pages/Home/Homepage'
import TestimonialSlider from '@/Modules/Pages/Home/TestimonialSlider'
import React from 'react'
 import { Helmet } from 'react-helmet';

const Homeroute = () => {
  return (
    <div>
      <Helmet>
        <title>ALG Ladies Hostel | Safe Ladies Hostel in Puducherry</title>
        <meta name="description" content="ALG Ladies Hostel offers safe, comfortable accommodation for students and working women in Orleanpet, Puducherry." />
        <link rel="canonical" href="https://algladieshostel.com/" />
      </Helmet>
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