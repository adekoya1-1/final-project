import React from 'react'
import Firstnavbar from '../components/Firstnavbar'
import Banner from '../contact/Banner'
import Otherstuff from '../contact/Otherstuff'
import Footer from '../components/Footer'

const Contact = () => {
  return (
      <div style={{backgroundColor: '#DEF1F9'}}>
          <Firstnavbar />
          <Banner />
      <Otherstuff />
      <Footer/>
    </div>
  )
}

export default Contact