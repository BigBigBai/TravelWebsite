import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/scrollbar/scrollbar.min.css';
import 'swiper/modules/autoplay/autoplay.min.css';


export default () => {
  return (
    <Swiper style={{
      "--swiper-pagination-color": "#FFBA08",
      "--swiper-pagination-bullet-inactive-color": "#999999",
      "--swiper-pagination-bullet-inactive-opacity": "1",
      "--swiper-pagination-bullet-size": "8px",
      "--swiper-pagination-bullet-horizontal-gap": "3px"
    }}
    modules={[Navigation, Pagination, Autoplay]}
    slidesPerView={1}
    autoplay={true}
    pagination={{ clickable: true }}
    >
      {<SwiperSlide>
        <img className="img" src='/images/img-1.jpg' alt="" />
      </SwiperSlide>}
      {<SwiperSlide>
        <img className="img" src='/images/img-2.jpg' alt="" />
      </SwiperSlide>}
      {<SwiperSlide>
        <img className="img" src='/images/img-3.jpg' alt="" />
      </SwiperSlide>}
      {<SwiperSlide>
        <img className="img" src='/images/img-4.jpg' alt="" />
      </SwiperSlide>}
    </Swiper>
  );
};

/*
function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>ADVENTURE</h1>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
*/

