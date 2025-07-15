import Image from "next/image";

export default function InsightCermat(params) {
  return (
    <section className="py-6 xl:px-[200px] md:pt-9 md:pb-[72px] bg-white">
      <div className="px-6">
        <h2 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] !leading-snug lg:!leading-tight text-black text-center font-demibold xl:text-[40px] ">
          Insight cermat dari kebiasaan keuangan
        </h2>
      </div>
      <div className="pl-6">
        <div className="w-full mt-6 md:mt-12 overflow-x-auto md:overflow-x-hidden">
          <div className="min-w-[600px]">
            <img
              alt="insight"
              loading="lazy"
              width="0"
              height="0"
              decoding="async"
              data-nimg="1"
              className="w-full h-auto pr-6 md:pr-0"
              src="https://wondr.bni.co.id/api/image/content_1751486086818.png"
              style={{ color: "transparent;" }}
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
}
