"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";
import Slide from "./Slide";

const Banner = () => {
  const slides = [
    {
      title: "Share Your Ideas",
      desc: "Turn imagination into real projects",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    },
    {
      title: "Build Together",
      desc: "Collaborate with creators worldwide",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
    {
      title: "Grow Faster",
      desc: "Improve skills with real feedback",
      img: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
    },
  ];
  return (
    <div className="  py-5 px-5">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper rounded-3xl"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <Slide slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
