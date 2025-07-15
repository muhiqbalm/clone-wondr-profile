"use client";

export default function DownloadSection() {
  return (
    <section className="bg-[#DEEF5A] relative pt-6 lg:pt-[72px] overflow-hidden">
      <div className="container-120 mx-auto px-4">
        {/* Heading & Text */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] leading-snug lg:leading-tight text-black font-semibold">
            Udah siap #JadiinMaumu bareng wondr?
          </h2>
          <div className="md:px-[120px]">
            <p className="font-light text-xs md:text-base lg:text-2xl leading-[140%] mt-2 md:mt-6 lg:mt-10 text-black">
              Cukup siapin handphone dan dokumen identitas diri, kamu siap
              daftar wondr by BNI. Jangan lupa ajak temanmu biar makin seru~
            </p>
          </div>

          {/* CTA Button */}
          <a
            href="https://wondr.bni.co.id/detail/onboarding"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 md:px-8 md:py-[19px] text-sm md:text-base text-black font-semibold bg-[#71DBD3] hover:bg-[#5CCFC5] rounded-[32px] mt-6 md:mt-10"
          >
            Lihat Cara Daftar
          </a>
        </div>

        {/* Illustration */}
        <div className="relative flex flex-col items-center justify-center mt-10 lg:mt-0 mx-auto">
          <img
            alt="download-landing"
            loading="lazy"
            src="https://wondr.bni.co.id/assets/images/download-landing/download-landingID.png"
            className="object-cover w-5/6 md:w-full md:mt-6 mb-2 md:mb-3 h-auto max-w-xl z-10 relative"
          />
        </div>
      </div>

      {/* Ornamen Wave */}
      <div className="absolute h-[140px] md:h-[255px] w-full bottom-0">
        <div className="relative h-[150px] md:h-[255px] bg-[#ECF789] bottom-0">
          <div
            className="absolute z-[1] top-0 w-full overflow-hidden"
            style={{ height: "150px" }}
          >
            <img
              alt="ornament"
              loading="lazy"
              src="https://wondr.bni.co.id/assets/images/download-landing/ornament.png"
              className="w-full h-full object-cover rotate-180"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
