import React from 'react'
import Firstnavbar from '../components/Firstnavbar'
import Banner from '../components/Banner'
import Covid from '../components/Covid'
import Specialty from '../components/Specialty'

const Home = () => {
  return (
      <div style={{backgroundColor: '#DEF1F9'}}>
          <Firstnavbar />
      <Banner />
      <Covid />
      <Specialty/>
    </div>
  )
}

export default Home