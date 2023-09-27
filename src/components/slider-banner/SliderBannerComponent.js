import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import './SliderBannerComponent.min.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';


const SliderBannerComponent = () => {
  return (
    <>
        <Swiper className="swiper-container-banner" 
        navigation ={true}
        modules={[Pagination, Navigation]}
        pagination={{
            clickable: true,
          }}
        space-between={30} loop={true}>
                {/* <swiper-slide class="swiper-slide-banner">
                <img class="swiper-banner-image" src="./images/Video.png" alt="An example PNG image">
            </swiper-slide>  */}
            <SwiperSlide>
                <img class="swiper-banner-image" src={require("../../images/banner-img-2.png")} alt="An example PNG image"/>
            </SwiperSlide>
            <SwiperSlide>
                <img class="swiper-banner-image" src={require("../../images/banner-img-1.png")} alt="An example PNG image"/>
            </SwiperSlide>
            <SwiperSlide>
                <img class="swiper-banner-image" src={require("../../images/banner-img-3.png")} alt="An example PNG image"/>
            </SwiperSlide>
            <SwiperSlide>
                <img class="swiper-banner-image" src={require("../../images/banner-img-4.png")} alt="An example PNG image"/>
            </SwiperSlide>
            <SwiperSlide>
                <img class="swiper-banner-image" src={require("../../images/banner-img-5.png")} alt="An example PNG image"/>
            </SwiperSlide>
            <SwiperSlide>
                <img class="swiper-banner-image" src={require("../../images/banner-img-6.png")} alt="An example PNG image"/>
            </SwiperSlide>          
        </Swiper>

        {/* <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-element-bundle.min.js"></script> */}
    </>
  )
}

export default SliderBannerComponent