import React from 'react'
import './Review.css'
import Reviewslider from '../Reviewslider/Reviewslider'

function Review() {
  return (
    <section className='review-main'>
        <div className='review-container'>
            <div className='review-content'>
                <h1>Loved by over million travels</h1>
                <p>You will be taught by people who have long experiance<br/>
                experisnce your field indrest</p>

            </div>
            <div className='swiperss'>
                <Reviewslider/>

            </div>

        </div>

    </section>
  )
}

export default Review