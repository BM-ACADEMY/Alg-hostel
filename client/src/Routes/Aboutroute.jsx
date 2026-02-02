import Aboutpage from '@/Modules/Pages/About/Aboutpage'
import React from 'react'
import { Helmet } from 'react-helmet';

const Aboutroute = () => {
  return (
    <div>
      <Helmet>
        <title>About Us | ALG Ladies Hostel Puducherry</title>
        <meta name="description" content="Learn about ALG Ladies Hostel facilities, our mission to provide safe women's accommodation in Puducherry, and our amenities." />
        <link rel="canonical" href="https://algladieshostel.com/about" />
      </Helmet>
        <Aboutpage/>
    </div>
  )
}

export default Aboutroute