import React from 'react'
import './Explore.css'
import { CiSearch } from "react-icons/ci";
import Exploreslider from '../Exploreslider/Exploreslider';

function Explore() {
  return (
    <>
    <section className='explore-main'>
      <div className='radius-box'> </div>
        <div className='explore-container'>
            <div className='explore-main-good'>
                <div className='left-section-explore'>
                  <div className='heading-s'>
                    <h1>Lets Explore The</h1>
                    <h1>Beauty of the world</h1>

                  </div>
                  <div className='serch-box'>
                    <div className='Locations'>
                      <h2>Location</h2>
                      <p>Your destination</p>

                    </div>
                    <div className='Locations'>
                      <h2>Date</h2>
                      <p>Your destination</p>

                    </div>
                    <div className='Locations'>
                      <button className='btn'><CiSearch className='icoooons' /></button>

                    </div>


                  </div>

                </div>
                <div className='right-section'>
                  <Exploreslider/>
                  

                </div>

            </div>
            </div>

       

    </section>
    </>
  )
}

export default Explore