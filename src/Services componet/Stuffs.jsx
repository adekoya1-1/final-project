import React from 'react'
import '../Services styles/stuffs.css'
import covid from '../assets/images/Rectangle39.png'
import ambulance from '../assets/images/Rectangle40.png'
import gyne from '../assets/images/Rectangle42.png'
import paedia from '../assets/images/Rectangle43.png'
import optom from '../assets/images/Rectangle44.png'
import physi from '../assets/images/Rectangle45.png'
import covid2 from "../assets/images/covidi.png"
import ambulance2 from "../assets/images/ambulance1.png"
import gyne2 from "../assets/images/Gyne.png"
import paedia2 from "../assets/images/paed.png"
import optom2 from "../assets/images/optem.png"
import physi2 from "../assets/images/general.png"

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
              <div>
                  <img className='ame' src={covid} alt="" />
                  <img className='ame2' src={covid2} alt="" />
              </div>
          </div>
           <div className='amb'>
              <div className='vacc'>
                  <hr />
                  <h3>Ambulance</h3>
                  <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales utnetusamcorperquisque.Phasellus lectus ut suspendisse tortor eget sit senectus.</p>
                  <button className='btn'>See Details</button>
              </div>
              <div>
                  <img className='lance' src={ambulance} alt="" />
                  <img className='lance2' src={ambulance2} alt="" />
              </div>
          </div>
          <div className='covi'>
              <div className='vacc'>
                  <hr />
                  <h3>Gynecology</h3>
                  <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales utnetusamcorperquisque.Phasellus lectus ut suspendisse tortor eget sit senectus.</p>
                  <button className='btn'>See Details</button>
              </div>
              <div>
                  <img className='gyn' src={gyne} alt="" />
                  <img className='gyn2' src={gyne2} alt="" />
              </div>
          </div>
            <div className='amb'>
              <div className='vacc'>
                  <hr />
                  <h3>Paediatrics</h3>
                  <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales utnetusamcorperquisque.Phasellus lectus ut suspendisse tortor eget sit senectus.</p>
                  <button className='btn'>See Details</button>
              </div>
              <div>
                  <img className='pae' src={paedia} alt="" />
                  <img className='pae2' src={paedia2} alt="" />
              </div>
          </div>
            <div className='covi'>
              <div className='vacc'>
                  <hr />
                  <h3>Optometry</h3>
                  <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales utnetusamcorperquisque.Phasellus lectus ut suspendisse tortor eget sit senectus.</p>
                  <button className='btn'>See Details</button>
              </div>
              <div>
                  <img className='opt' src={optom} alt="" />
                  <img className='opt2' src={optom2} alt="" />
              </div>
          </div>
           <div className='amb'>
              <div className='vacc'>
                  <hr />
                  <h3>General Physician</h3>
                  <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales utnetusamcorperquisque.Phasellus lectus ut suspendisse tortor eget sit senectus.</p>
                  <button className='btn'>See Details</button>
              </div>
              <div>
                  <img className='phy' src={physi} alt="" />
                  <img className='phy2' src={physi2} alt="" />
              </div>
          </div>
    </div>
  )
}

export default Stuffs