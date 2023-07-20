import React from 'react'
import '../About styles/banner2.css'
import { Link } from 'react-router-dom'

const Banner2 = () => {
  return (
      <div>
          <div className='health'>
              <h2>Health is Wealth</h2>
              <p>Health is most important in your daily life. We strive to offer nothing but quality healthcare. You are rest assured your wellbeing and health are in safe hands.</p>
              <Link to="/appointment">
              <button className='btn'>Find a Doctor </button>
              </Link>
          </div>
    </div>
  )
}

export default Banner2