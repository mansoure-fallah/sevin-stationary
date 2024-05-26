"use client";

import React, { useState } from "react";
import categoryOne from "../../../../public/assets/category 1.svg";
import categoryTwo from "../../../../public/assets/category 2.svg";
import categoryThree from "../../../../public/assets/category 3.svg";
import categoryFour from "../../../../public/assets/category 4.svg";
import categoryFive from "../../../../public/assets/category 5.svg";
import categorySix from "../../../../public/assets/category 6.svg";
import { Pagination, Navigation, Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as swiperComponent } from "swiper";
import Image from "next/image";
import clsx from "clsx";
// import { Button } from "@radix-ui/themes";
import { Button } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

function CategorySlider() {
  const images = [
    {
      key: 0,
      name: categoryOne,
      number: 10,
    },
    { key: 1, name: categoryTwo, number: 20 },
    {
      key: 2,
      name: categorySix,
      number: 30,
    },
    {
      key: 3,
      name: categoryFour,
      number: 43,
    },
    {
      key: 4,
      name: categoryFive,
      number: 54,
    },
    {
      key: 5,
      name: categorySix,
      number: 6,
    },
  ];
  const [swiper, setSwiper] = useState<swiperComponent | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSwiperState = (swiper: swiperComponent) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className="relative" style={{ width: "100%", height: "446px" }}>
      <div className="p-14">
        <div className="flex flex-wrap justify-between mb-8">
          <div className="flex gap-3">
            <button>
              <ArrowForward />
            </button>
            <button>
              <ArrowBack />
            </button>
          </div>
          <span className="text-lg">Categories</span>
        </div>
        <Swiper
          onSwiper={setSwiper}
          slidesPerView={5}
          spaceBetween={25}
          onSlideChange={handleSwiperState}
          //   pagination={{ clickable: true }}
          //   autoplay={{ delay: 5000, disableOnInteraction: true }}
          modules={[FreeMode]}
          //   loop={images?.length > 1}
        >
          {images?.map((image) => (
            <div key={image.key}>
              <SwiperSlide
                className="swiper-container"
                style={{ width: "196px", height: "266px" }}
              >
                <div>
                  {/* <div className="flex flex-col justify-center items-center">
                    <span
                      key={image.key}
                      className="text-white text-3xl top-1/2  absolute"
                    >
                      {image.description}
                    </span>
                    <Button
                      key={image.key}
                      className="bg-primary hover:bg-primary top-1/2 absolute mt-16"
                      onClick={() => {
                        swiper?.slideTo(image.key);
                      }}
                      variant="contained"
                    >
                      <ArrowForward className="ml-3 text-lg" /> see collection
                    </Button>
                  </div> */}
                  <Image
                    src={image.name}
                    alt={`Slide  ${image.key}`}
                    className="rounded-full"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>

        {/* <div className="absolute top-1/2 right-5 flex flex-col">
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
          </div> */}
      </div>
    </div>
  );
}

export default CategorySlider;
