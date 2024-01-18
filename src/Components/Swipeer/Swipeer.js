import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Swipeer.css'

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import slide_image_1 from '../assets/pexels-joe-fikar-19137460.jpg';
import slide_image_2 from '../assets/pexels-lifekor-13504670.jpg'
import slide_image_3 from '../assets/pexels-oliver-sjöström-1078983.jpg'
import slide_image_4 from '../assets/pexels-pok-rie-17079328.jpg'
import slide_image_5 from '../assets/pexels-vladimir-konoplev-10920295.jpg'
import slide_image_6 from '../assets/pexels-rachel-claire-4577206.jpg'
import slide_image_7 from '../assets/pexels-shvets-anna-2452497.jpg'

function Swipeer() {
  return (
    <div className="container">
      
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img className='slide' src={slide_image_1} alt="slide_image" />
          <div className='content'>
            <h1>Bali</h1>
            <p>indionosia</p>
            <p>872 want to travel here</p>

        </div>
        </SwiperSlide>
       
        <SwiperSlide>
          <img className='slide'  src={slide_image_2} alt="slide_image" />
          <div className='content'>
            <h1>Bali</h1>
            <p>indionosia</p>
            <p>872 want to travel here</p>

        </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className='slide'  src={slide_image_3} alt="slide_image" />
          <div className='content'>
            <h1>Bali</h1>
            <p>indionosia</p>
            <p>872 want to travel here</p>

        </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className='slide'  src={slide_image_4} alt="slide_image" />
          <div className='content'>
            <h1>Bali</h1>
            <p>indionosia</p>
            <p>872 want to travel here</p>

        </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className='slide'  src={slide_image_5} alt="slide_image" />
          <div className='content'>
            <h1>Bali</h1>
            <p>indionosia</p>
            <p>872 want to travel here</p>

        </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className='slide'  src={slide_image_6} alt="slide_image" />
          <div className='content'>
            <h1>Bali</h1>
            <p>indionosia</p>
            <p>872 want to travel here</p>

        </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className='slide'  src={slide_image_7} alt="slide_image" />
          <div className='content'>
            <h1>Bali</h1>
            <p>indionosia</p>
            <p>872 want to travel here</p>

        </div>
        </SwiperSlide>

        {/* <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
          <FaRegArrowAltCircleLeft className='right' />
          </div>
          <div className="swiper-button-next slider-arrow">
          <FaRegArrowAltCircleRight className='right' />
          </div>
          <div className="swiper-pagination"></div>
        </div> */}
      </Swiper>
    </div>
  );
}

export default Swipeer;
