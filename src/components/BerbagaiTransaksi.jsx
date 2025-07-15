"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const transactionData = [
  {
    id: 1,
    title: "Transfer",
    description: "Kirim uang kapan aja, ke mana aja",
    image: "https://wondr.bni.co.id/api/image/layer_1_1751485455683.png",
    color: "bg-blue-50",
    features: [
      "Transfer antar bank",
      "Real-time processing",
      "Biaya admin rendah",
    ],
  },
  {
    id: 2,
    title: "Pembayaran",
    description: "Bayar tagihan dengan mudah dan cepat",
    image: "https://wondr.bni.co.id/api/image/layer_1_1751485455683.png",
    color: "bg-green-50",
    features: ["Bayar listrik & air", "Tagihan telepon", "Cicilan kendaraan"],
  },
  {
    id: 3,
    title: "Top Up",
    description: "Isi saldo e-wallet favorit kamu",
    image: "https://wondr.bni.co.id/api/image/layer_1_1751485455683.png",
    color: "bg-purple-50",
    features: ["Top up OVO", "Top up GoPay", "Top up DANA"],
  },
  {
    id: 4,
    title: "Investasi",
    description: "Mulai investasi dengan modal terjangkau",
    image: "https://wondr.bni.co.id/api/image/layer_1_1751485455683.png",
    color: "bg-orange-50",
    features: ["Reksadana", "Deposito", "Obligasi pemerintah"],
  },
  {
    id: 5,
    title: "Tabungan",
    description: "Kelola tabungan dengan fitur lengkap",
    image: "https://wondr.bni.co.id/api/image/layer_1_1751485455683.png",
    color: "bg-pink-50",
    features: ["Tabungan reguler", "Tabungan berjangka", "Tabungan haji"],
  },
];

export default function BerbagaiTransaksi() {
  let swiperInstance = null;

  const setSwiperRef = (swiper) => {
    swiperInstance = swiper;
  };

  const toggleFlip = (cardId) => {
    const cardElement = document.getElementById(`card-${cardId}`);
    if (cardElement) {
      cardElement.classList.toggle("flipped");
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Berbagai transaksi cukup satu aplikasi
          </h2>
        </div>

        <div className="relative">
          <Swiper
            onSwiper={setSwiperRef}
            modules={[Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            centeredSlides={true}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet !bg-gray-300 !opacity-100",
              bulletActiveClass: "!bg-gray-900",
            }}
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 2.5, spaceBetween: 32 },
              1280: { slidesPerView: 3, spaceBetween: 32 },
            }}
            className="!pb-12"
          >
            {transactionData.map((card) => (
              <SwiperSlide key={card.id} className="!h-auto">
                <div className="w-full max-w-sm mx-auto h-96 md:h-[480px] perspective-1000">
                  <div
                    id={`card-${card.id}`}
                    className="relative w-full h-full preserve-3d transition-transform duration-700 card-container"
                  >
                    <div
                      className={`absolute inset-0 backface-hidden rounded-3xl ${card.color} border-2 border-gray-200 shadow-xl overflow-hidden`}
                    >
                      <div className="p-6 h-full flex flex-col">
                        <div className="mb-4">
                          <h3 className="text-sm font-medium text-gray-600 mb-2">
                            {card.title}
                          </h3>
                          <p className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                            {card.description}
                          </p>
                        </div>
                        <div className="flex-1 flex items-end justify-center relative">
                          <div className="relative w-full max-w-[280px] h-[200px] md:h-[280px]">
                            <Image
                              src={card.image}
                              alt={card.title}
                              fill
                              className="object-contain"
                              onError={(e) => {
                                e.target.src = "/api/placeholder/280/200";
                              }}
                            />
                          </div>
                        </div>
                        <button
                          onClick={() => toggleFlip(card.id)}
                          className="absolute bottom-6 left-6 w-12 h-12 bg-black/80 hover:bg-black rounded-full flex items-center justify-center transition-colors border-2 border-white shadow-lg z-10"
                        >
                          <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-xl overflow-hidden">
                      <div className="p-6 h-full flex flex-col justify-center items-center text-center">
                        <h3 className="text-2xl font-bold mb-4">
                          {card.title}
                        </h3>
                        <p className="text-lg mb-6">{card.description}</p>
                        <div className="space-y-3 text-sm mb-6">
                          {card.features.map((feature, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-center gap-2"
                            >
                              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                        <button
                          onClick={() => toggleFlip(card.id)}
                          className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                        >
                          <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .card-container.flipped {
          transform: rotateY(180deg);
        }
        .swiper-pagination {
          position: static !important;
          margin-top: 24px;
        }
        .swiper-pagination-bullet {
          width: 12px !important;
          height: 12px !important;
          margin: 0 4px !important;
        }
      `}</style>
    </section>
  );
}
