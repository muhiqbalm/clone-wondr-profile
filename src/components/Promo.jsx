"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const promoData = [
  {
    id: 1,
    href: "https://bniexperience.bni.co.id/promo/detail/kejar-promonya-jangan-sampai-ketinggalan-dqjvml?utm_source=microsite&utm_medium=home_promo&utm_campaign=wondr&utm_term=promocard&utm_content=generic_qris_kartu",
    src: "https://wondr.bni.co.id/api/image/pn.mc-hut79-generic-090725-min_1751968118091.jpg",
    alt: "BNI 79% Discount Promo",
  },
  {
    id: 2,
    href: "https://bniexperience.bni.co.id/promo/detail/cashback-hingga-rp790000-dan-annual-fee-rewards-for-life-adckig?utm_source=microsite&utm_medium=home_promo&utm_campaign=wondr&utm_term=promocard&utm_content=cc_790k",
    src: "https://wondr.bni.co.id/api/image/pn.mc-hut79-cc-090725-min_1751968178368.jpg",
    alt: "BNI Cashback Promo",
  },
  {
    id: 3,
    href: "https://bniexperience.bni.co.id/promo/detail/dapatkan-e-voucher-gopay-rp25000-efwivb?utm_source=microsite&utm_medium=home_promo&utm_campaign=wondr&utm_term=promocard&utm_content=gopay_25k",
    src: "https://wondr.bni.co.id/api/image/pn-hut79-gopay25k-080725-min_1751957528583.jpg",
    alt: "BNI E-Voucher Promo",
  },
  {
    id: 4,
    href: "https://bniexperience.bni.co.id/promo/detail/cashback-rp79000-scpmwq?utm_source=microsite&utm_medium=home_promo&utm_campaign=wondr&utm_term=promocard&utm_content=fitur_bayarbeli79k",
    src: "https://wondr.bni.co.id/api/image/pn-hut79-fitur79k-080725-min_1751957548955.jpg",
    alt: "BNI Promo 4",
  },
  {
    id: 5,
    href: "https://bniexperience.bni.co.id/promo/detail/dapatkan-voucher-belanja-hingga-rp100000-uslfxo?utm_source=microsite&utm_medium=home_promo&utm_campaign=wondr&utm_term=promocard&utm_content=bogauv",
    src: "https://wondr.bni.co.id/api/image/pn.mc-boga-070725-min_1751960126693.jpg",
    alt: "BNI Promo 5",
  },
];

export default function PromoSection() {
  return (
    <section className="bg-[#F0F0F0] relative py-6 md:py-10 overflow-hidden">
      <img
        src="https://wondr.bni.co.id/assets/images/svg/left-decor.svg"
        alt="left-decor"
        className="block absolute left-0 top-10 sm:top-12 md:top-16 w-12 sm:w-16 lg:w-auto z-10"
      />
      <img
        src="https://wondr.bni.co.id/assets/images/svg/right-decor.svg"
        alt="right-decor"
        className="block absolute -right-4 top-10 sm:top-12 md:top-16 w-12 sm:w-16 lg:w-auto z-10"
      />

      <div className="container mx-auto px-4">
        <div className="bg-[#F9F9F9] ml-26 mr-26 pl-6 pt-6 md:pl-10 md:pt-10 rounded-t-[32px] h-full relative overflow-visible">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pr-6 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] leading-snug lg:!leading-tight text-black font-semibold">
              Lebih banyak promo di wondr!
            </h2>
            <div className="flex justify-center items-center w-full md:w-auto">
              <a
                href="https://bniexperience.bni.co.id/wondr"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-[19px] text-sm text-center text-black font-semibold focus:outline-none bg-[#71DBD3] hover:bg-[#5CCFC5] disabled:bg-[#A7ECE8] rounded-3xl py-3 px-6 text-xs md:text-base md:py-[13px] md:px-8 h-fit"
              >
                Lihat Selengkapnya
              </a>
            </div>
          </div>

          <div className="mt-6 md:mt-8 relative">
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={1.2}
              loop={true}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2.5,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              className="!pr-6 md:!pr-10"
            >
              {promoData.map((promo) => (
                <SwiperSlide key={promo.id}>
                  <a
                    href={promo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                      <img
                        src={promo.src}
                        alt={promo.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="flex pr-6 md:pr-10 mt-6 justify-between">
              <button className="swiper-button-prev-custom bg-[#71DBD3] hover:bg-[#5CCFC5] flex justify-center items-center rounded-full w-10 h-10 md:w-12 md:h-12 z-10 cursor-pointer transition-colors">
                <ChevronLeft className="w-6 h-6 text-black" />
              </button>
              <button className="swiper-button-next-custom bg-[#71DBD3] hover:bg-[#5CCFC5] flex justify-center items-center rounded-full w-10 h-10 md:w-12 md:h-12 z-10 cursor-pointer transition-colors">
                <ChevronRight className="w-6 h-6 text-black" />
              </button>
            </div>
          </div>
        </div>

        <div className="ml-26 mr-26 max-w-[990px] lg:max-w-full overflow-hidden flex justify-center mt-0">
          <Image
            src="https://wondr.bni.co.id/assets/images/svg/subtract.svg"
            alt="promo-bottom"
            width={990}
            height={200}
            className="object-cover object-center w-[990px] lg:w-full max-w-none"
          />
        </div>
      </div>
    </section>
  );
}
