import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import './SliderBannerComponent.min.css';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

const SliderBannerComponent = () => {
  return (
    <>
        <Swiper className="swiper-container-banner" 
        navigation ={true}
        pagination={true} space-between={30} loop={true}>
                {/* <swiper-slide class="swiper-slide-banner">
                <img class="swiper-banner-image" src="./images/Video.png" alt="An example PNG image">
            </swiper-slide>  */}
            <SwiperSlide>
                <img class="swiper-banner-image" src="../../images/banner-img-2.png" alt="An example PNG image"/>
            </SwiperSlide>
            <SwiperSlide>
                <img class="swiper-banner-image" src="../../images/banner-img-1.png" alt="An example PNG image"/>
            </SwiperSlide>
            <SwiperSlide>
                <img class="swiper-banner-image" src="../../images/banner-img-3.png" alt="An example PNG image"/>
            </SwiperSlide>
            <SwiperSlide>
                <img class="swiper-banner-image" src="../../images/banner-img-4.png" alt="An example PNG image"/>
            </SwiperSlide>
            <SwiperSlide>
                <img class="swiper-banner-image" src="../../images/banner-img-5.png" alt="An example PNG image"/>
            </SwiperSlide>
            <SwiperSlide>
                <img class="swiper-banner-image" src="../../images/banner-img-6.png" alt="An example PNG image"/>
            </SwiperSlide>          
        </Swiper>
    </>
  )
}

export default SliderBannerComponent