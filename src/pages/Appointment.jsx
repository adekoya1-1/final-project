import React from 'react'
import Secondnavbar from '../components/Secondnavbar'
import "../styles/appointment.css"
import lines from "../assets/images/Lines.png"

const Appointment = () => {
  return (
      <div>
          <Secondnavbar />
          <div style={{backgroundColor: '#DEF1F9', height: "100vh"}}>
              <div className='appp'>
                  <h2>MAKE AN APPOINTMENT</h2>
                  <div className='hrs'>
                    <img src={lines} alt="" />
                  </div>
                  <div className='date'>
                      <form>
                          <input type="text" placeholder='First Name*' className='place'/>
                          <input type="text" placeholder='Last Name*' className='place' />
                          <input type="number" placeholder='Phone no*' className='place' />
                          <input type="number" placeholder='Appointment Date*' className='place' />
                          
                      </form>
                  </div>
                  <div><button className='req'>REQUEST</button></div>
              </div>
          </div>
    </div>
  )
}

export default Appointment