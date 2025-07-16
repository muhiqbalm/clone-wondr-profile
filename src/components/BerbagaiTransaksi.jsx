"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";

const transactionData = [
  {
    id: 1,
    title: "Transfer",
    subtitle: "Kirim uang kapan aja, ke mana aja",
    description:
      "Kirim uang ke mana aja dan atur jadwal transfer sesuai maumu. Bisa transfer ke banyak tujuan sekaligus!",
    image: "https://wondr.bni.co.id/api/image/layer_1_1751485455683.png",
  },
  {
    id: 2,
    title: "Mobile Tunai",
    subtitle: "Tarik tunai bisa tanpa kartu",
    description:
      "Gak bawa kartu? Gak masalah! Cukup buka aplikasi, tarik tunai segampang itu.",
    image:
      "https://wondr.bni.co.id/api/image/group_427323199_1751485555775.png",
  },
  {
    id: 3,
    title: "E-Wallet",
    subtitle: "Cek dan top up saldo gak perlu pindah aplikasi",
    description:
      "Gak perlu buka banyak aplikasi, top up dan cek saldo e-Wallet bisa langsung di sini.",
    image: "https://wondr.bni.co.id/api/image/illustration_1751485629668.png",
  },
  {
    id: 4,
    title: "Transfer Luar Negeri",
    subtitle: "Kirim uang antarnegara dalam hitungan menit",
    description:
      "Transfer ke berbagai negara gak perlu nunggu lama. Bisa cek status pengiriman juga.",
    image: "https://wondr.bni.co.id/api/image/layer_4_1751485713019.png",
  },
  {
    id: 5,
    title: "Lifestyle",
    subtitle: "Ada tiket konser, undian, sampai tiket kerata api",
    description:
      "Dari tiket kereta api, tiket konser, sampai undian berhadiah tersedia buat kamu.",
    image: "https://wondr.bni.co.id/api/image/left_arm_1751546357234.png",
  },
  {
    id: 6,
    title: "Bayar & Beli",
    subtitle: "Bisa bayar tagihan di puluhan layanan",
    description:
      "Satu tempat bisa buat beli pulsa, bayar listrik, sampai zakat. Ada pengingat biar gak kelewat!",
    image: "https://wondr.bni.co.id/api/image/billpay_1751635640586.png",
  },
  {
    id: 7,
    title: "QRIS",
    subtitle: "Tinggal tap atau scan buat bayar-bayar",
    description:
      "Bayar ini itu jadi bebas repot, bebas antri, tetap aman, dan praktis.",
    image:
      "https://wondr.bni.co.id/api/image/group_427323200_1751485932741.png",
  },
  {
    id: 8,
    title: "TapCash",
    subtitle: "Bayar tol sampai parkir tinggal tap aja",
    description:
      "Tinggal tempelin kartu ke HP buat cek dan isi saldo. Pakai Express Top Up bisa tanpa login.",
    image: "https://wondr.bni.co.id/api/image/tapcash_new_1751635836436.png",
  },
].slice(0, 8); // Filter to include only up to TapCash (id: 8)

