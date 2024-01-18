import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <>
     <header className='header'  >
        <nav>
            <a className='logo' href="#"><span>Trip</span> FUN</a>
            <label  for="toggler">
                <i class="fa fa-bars"></i>
            </label>
            <input type="checkbox" id="toggler" name=""/>
            <div class="menu">
                <ul class="list">

                    <li><a href="#">Home</a></li>
                    <li><a href="#">Destination</a></li>

                    <li><a href="#">About</a></li>
                   
            
                    
                </ul>
            </div>
            <div><button className='button-3'>Getstarted</button></div>
        </nav>
    </header>
    </>
  )
}

export default Navbar