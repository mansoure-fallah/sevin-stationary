"use client";

import React, { useState } from "react";
import sliderOne from "../../../public/assets/Image-Placeholder.svg";
import sliderTwo from "../../../public/assets/Image Placeholder (1).svg";
import sliderThree from "../../../public/assets/Image Placeholder3.svg";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as swiperComponent } from "swiper";
import Image from "next/image";
import clsx from "clsx";
// import { Button } from "@radix-ui/themes";
import { Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

function MainSlider() {
  const images = [
    {
      key: 0,
      name: sliderOne,
      description: "Indulage yourself with the finest kimonos",
    },
    { key: 1, name: sliderTwo, description: "Care products for every home" },
    {
      key: 2,
      name: sliderThree,
      description: "Plant your house with handmade love",
    },
  ];
  const [swiper, setSwiper] = useState<swiperComponent | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSwiperState = (swiper: swiperComponent) => {
    setActiveIndex(swiper.realIndex);
    // onActiveIndex && onActiveIndex(swiper.realIndex);
  };

  return (
    <div className="relative">
      <Swiper
        onSwiper={setSwiper}
        slidesPerView={1}
        onSlideChange={handleSwiperState}
        autoplay={
          // autoPlay
          true ? { delay: 5000, disableOnInteraction: true } : undefined
        }
        modules={[Navigation, Autoplay]}
        loop={
          // !!loop &&
          images?.length > 1
        }
        // className="mySwiper"
      >
        {images?.length > 1 ? (
          images.map((image) => (
            <div key={image.key}>
              <SwiperSlide
                className="swiper-container"
                style={{ width: "100%", height: "750px" }}
              >
                <div>
                    <div className="flex flex-col justify-center items-center">
                      <span key={image.key} className="text-white text-3xl top-1/2  absolute">
                        {image.description}
                      </span>
                      <Button
                        key={image.key}
                        className="bg-primary hover:bg-primary top-1/2 absolute mt-16"
                        onClick={() => {
                          swiper?.slideTo(image.key);
                        }}
                        variant="contained"
                        // startIcon={<ArrowForward />}
                      >
                      <ArrowForward className="ml-3 text-lg"/> see collection
                      </Button>
                    </div>
                  <Image
                    src={image.name}
                    alt={`Slide  ${image.key}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </SwiperSlide>
            </div>
          ))
        ) : (
          <SwiperSlide
            className="swiper-container"
            style={{ width: "100%", height: "750px" }}
          >
            <div>
              <Image
                src={images[0].name}
                alt={`Slide`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </SwiperSlide>
        )}
      </Swiper>
      {images.length > 1 && (
        <div className="absolute top-1/2 right-5 flex flex-col">
          {images.map((image) => (
            <button
              key={image.key}
              className={clsx(
                " rounded-full bg-white border shadow shadow-black/25 z-10 transition-all mb-2",
                {
                  "w-2 h-8 p-0 m-0": image.key == activeIndex,
                  "w-2 h-2 opacity-50 p-0 m-0": image.key != activeIndex,
                }
              )}
              onClick={() => {
                swiper?.slideTo(image.key);
              }}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
}

export default MainSlider;
