const PinjamanFlexible = () => {
  return (
    <section className="py-6 md:py-[72px] bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="md:px-32 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-semibold leading-snug lg:leading-tight text-black text-center mb-12">
            Pinjaman fleksibel, akses cepat, bunga bersahabat!
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Ubah Cicilan */}
          <div className="bg-[#F3EDFF] rounded-2xl lg:rounded-3xl flex flex-col justify-between overflow-hidden">
            <div className="flex flex-col gap-2 md:gap-4 p-4 lg:px-6 lg:pt-10">
                <div className="flex flex-row items-center gap-3">
                    <p className="text-[14px] font-extralight text-gray-800">
                        Ubah Cicilan</p>
                        </div>
                        <h3 className="text-base sm:text-7xl md:text-[36px] font-semibold text-black">Bayar tagihan jadi ringan
                        </h3>
                            <div className="text-xs sm:text-sm md:text-base font-light text-black">
                                <div className="ql-content-wrapper">
                                    <div className="ql-content ql-editor text-black font-normal">
                                    <p className="text-[13px] font-extralight text-black mt-2">
                                        Punya tagihan yang besar? Jadiin lebih enteng dengan ubah ke cicilan. Tersedia pilihan tenor hingga 12 bulan.
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
         
            <div className="relative flex flex-col items-end">
              <img
                alt="ubahcicilan"
                loading="lazy"
                width="260"
                height="170"
                className="object-contain max-w-[3100px] md:max-w-[4600px] w-full h-auto ml-0"
                src="https://wondr.bni.co.id/api/image/frame_1597880519_1751484415405.png"
                style={{ color: "transparent" }}
              />
            </div>
          </div>
          {/* Card 2: Card to Cash */}
          <div className="bg-[#F3EDFF] rounded-2xl lg:rounded-3xl flex flex-col justify-between overflow-hidden">
            <div className="flex flex-col gap-2 md:gap-4 p-4 lg:px-6 lg:pt-10">
                <div className="flex flex-row items-center gap-3">
                    <p className="text-[14px] font-extralight text-gray-800">
                        Card to Cash</p>
                        </div>
                        <h3 className="text-lg sm:text-7xl md:text-[32px] font-semibold text-black whitespace-nowrap">Pinjam dana dari limit kartu kredit
                        </h3>
                            <div className="text-xs sm:text-sm md:text-base font-light text-black">
                                <div className="ql-content-wrapper">
                                    <div className="ql-content ql-editor text-black font-normal">
                                    <p className="text-[13px] font-extralight text-black mt-2">
                                        Dapetin akses pinjaman dana tunai dari limit kartu kreditmu—langsung cair ke rekening.
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
         
            <div className="relative flex flex-col items-end">
              <img
                alt="ubahcicilan"
                loading="lazy"
                width="260"
                height="170"
                className="object-contain max-w-[3100px] md:max-w-[4600px] w-full h-auto ml-0"
                src="https://wondr.bni.co.id/api/image/group_427323197_1751484797654.png"
                style={{ color: "transparent" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default PinjamanFlexible;

