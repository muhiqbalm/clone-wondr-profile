import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="py-6 md:py-[72px] bg-gray-50">
      <div className="px-[120px] mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] text-black font-bold">
          Kenalan sama 3 dimensi keuangan
        </h2>
        <p className="text-sm md:text-lg lg:text-2xl text-neutral-900 mt-2 md:mt-6 leading-[140%] font-light">
          wondr siap bantu di tiap dimensi keuanganmu: transaksi di masa kini,
          pantau alur keluar-masuk uang di masa lalu, sampai investasi untuk
          masa depan.
        </p>
      </div>
      <div className="px-6 lg:px-[54px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-10">
          <div className="bg-white rounded-3xl lg:rounded-[40px] flex flex-col">
            <div className="relative pt-6 lg:pt-8">
              <img
                src="https://wondr.bni.co.id/api/image/3_dimension_illustration_1751484975817.png"
                alt="Transaksi"
              />
            </div>
            <div className="px-6 pt-4 lg:pt-6 pb-6 lg:pb-8 text-left">
              <h3 className="text-base md:text-2xl lg:text-3xl font-semibold text-black">
                Transaksi
              </h3>
              <p className="text-lg font-light text-neutral-900 mt-4">
                Berbagi Kemudahan untuk kirim uang, belanja, hingga bayar
                tagihan.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-3xl lg:rounded-[40px] flex flex-col">
            <div className="relative pt-6 lg:pt-8">
              <img
                src="https://wondr.bni.co.id/api/image/3_dimension_illustration_(1)_1751485012612.png"
                alt="Insight"
              />
            </div>
            <div className="px-6 pt-4 lg:pt-6 pb-6 lg:pb-8 text-left">
              <h3 className="text-base md:text-2xl lg:text-3xl font-semibold text-black">
                Insight
              </h3>
              <p className="text-lg font-light text-neutral-900 mt-4">
                Pantau pemasukan dan pengeluaran, jadi tahu rekomendasi keuangan
                yang cocok buat kamu.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-3xl lg:rounded-[40px] flex flex-col">
            <div className="relative pt-6 lg:pt-8">
              <img
                src="https://wondr.bni.co.id/api/image/3_dimension_illustration_(2)_1751485081149.png"
                alt="Growth"
              />
            </div>
            <div className="px-6 pt-4 lg:pt-6 pb-6 lg:pb-8 text-left">
              <h3 className="text-base md:text-2xl lg:text-3xl font-semibold text-black">
                Growth
              </h3>
              <p className="text-lg font-light text-neutral-900 mt-4">
                Jadi nilai dan kembangin aset kamu dengan beragam instrumen
                untuk masa depan terjamin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
