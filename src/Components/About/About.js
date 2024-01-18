import React from 'react'
import './About.css'
import image from '../assets/pexels-nappy-936048.jpg'

function About() {
  return (
   <section className='about-main'>
    < div className='about-container'>
        <div className='left-section'>
            <img src={image}/>
            <div className='image-content'>
               <div className='apsal'>
                <p>Expectaional Advatures<br/>
                Every time Star Designing<br/>
                Your Dream Trip Today</p>

               </div>

</div>


        </div>
       
        <div className='right-section'>
            <div className='next'>
                <div className='next-content'>
                   <div className='next-head'>
                    <h1>Trip Fun For</h1>
                    <h1>Modern Travels</h1>

                   </div>
                   <div className='next-para'>
                    <p>our change ititanertry builder gives you the power<br/>
                    desingn your dream trip backend by a passionate<br/>
                    team travel experts and selected for you </p>

                   </div>
                   <div className='battu'><button className='button-4'>Explore now</button></div>
                   

                </div>
               

            </div>

        </div>
        

    </div>
   

   </section>
  )
}

export default About