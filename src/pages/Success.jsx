import React from 'react'
import bell from "../assets/images/bell.png"
import "../styles/success.css"

const Success = () => {
  return (
    <div style={{backgroundColor: '#DEF1F9', height: '100vh'}}>
      <div className='succ'>
          <div className='full'>
              <p>Appointment Successful!</p>
          </div>
          <div className='bell'>
              <img src={bell} alt="" />
              <p>Go back to home page</p>
              <hr />
              <button>Continue</button>
          </div>
      </div>
      </div>
  )
}

export default Success