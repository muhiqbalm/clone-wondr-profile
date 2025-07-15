"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F0F0F0] pt-16 pb-8 px-6 xl:px-[150px] text-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {/* Logo */}
        <div className="col-span-1 w-full mb-6 md:mb-0">
          <Link href="/" className="inline-block">
            <Image
              src="https://wondr.bni.co.id/api/image/wondr_logo_1751643603535.png"
              alt="logo"
              width={348}
              height={109}
              className="w-[174px] h-[55px] md:w-[348px] md:h-[109px] object-contain"
            />
          </Link>
        </div>

        {/* Download Buttons */}
        <div className="hidden md:grid md:grid-cols-1 lg:grid-cols-2 gap-4 text-sm col-span-1 text-black items-center">
          <a
            href="https://apps.apple.com/id/app/wondr-by-bni/id6499518320?utm_source=Appstore&utm_medium=Microsite&utm_campaign=Footer_Download_Button"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#7A7A7A] rounded-full px-6 py-3 flex items-center gap-2 w-full justify-center"
          >
            <Image
              src="https://wondr.bni.co.id/api/image/icon_l_1751640224947.png"
              alt="apple icon"
              width={24}
              height={24}
              className="w-6 h-auto object-contain"
            />
            <span className="font-semibold text-base leading-6">
              Download di App Store
            </span>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=id.bni.wondr&referrer=utm_source%3DPlaystore%26utm_medium%3DMicrosite%26utm_content%3DFooter_Download_Button"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#7A7A7A] rounded-full px-6 py-3 flex items-center gap-2 w-full justify-center"
          >
            <Image
              src="https://wondr.bni.co.id/api/image/icon_l-1_1751640228764.png"
              alt="playstore icon"
              width={24}
              height={24}
              className="w-6 h-auto object-contain"
            />
            <span className="font-semibold text-base leading-6">
              Download di Play Store
            </span>
          </a>
        </div>

        {/* Informasi Kontak */}
        <div className="flex flex-col gap-1 col-span-1">
          <p className="text-xs md:text-base leading-4 md:leading-6 text-[#8C8C8C] font-semibold">
            Butuh informasi lebih lanjut?
          </p>
          <p className="text-xs md:text-base leading-4 md:leading-6 text-[#8C8C8C] font-light">
            BNI Call - 1500046
          </p>
        </div>

        <div className="flex flex-col gap-1 col-span-1">
          <p className="text-xs md:text-base leading-4 md:leading-6 text-[#8C8C8C] font-semibold">
            Kantor Pusat
          </p>
          <p className="text-xs md:text-base leading-4 md:leading-6 text-[#8C8C8C] font-light md:w-1/2">
            Gedung Grha BNI, Jl. Jenderal Sudirman Kav. 1 Jakarta Pusat 10220,
            Indonesia.
          </p>
        </div>

        <p className="text-xs md:text-base leading-4 md:leading-6 text-[#8C8C8C] font-light col-span-1">
          PT Bank Negara Indonesia (Persero) Tbk. Berizin dan diawasi oleh
          Otoritas Jasa Keuangan (OJK) & Bank Indonesia (BI) serta merupakan
          peserta penjaminan Lembaga Penjamin Simpanan (LPS).
        </p>

        {/* Sosial Media */}
        <div className="flex gap-2 md:gap-4 items-center justify-center md:justify-start flex-wrap col-span-1 mt-6 md:mt-0">
          {[
            {
              href: "https://api.whatsapp.com/send?phone=628118611946",
              img: "group_5789_1751640146947.png",
              alt: "whatsapp",
            },
            {
              href: "https://www.instagram.com/bni46",
              img: "group_5789-1_1751640151330.png",
              alt: "instagram",
            },
            {
              href: "https://x.com/BNI",
              img: "group_5790_1751640154849.png",
              alt: "twitter",
            },
            {
              href: "https://www.youtube.com/channel/UCD5tQVeJKdwoTtoTcF8MfSA",
              img: "group_5791_1751640158541.png",
              alt: "youtube",
            },
            {
              href: "https://www.facebook.com/BNI",
              img: "group_5792_1751640162829.png",
              alt: "facebook",
            },
            {
              href: "https://id.linkedin.com/company/pt-bank-negara-indonesia-persero-tbk-",
              img: "group_5793_1751640168501.png",
              alt: "linkedin",
            },
          ].map(({ href, img, alt }) => (
            <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
              <Image
                src={`https://wondr.bni.co.id/api/image/${img}`}
                alt={alt}
                width={56}
                height={56}
                className="w-[32px] h-[32px] md:w-[56px] md:h-[56px] object-contain"
              />
            </a>
          ))}
        </div>

        {/* Garis Bawah */}
        <div className="border-t border-[#D0DDDE] md:mt-8 col-span-1 md:col-span-2"></div>

        {/* Copyright */}
        <p className="text-xs leading-4 text-[#8C8C8C] font-light text-center md:text-left col-span-1">
          © Hak Cipta 2025 PT. Bank Negara Indonesia (Persero), Tbk.
        </p>

        {/* Link Legal */}
        <div className="flex gap-4 text-center xl:text-left mt-4 md:mt-0">
          <Link
            href="/legal/privacy-policy"
            className="text-xs leading-4 text-[#8C8C8C] font-light underline"
          >
            Kebijakan Privasi
          </Link>
          <a
            href="https://www.bni.co.id/id-id/beranda/kabar-bni/security-awareness"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs leading-4 text-[#8C8C8C] font-light underline"
          >
            Tips Pengamanan Transaksi
          </a>
          <a
            href="https://bni.co.id/id-id/e-banking/wondr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs leading-4 text-[#8C8C8C] font-light underline"
          >
            Syarat dan Ketentuan
          </a>
        </div>
      </div>
    </footer>
  );
}
