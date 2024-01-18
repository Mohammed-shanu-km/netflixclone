import React from "react";
import "./Slider.css";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import Swipeer from "../Swipeer/Swipeer";




function Slider() {
  return (
    <>
      <section className="slider-section-main">
        <div className="slider-container">
          <div className="slider-above-main">
            <div className="slider-box">
              <div className="inside-main">
                <div className="inside-icon">
                  <FaPlaneDeparture className="icoons" />
                </div>
                <div className="inside-heading">
                  <h1>Expedia</h1>
                </div>
              </div>
              <div className="inside-main">
                <div className="inside-icon">
                  <FaRegSun className="icoons" />
                </div>
                <div className="inside-heading">
                  <h1>Skyscanner</h1>
                </div>
              </div>
              <div className="inside-main">
                <div className="inside-icon">
                  <FaGithub className="icoons" />
                </div>
                <div className="inside-heading">
                  <h1>Airbnub</h1>
                </div>
              </div>
              <div className="inside-main">
                <div className="inside-icon">
                  <TbBrandBooking className="icoons" />
                </div>
                <div className="inside-heading">
                  <h1>Booking.com</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="heading-mains">
            <h1>
              Recommended <span>popular</span>{" "}
            </h1>
            <h1>Destination</h1>
          </div>
          <div className="swiper">
            <Swipeer/>
            
          
          </div>
          <div className="swiper-below">
            <h2>Bali , Indionasia</h2>
            <p>The perfect indroduction to indionasia,showing the cultural bali</p>

          </div>
        </div>
      </section>
    </>
  );
}

export default Slider;
