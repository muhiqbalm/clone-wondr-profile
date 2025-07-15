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
          <div className="bg-[#F3EDFF] rounded-3xl flex flex-col h-full overflow-hidden px-8 md:px-12 pt-10 pb-0 gap-y-8">
            <div className="flex flex-col gap-y-3">
              <p className="text-sm font-medium text-gray-700">Ubah Cicilan</p>
              <h3 className="text-xl sm:text-2xl md:text-[32px] font-semibold text-black">
                Bayar tagihan jadi ringan
              </h3>
              <p className="text-base font-normal text-black max-w-[px]">
                Punya tagihan yang besar? Jadiin lebih enteng dengan ubah ke cicilan. Tersedia pilihan tenor hingga 12 bulan.
              </p>
            </div>
            <div className="flex flex-1 items-end">
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
          <div className="bg-[#F3EDFF] rounded-3xl flex flex-col h-full overflow-hidden px-8 md:px-12 pt-10 pb-0 gap-y-8">
            <div className="flex flex-col gap-y-3">
              <p className="text-sm font-medium text-gray-700">Card to Cash</p>
              <h3 className="text-xl sm:text-2xl md:text-[32px] font-semibold text-black">
                Pinjam dana dari limit kartu kredit
              </h3>
              <p className="text-base font-normal text-black max-w-[px]">
                Dapetin akses pinjaman dana tunai dari limit kartu kreditmu langsung cair ke rekening.
              </p>
            </div>
            <div className="flex flex-1 items-end justify-end">
              <img
                alt="cardtocash"
                loading="lazy"
                width="260"
                height="170"
                className="object-contain max-w-[3100px] md:max-w-[4600px] w-full h-auto mr-0"
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
