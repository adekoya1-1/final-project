import React from 'react'
import tweet from '../assets/images/twitter.png'
import face from '../assets/images/facebook.png'
import insta from '../assets/images/instagram.png'
import '../styles/footer.css'

const Footer = () => {
  return (
      <div className='foot'>
          <h3>Find & follow us</h3>
          <div>
              <img src={tweet} alt="" />
              <img src={face} alt="" />
              <img src={insta} alt="" />
          </div>
          <p>Tel: (233) 678-0202</p>
          <p>Fax: 0300000025</p>
          <p>Email: medkit@gmail.com</p>
          <hr />
          <p>Copyright 2023 All Rights Reserved</p>
    </div>
  )
}

export default Footer