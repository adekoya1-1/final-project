import React from 'react'
import Banner from '../Services componet/Banner'
import Firstnavbar from '../components/Firstnavbar'
import Stuffs from '../Services componet/Stuffs'
import Footer from '../components/Footer'

const Services = () => {
  return (
    <div style={{backgroundColor: '#DEF1F9', width: "100%"}}>
      <Firstnavbar/>
      <Banner />
      <Stuffs />
      <Footer/>
    </div>
  )
}

export default Services