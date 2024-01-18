import React from 'react'
import './Footer.css'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

function Footer() {
  return (
    <section className='footer'>
        <div className='footer-container'>
            <div className='footer-box'>
                <div className='boxes1'>
                    <h1>TripFun</h1>
                    <p>enjoying travalling with<br/>
                    Trip</p>
                    <div className='ioo'>
                    < FaInstagram className='peepi'/>
                    <FaFacebookSquare className='peepi' />
                    <FaInstagram className='peepi' />
                    <FaInstagram className='peepi' />
                    </div>

                </div>
                <div className='boxes2'>
                    <h1>Menu</h1>
                   
                    <a href=''>Home</a>
                    <a href=''>Destination</a>
                    <a href=''>About us</a>
                    


                </div>
                <div className='boxes2'>
                    <h1>Booking plan</h1>
                   
                    <a href=''>Personal Trip</a>
                    <a href=''>Group trip</a>
                    


                </div>
                <div className='boxes2'>
                    <h1>Further information</h1>
                   
                    <a href=''>Terms and contions</a>
                    <a href=''>Home</a>
                   
                    


                </div>
                


               

            </div>
            <div className='underline' />
           
           


        </div>
        <h1 style={{textAlign:"center", marginTop:"-33px", fontFamily:"sans-serif", fontSize:"13px", color:"#758388"}}>Copey right@2023</h1>
       

    </section>
  )
}

export default Footer