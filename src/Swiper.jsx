import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-container">
            <h1 className="swiper-main__text">Skypool Apartment</h1>
            <p className="swiper-secondary">
              112 Glenwood Ave Hyde Park, Boston, MA
            </p>
            <button className="swiper-btn">Read More</button>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-container">
            <h1 className="swiper-main__text">Skypool Apartment</h1>
            <p className="swiper-secondary">
              112 Glenwood Ave Hyde Park, Boston, MA
            </p>
            <button className="swiper-btn">Read More</button>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-container">
            <h1 className="swiper-main__text">Skypool Apartment</h1>
            <p className="swiper-secondary">
              112 Glenwood Ave Hyde Park, Boston, MA
            </p>
            <button className="swiper-btn">Read More</button>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-container">
            <h1 className="swiper-main__text">Skypool Apartment</h1>
            <p className="swiper-secondary">
              112 Glenwood Ave Hyde Park, Boston, MA
            </p>
            <button className="swiper-btn">Read More</button>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-container">
            <h1 className="swiper-main__text">Skypool Apartment</h1>
            <p className="swiper-secondary">
              112 Glenwood Ave Hyde Park, Boston, MA
            </p>
            <button className="swiper-btn">Read More</button>
          </div>{" "}
        </SwiperSlide>
      </Swiper>
    </>
  );
}
