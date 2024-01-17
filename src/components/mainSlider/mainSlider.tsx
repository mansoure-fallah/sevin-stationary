"use client";

import React from "react";
import sliderOne from "../../../public/assets/Image-Placeholder.svg";
import sliderTwo from "../../../public/assets/Image Placeholder (1).svg";
import sliderThree from "../../../public/assets/Image Placeholder3.svg";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

function MainSlider() {
  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        // className="mySwiper"
      >
        <SwiperSlide>
          <Image src={sliderOne} alt={"holder"} className="w-full h-auto object-contain" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={sliderTwo} alt={"holder"} className="w-full h-auto object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={sliderThree} alt={"holder"} className="w-full h-auto object-contain" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MainSlider;
