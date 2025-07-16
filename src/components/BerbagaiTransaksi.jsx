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
    <section className="py-8 md:py-72 bg-white">
      <div className="container-72 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] !leading-snug lg:!leading-tight text-black font-semibold">
          Berbagai transaksi cukup satu aplikasi
        </h2>
      </div>

      <div className="text-center mt-4 md:mt-10 pb-2 overflow-hidden">
        <Swiper
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesOffsetBefore={72}
          slidesOffsetAfter={72}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2.5 },
            1280: { slidesPerView: 3 },
          }}
          className="pb-8"
          centeredSlides={false}
          loop={false}
          watchOverflow={true}
        >
          {transactionData.map((card) => {
            const isFlipped = flippedCards.includes(card.id);
            return (
              <SwiperSlide
                key={card.id}
                className="2xl:!h-[550px] 2xl:!max-w-[400px] xl:!h-[465px] md:!h-[420px] !h-[272px] !my-2"
              >
                <div className="relative [perspective:1000px] w-full h-full pr-4">
                  <div
                    className={`relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 ${
                      isFlipped ? "transform rotate-y-180" : ""
                    }`}
                  >
                    {/* FRONT CARD */}
                    <div className="absolute w-full h-full bg-[#f9f9f9] rounded-3xl md:rounded-4xl flex flex-col justify-between [backface-visibility:hidden] [transform:rotateY(0deg)] min-h-[272px] md:min-h-[420px]">
                      <div className="px-4 pt-6 lg:px-6 text-left">
                        <h3 className="text-xs md:text-sm xl:text-base font-light text-black">
                          {card.title}
                        </h3>
                        <p className="text-sm md:text-xl lg:text-2xl xl:text-3xl font-semibold !font-bold !leading-[120%] mt-1 lg:mt-[10px]">
                          {card.subtitle}
                        </p>
                      </div>
                      <div className="w-full rounded-b-3xl md:rounded-b-4xl overflow-hidden flex justify-center items-end h-full max-h-[250px] md:max-h-[450px]">
                        <Image
                          alt={card.title}
                          width={500}
                          height={0}
                          src={card.image}
                          className="md:w-full object-contain md:object-cover w-[110%] max-w-[110%] max-h-[250px] md:max-h-[450px]"
                        />
                      </div>
                      <button
                        onClick={() => toggleFlip(card.id)}
                        className="absolute bottom-4 left-4 w-6 h-6 md:bottom-6 md:left-6 md:w-12 md:h-12 rounded-full bg-black flex items-center justify-center opacity-50 border border-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3 h-3 md:w-5 md:h-5 text-white"
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
                    <div className="absolute top-0 left-0 w-full h-full bg-[#f9f9f9] rounded-3xl md:rounded-4xl flex flex-col justify-between overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)] min-h-[272px] md:min-h-[420px]">
                      <div className="p-6 text-left">
                        <h3 className="text-xs md:text-sm lg:text-base font-light text-black">
                          {card.title}
                        </h3>
                        <p className="text-sm md:text-lg lg:text-2xl font-light text-black !leading-[140%] mt-1 lg:mt-[10px] mb-6">
                          {card.description}
                        </p>
                      </div>
                      <button
                        onClick={() => toggleFlip(card.id)}
                        className="relative bottom-4 left-4 w-6 h-6 md:bottom-6 md:left-6 md:w-12 md:h-12 rounded-full bg-black flex items-center justify-center opacity-50 border border-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3 h-3 md:w-5 md:h-5 text-white"
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