export default function BerbagaiTransaksi() {
  const [flippedCards, setFlippedCards] = useState([]);

  const toggleFlip = (cardId) => {
    setFlippedCards((prev) =>
      prev.includes(cardId)
        ? prev.filter((id) => id !== cardId)
        : [...prev, cardId]
    );
  };

  return (
    <section className="py-8 md:py-12 lg:py-16 xl:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] leading-tight lg:leading-tight text-black font-semibold px-4">
          Berbagai transaksi cukup satu aplikasi
        </h2>
      </div>

      <div className="mt-6 md:mt-10 overflow-hidden">
        <Swiper
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          spaceBetween={16}
          slidesOffsetBefore={16}
          slidesOffsetAfter={16}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 16,
              slidesOffsetBefore: 16,
              slidesOffsetAfter: 16,
            },
            480: {
              slidesPerView: 1.5,
              spaceBetween: 16,
              slidesOffsetBefore: 24,
              slidesOffsetAfter: 24,
            },
            640: {
              slidesPerView: 1.8,
              spaceBetween: 20,
              slidesOffsetBefore: 32,
              slidesOffsetAfter: 32,
            },
            768: {
              slidesPerView: 2.2,
              spaceBetween: 24,
              slidesOffsetBefore: 40,
              slidesOffsetAfter: 40,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 24,
              slidesOffsetBefore: 48,
              slidesOffsetAfter: 48,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 24,
              slidesOffsetBefore: 64,
              slidesOffsetAfter: 64,
            },
            1536: {
              slidesPerView: 3.5,
              spaceBetween: 24,
              slidesOffsetBefore: 80,
              slidesOffsetAfter: 80,
            },
          }}
          className="pb-12"
          centeredSlides={false}
          loop={false}
          watchOverflow={true}
          style={{
            "--swiper-pagination-color": "#000000",
            "--swiper-pagination-bullet-inactive-color": "#cccccc",
            "--swiper-pagination-bullet-size": "8px",
            "--swiper-pagination-bullet-horizontal-gap": "4px",
          }}
        >
          {transactionData.map((card) => {
            const isFlipped = flippedCards.includes(card.id);
            return (
              <SwiperSlide
                key={card.id}
                className="!h-[280px] sm:!h-[320px] md:!h-[380px] lg:!h-[420px] xl:!h-[465px] 2xl:!h-[500px] !my-2"
              >
                <div className="relative [perspective:1000px] w-full h-full">
                  <div
                    className={`relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 ${
                      isFlipped ? "[transform:rotateY(180deg)]" : ""
                    }`}
                  >
                    {/* FRONT CARD */}
                    <div className="absolute inset-0 bg-[#f9f9f9] rounded-2xl md:rounded-3xl lg:rounded-4xl flex flex-col justify-between [backface-visibility:hidden] [transform:rotateY(0deg)] overflow-hidden">
                      <div className="p-4 md:p-5 lg:p-6 text-left flex-shrink-0">
                        <h3 className="text-xs md:text-sm lg:text-base font-light text-black">
                          {card.title}
                        </h3>
                        <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold leading-[120%] mt-1 lg:mt-2 text-black">
                          {card.subtitle}
                        </p>
                      </div>

                      <div className="flex-1 flex items-end justify-center overflow-hidden rounded-b-2xl md:rounded-b-3xl lg:rounded-b-4xl">
                        <div className="w-full h-full flex items-end justify-center">
                          <Image
                            alt={card.title}
                            width={400}
                            height={300}
                            src={card.image}
                            className="w-full h-full object-contain max-w-[110%] transform scale-110"
                            style={{
                              maxHeight: "100%",
                              objectFit: "contain",
                              objectPosition: "bottom center",
                            }}
                            loading="lazy"
                          />
                        </div>
                      </div>

                      <button
                        onClick={() => toggleFlip(card.id)}
                        className="absolute bottom-3 left-3 w-8 h-8 md:bottom-4 md:left-4 md:w-10 md:h-10 lg:bottom-6 lg:left-6 lg:w-12 lg:h-12 rounded-full bg-black/50 hover:bg-black/70 transition-colors duration-200 flex items-center justify-center border border-white/20"
                        aria-label={`Lihat detail ${card.title}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 md:w-5 md:h-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </button>
                    </div>

                    {/* BACK CARD */}
                    <div className="absolute inset-0 bg-[#f9f9f9] rounded-2xl md:rounded-3xl lg:rounded-4xl flex flex-col justify-between overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)]">
                      <div className="p-4 md:p-5 lg:p-6 text-left flex-1 flex flex-col justify-center">
                        <h3 className="text-xs md:text-sm lg:text-base font-light text-black mb-2">
                          {card.title}
                        </h3>
                        <p className="text-sm md:text-base lg:text-lg xl:text-xl font-light text-black leading-[140%] flex-1 flex items-center">
                          {card.description}
                        </p>
                      </div>

                      <button
                        onClick={() => toggleFlip(card.id)}
                        className="absolute bottom-3 left-3 w-8 h-8 md:bottom-4 md:left-4 md:w-10 md:h-10 lg:bottom-6 lg:left-6 lg:w-12 lg:h-12 rounded-full bg-black/50 hover:bg-black/70 transition-colors duration-200 flex items-center justify-center border border-white/20"
                        aria-label={`Kembali ke tampilan ${card.title}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 md:w-5 md:h-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M20 12H4"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
