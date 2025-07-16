"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";

const jumbotronData = [
  {
    href: "https://bniexperience.bni.co.id/promo/preview/jadi-nasabah-bni-dapat-cashback-hingga-rp2500000-cziglt",
    image: "/images/jumbotron1.webp",
    imageMobile: "/images/jumbotron_mobile_1.webp",
    alt: "Jumbotron Promo 1",
  },
  {
    href: "https://bniexperience.bni.co.id/promo/detail/reward-hingga-rp790000-wtimnd",
    image: "/images/jumbotron2.webp",
    imageMobile: "/images/jumbotron_mobile_2.webp",
    alt: "Jumbotron Promo 2",
  },
];

export default function Jumbotron() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  return (
    <div className="relative">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          if (swiper.params.navigation) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full custom-swiper"
      >
        {jumbotronData.map((slide, index) => (
          <SwiperSlide key={index}>
            <a href={slide.href} className="block cursor-pointer">
              <div className="relative w-full aspect-[9/14] md:aspect-[16/9]">
                <Image
                  src={isMobile ? slide.imageMobile : slide.image}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>
            </a>
          </SwiperSlide>
        ))}

        {/* Custom Navigation */}
        <button
          ref={prevRef}
          className="hidden lg:flex bg-[#71DBD3] hover:bg-[#5CCFC5] justify-center items-center rounded-full w-12 h-12 absolute top-1/2 left-6 z-10 -translate-y-1/2"
        >
          <img
            src="https://wondr.bni.co.id/assets/images/svg/chevron-left-small.png"
            alt="Previous"
            className="w-2"
          />
        </button>

        <button
          ref={nextRef}
          className="hidden lg:flex bg-[#71DBD3] hover:bg-[#5CCFC5] justify-center items-center rounded-full w-12 h-12 absolute top-1/2 right-6 z-10 -translate-y-1/2"
        >
          <img
            src="https://wondr.bni.co.id/assets/images/svg/chevron-right-small.png"
            alt="Next"
            className="w-2"
          />
        </button>
      </Swiper>
    </div>
  );
}
