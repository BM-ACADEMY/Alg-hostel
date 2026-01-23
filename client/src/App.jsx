import React from 'react'
import Navbar from './Modules/Header/Navbar'
import Mainroute from './Routes/Mainroute'
import Footer from './Modules/Header/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Mainroute/>
      <Footer/>
    </div>
  )
}

export default App