import React from 'react'
import '../Services styles/stuffs.css'
import covid from '../assets/images/Rectangle39.png'
import ambulance from '../assets/images/Rectangle40.png'
import gyne from '../assets/images/Rectangle42.png'
import paedia from '../assets/images/Rectangle43.png'
import optom from '../assets/images/Rectangle44.png'
import physi from '../assets/images/Rectangle45.png'

const Stuffs = () => {
  return (
      <div>
          <div className='covi'>
              <div className='vacc'>
                  <hr />
                  <h3>COVID-19 Vaccine Administration</h3>
                  <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales utnetusamcorperquisque.Phasellus lectus ut suspendisse tortor eget sit senectus.</p>
                  <button className='btn'>See Details</button>
              </div>
              <div><img src={covid} alt="" /></div>
          </div>
           <div className='amb'>
              <div className='vacc'>
                  <hr />
                  <h3>Ambulance</h3>
                  <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales utnetusamcorperquisque.Phasellus lectus ut suspendisse tortor eget sit senectus.</p>
                  <button className='btn'>See Details</button>
              </div>
              <div><img src={ambulance} alt="" /></div>
          </div>
          <div className='covi'>
              <div className='vacc'>
                  <hr />
                  <h3>Gynecology</h3>
                  <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales utnetusamcorperquisque.Phasellus lectus ut suspendisse tortor eget sit senectus.</p>
                  <button className='btn'>See Details</button>
              </div>
              <div><img src={gyne} alt="" /></div>
          </div>
            <div className='amb'>
              <div className='vacc'>
                  <hr />
                  <h3>Paediatrics</h3>
                  <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales utnetusamcorperquisque.Phasellus lectus ut suspendisse tortor eget sit senectus.</p>
                  <button className='btn'>See Details</button>
              </div>
              <div><img src={paedia} alt="" /></div>
          </div>
            <div className='covi'>
              <div className='vacc'>
                  <hr />
                  <h3>Optometry</h3>
                  <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales utnetusamcorperquisque.Phasellus lectus ut suspendisse tortor eget sit senectus.</p>
                  <button className='btn'>See Details</button>
              </div>
              <div><img src={optom} alt="" /></div>
          </div>
           <div className='amb'>
              <div className='vacc'>
                  <hr />
                  <h3>General Physician</h3>
                  <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales utnetusamcorperquisque.Phasellus lectus ut suspendisse tortor eget sit senectus.</p>
                  <button className='btn'>See Details</button>
              </div>
              <div><img src={physi} alt="" /></div>
          </div>
    </div>
  )
}

export default Stuffs