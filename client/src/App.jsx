import React from 'react'
import Navbar from './Modules/Header/Navbar'
import Mainroute from './Routes/Mainroute'
import Footer from './Modules/Header/Footer'
import ScrollToTop from './Modules/ScrollToTop'
import WhatsAppBtn from './Modules/WhatsAppWidget'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Mainroute/>
      <ScrollToTop />
      <Footer/>
      <WhatsAppBtn/>
    </div>
  )
}

export default App