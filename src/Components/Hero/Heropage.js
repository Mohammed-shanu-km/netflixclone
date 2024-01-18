import React from 'react'
import './Heropage.css'
import { FaCircleArrowRight } from "react-icons/fa6";



function Heropage() {
  return (
    <>
    <section className='hero-main'>
        <div className='hero-container'>
          <div className='main-content'>
            <div className='heading-main'>
              <h1>Expolrer Your</h1>
              <h1>Dream And <span>Favorite</span> </h1>
              <h1>Destinations</h1>
              

            </div>
            <div className='paragrap-hero'>
              <div className='paragrap'>
              <p>We Help You find A wonderful Trip and grate vactiob<br/>
              Place and we will provide famous and popular <br/>
              Tourist place over the world</p>
              </div>
              <div className='lets-expolre'>
                <div className='icons'>
                <FaCircleArrowRight className='icons-arrow' />
                

                </div>
                <div className='exp-head'>
                  <p>lets explore</p>

                </div>




              </div>

            </div>

          </div>

        </div>

    </section>
    </>
  )
}

export default Heropage