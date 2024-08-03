"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../app/globals.css";

// import required modules
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper/modules";
import Image from "next/image";

const Slide = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window?.innerWidth <= 767);

  useEffect(() => {
    const mediaQuery = window?.matchMedia("(max-width: 767px)");

    const handleMediaQueryChange = (event) => {
      setIsSmallScreen(event?.matches);
    };

    // Listen for changes
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Cleanup function
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <section className="md:pb-[37rem] pb-[20rem] slide">
      <div
        className="md:my-[10.25rem] my-[3.5rem] bg-[#012623]"
        // data-aos-once
        // data-aos="fade-right"
      >
        <Swiper
          slidesPerView={isSmallScreen ? 1.5 : 2}
          spaceBetween={16}
          freeMode={true}
          centeredSlides={ true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          // navigation={true}
          modules={[Pagination, Navigation, FreeMode, Autoplay]}
          className="mySwiper "
        >
          <SwiperSlide className="bg-[#]">
            <div className="md:p-[0.625rem] p-[0.375rem] md:max-w-[45.25rem] max-w-[18.75rem] md:rounded-3xl rounded-[0.625rem] bg-[rgba(255,255,255,0.16)] ">
              <Image
                src="/images/slide1.jpg"
                width={724}
                height={470}
                alt="Research imgae"
                className="md:w-[45.25rem] w-[17rem]  bg-contain bg-center"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[#]">
            <div className="md:p-[0.625rem] p-[0.375rem] md:max-w-[45.25rem] max-w-[18.75rem] h-auto md:rounded-3xl rounded-[0.625rem] bg-[rgba(255,255,255,0.16)]">
              <Image
                src="/images/slide2.jpg"
                width={724}
                height={470}
                alt="Research imgae"
                className="md:w-[45.25rem] w-[17rem]  bg-contain bg-center"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[#]">
            <div className="md:p-[0.625rem] p-[0.375rem] md:max-w-[45.25rem] max-w-[18.75rem] h-auto md:rounded-3xl rounded-[0.625rem] bg-[rgba(255,255,255,0.16)]">
              <Image
                src="/images/slide3.jpg"
                width={724}
                height={470}
                alt="Research imgae"
                className="md:w-[45.25rem] w-[17rem]  bg-contain bg-center"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[#]">
            <div className="md:p-[0.625rem] p-[0.375rem] md:max-w-[45.25rem] max-w-[18.75rem] h-auto md:rounded-3xl rounded-[0.625rem] bg-[rgba(255,255,255,0.16)]">
              <Image
                src="/images/slide4.jpg"
                width={724}
                height={470}
                alt="Research imgae"
                className="md:w-[45.25rem] w-[17rem]  bg-contain bg-center"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[#]">
            <div className="md:p-[0.625rem] p-[0.375rem] md:max-w-[45.25rem] max-w-[18.75rem] h-auto md:rounded-3xl rounded-[0.625rem] bg-[rgba(255,255,255,0.16)]">
              <Image
                src="/images/slide5.jpg"
                width={724}
                height={470}
                alt="Research imgae"
                className="md:w-[45.25rem] w-[17rem]  bg-contain bg-center"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Slide;
