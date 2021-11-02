import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import './Banner.css'
import slider1 from '../../../images/slider1.png'
import slider2 from '../../../images/slider2.png'
import slider3 from '../../../images/slider3.png'


const Banner = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            centeredSlides
        >
            <SwiperSlide>
                <div className="container">
                    <div className="row ">

                        <div className="col-md-6 d-flex justify-content-center align-items-center p-2">
                            <div className='banner-text1'>
                                <h3 >Welcome To Our <span>Hospital</span>💜</h3>
                                <p>We are all time ready for patient rescues and managements. We are committed to patient for better treatment.</p>
                                <button className='btn-regular'>View More</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img className='w-100' src={slider1} alt="" />
                        </div>

                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <SwiperSlide>
                    <div className="container">
                        <div className="row ">

                            <div className="col-md-6 d-flex justify-content-center align-items-center p-2">
                                <div className='banner-text2'>
                                    <h3 >Welcome To Our <span>Hospital</span>💜</h3>
                                    <p>We are all time ready for patient rescues and managements. We are committed to patient for better treatment.</p>
                                    <button className='btn-regular'>View More</button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img className='w-100' src={slider2} alt="" />
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
            </SwiperSlide>
            <SwiperSlide>
                <div className="container">
                    <div className="row ">

                        <div className="col-md-6 d-flex justify-content-center align-items-center p-2">
                            <div className='banner-text3'>
                                <h3 >Welcome To Our <span>Hospital</span>💜</h3>
                                <p>We are all time ready for patient rescues and managements. We are committed to patient for better treatment.</p>
                                <button className='btn-regular'>View More</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img className='w-100 m-5' src={slider3} alt="" />
                        </div>

                    </div>
                </div>
            </SwiperSlide>
        </Swiper>

    );
};

export default Banner;