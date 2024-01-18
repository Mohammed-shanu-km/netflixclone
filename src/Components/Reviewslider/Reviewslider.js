import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoStarSharp } from "react-icons/io5";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Reviewslider.css'
import rev from '../assets/pexels-italo-melo-2379004.jpg'



// import required modules
import { Pagination,Autoplay } from 'swiper/modules';

export default function Reviewslider() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        breakpoints={{
            0: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              991:{
                slidesPerView: 3,
                spaceBetween: 30
              },
              640:{
                slidesPerView: 2,
                spaceBetween: 30
                
              },
             
              

             
            
        }}
        
        spaceBetween={32}
        // centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide  >
            <div className='swiper-box'>
                <div className='swiper-content'>
                    <div className='fist'>
                        <div className='r-img'>
                            <img className='rr-img' src={rev} alt=''/>

                        </div>
                        <div className='r-content'>
                            <h2>Mohammed shanu km</h2>
                            <p>travvaler</p>
                            <div className='ixons'>
                             <IoStarSharp className='suiis' /> 
                             <IoStarSharp className='suiis' /> 
                             <IoStarSharp className='suiis' /> 
                             <IoStarSharp className='suiis' /> 
                             </div>
                             

                            
                            

                        </div>

                    </div>
                    <div className='parass'>
                        <p>very helpuful is is easy for users to acsess travalin<br/>
                        vacation and advanture packahes are always updated<br/>
                        and varadi thanks travalin</p>


                    </div>
                    

                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='swiper-box'>
        <div className='swiper-box'>
                <div className='swiper-content'>
                    <div className='fist'>
                        <div className='r-img'>
                            <img src={rev} alt=''/>

                        </div>
                        <div className='r-content'>
                            <h2>Mohammed shanu km</h2>
                            <p>travvaler</p>
                            <div className='ixons'>
                             <IoStarSharp className='suiis' /> 
                             <IoStarSharp className='suiis' /> 
                             <IoStarSharp className='suiis' /> 
                             <IoStarSharp className='suiis' /> 
                             </div>

                        </div>

                    </div>
                    <div className='parass'>
                        <p>very helpuful is is easy for users to acsess travalin<br/>
                        vacation and advanture packahes are always updated<br/>
                        and varadi thanks travalin</p>


                    </div>
                    

                </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='swiper-box'>
        <div className='swiper-box'>
                <div className='swiper-content'>
                    <div className='fist'>
                        <div className='r-img'>
                            <img src={rev} alt=''/>

                        </div>
                        <div className='r-content'>
                            <h2>Mohammed shanu km</h2>
                            <p>travvaler</p>
                            <div className='ixons'>
                             <IoStarSharp className='suiis' /> 
                             <IoStarSharp className='suiis' /> 
                             <IoStarSharp className='suiis' /> 
                             <IoStarSharp className='suiis' /> 
                             </div>


                        </div>

                    </div>
                    <div className='parass'>
                        <p>very helpuful is is easy for users to acsess travalin<br/>
                        vacation and advanture packahes are always updated<br/>
                        and varadi thanks travalin</p>


                    </div>
                    

                </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='swiper-box'>
        <div className='swiper-box'>
                <div className='swiper-content'>
                    <div className='fist'>
                        <div className='r-img'>
                            <img src={rev} alt=''/>

                        </div>
                        <div className='r-content'>
                            <h2>Mohammed shanu km</h2>
                            <p>travvaler</p>
                            <div className='ixons'>
                             <IoStarSharp className='suiis' /> 
                             <IoStarSharp className='suiis' /> 
                             <IoStarSharp className='suiis' /> 
                             <IoStarSharp className='suiis' /> 
                             </div>

                        </div>

                    </div>
                    <div className='parass'>
                        <p>very helpuful is is easy for users to acsess travalin<br/>
                        vacation and advanture packahes are always updated<br/>
                        and varadi thanks travalin</p>


                    </div>
                    

                </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='swiper-box'>
        <div className='swiper-box'>
                <div className='swiper-content'>
                    <div className='fist'>
                        <div className='r-img'>
                            <img src={rev} alt=''/>

                        </div>
                        <div className='r-content'>
                            <h2>Mohammed shanu km</h2>
                            <p>travvaler</p>
                            <div className='ixons'>
                             <IoStarSharp className='suiis' /> 
                             <IoStarSharp className='suiis' /> 
                             <IoStarSharp className='suiis' /> 
                             <IoStarSharp className='suiis' /> 
                             </div>

                        </div>

                    </div>
                    <div className='parass'>
                        <p>very helpuful is is easy for users to acsess travalin<br/>
                        vacation and advanture packahes are always updated<br/>
                        and varadi thanks travalin</p>


                    </div>
                    

                </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='swiper-box'>
        <div className='swiper-box'>
                <div className='swiper-content'>
                    <div className='fist'>
                        <div className='r-img'>
                            <img src={rev} alt=''/>

                        </div>
                        <div className='r-content'>
                            <h2>Mohammed shanu km</h2>
                            <p>travvaler</p>
                            <div className='ixons'>
                             <IoStarSharp className='suiis' /> 
                             <IoStarSharp className='suiis' /> 
                             <IoStarSharp className='suiis' /> 
                             <IoStarSharp className='suiis' /> 
                             </div>

                        </div>

                    </div>
                    <div className='parass'>
                        <p>very helpuful is is easy for users to acsess travalin<br/>
                        vacation and advanture packahes are always updated<br/>
                        and varadi thanks travalin</p>


                    </div>
                    

                </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='swiper-box'>
        <div className='swiper-box'>
                <div className='swiper-content'>
                    <div className='fist'>
                        <div className='r-img'>
                            <img src={rev} alt=''/>

                        </div>
                        <div className='r-content'>
                            <h2>Mohammed shanu km</h2>
                            <p>travvaler</p>
                            <div className='ixons'>
                             <IoStarSharp className='suiis' /> 
                             <IoStarSharp className='suiis' /> 
                             <IoStarSharp className='suiis' /> 
                             <IoStarSharp className='suiis' /> 
                             </div>

                        </div>

                    </div>
                    <div className='parass'>
                        <p>very helpuful is is easy for users to acsess travalin<br/>
                        vacation and advanture packahes are always updated<br/>
                        and varadi thanks travalin</p>


                    </div>
                    

                </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='swiper-box'>
        <div className='swiper-box'>
                <div className='swiper-content'>
                    <div className='fist'>
                        <div className='r-img'>
                            <img src={rev} alt=''/>

                        </div>
                        <div className='r-content'>
                            <h2>Mohammed shanu km</h2>
                            <p>travvaler</p>
                            <div className='ixons'>
                             <IoStarSharp className='suiis' /> 
                             <IoStarSharp className='suiis' /> 
                             <IoStarSharp className='suiis' /> 
                             <IoStarSharp className='suiis' /> 
                             </div>

                        </div>

                    </div>
                    <div className='parass'>
                        <p>very helpuful is is easy for users to acsess travalin<br/>
                        vacation and advanture packahes are always updated<br/>
                        and varadi thanks travalin</p>


                    </div>
                    

                </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='swiper-box'>
        <div className='swiper-box'>
                <div className='swiper-content'>
                    <div className='fist'>
                        <div className='r-img'>
                            <img src={rev} alt=''/>

                        </div>
                        <div className='r-content'>
                            <h2>Mohammed shanu km</h2>
                            <p>travvaler</p>
                            <div className='ixons'>
                             <IoStarSharp className='suiis' /> 
                             <IoStarSharp className='suiis' /> 
                             <IoStarSharp className='suiis' /> 
                             <IoStarSharp className='suiis' /> 
                             </div>

                        </div>

                    </div>
                    <div className='parass'>
                        <p >very helpuful is is easy for users to acsess travalin<br/>
                        vacation and advanture packahes are always updated<br/>
                        and varadi thanks travalin</p>


                    </div>
                    

                </div>
            </div>
        </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}