import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './Exploreslider.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import slide_image_1 from '../assets/pexels-joe-fikar-19137460.jpg';
import slide_image_2 from '../assets/pexels-lifekor-13504670.jpg'
import slide_image_3 from '../assets/pexels-oliver-sjöström-1078983.jpg'
import slide_image_4 from '../assets/pexels-pok-rie-17079328.jpg'
import slide_image_5 from '../assets/pexels-vladimir-konoplev-10920295.jpg'
import slide_image_6 from '../assets/pexels-rachel-claire-4577206.jpg'
import slide_image_7 from '../assets/pexels-shvets-anna-2452497.jpg'



// import required modules
import { Pagination } from 'swiper/modules';

export default function Exploreslider() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
       
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwipers"
      >
        <SwiperSlide className='suii' ><img className='slide'  src={slide_image_1} alt="slide_image" />
        <div className='contents'>
            <h1>Bali</h1>
            <p>indionosia</p>
            <p>872 want to travel here</p>

        </div>
        
        </SwiperSlide>
        <SwiperSlide className='suii'><img className='slide'  src={slide_image_2} alt="slide_image" />
        <div className='contents'>
            <h1>Bali</h1>
            <p>indionosia</p>
            <p>872 want to travel here</p>

        </div>
        </SwiperSlide>
        <SwiperSlide className='suii'><img className='slide'  src={slide_image_3} alt="slide_image" />
        <div className='contents'>
            <h1>Bali</h1>
            <p>indionosia</p>
            <p>872 want to travel here</p>

        </div>
        </SwiperSlide>
        <SwiperSlide className='suii'><img className='slide'  src={slide_image_4} alt="slide_image" />
        <div className='contents'>
            <h1>Bali</h1>
            <p>indionosia</p>
            <p>872 want to travel here</p>

        </div>
        </SwiperSlide>
        <SwiperSlide className='suii'><img className='slide'  src={slide_image_4} alt="slide_image" />
        <div className='contents'>
            <h1>Bali</h1>
            <p>indionosia</p>
            <p>872 want to travel here</p>

        </div>
        </SwiperSlide>
        <SwiperSlide className='suii'><img className='slide'  src={slide_image_5} alt="slide_image" />
        <div className='contents'>
            <h1>Bali</h1>
            <p>indionosia</p>
            <p>872 want to travel here</p>

        </div>
        </SwiperSlide>
        <SwiperSlide className='suii'><img className='slide'  src={slide_image_6} alt="slide_image" />
        <div className='contents'>
            <h1>Bali</h1>
            <p>indionosia</p>
            <p>872 want to travel here</p>

        </div>
        </SwiperSlide>
        <SwiperSlide className='suii'><img className='slide'  src={slide_image_7} alt="slide_image" />
        <div className='contents'>
            <h1>Bali</h1>
            <p>indionosia</p>
            <p>872 want to travel here</p>

        </div>
        </SwiperSlide>
        <SwiperSlide className='suii'><img className='slide'  src={slide_image_7} alt="slide_image" />
        <div className='contents'>
            <h1>Bali</h1>
            <p>indionosia</p>
            <p>872 want to travel here</p>

        </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
