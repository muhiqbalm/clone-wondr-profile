"use client";

import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const dropdownData = [
  {
    title: "Transaksi",
    items: [
      { name: "Transfer", href: "/detail/transfer" },
      { name: "Bayar & Beli", href: "/detail/bayar-beli" },
      { name: "TapCash", href: "/detail/tapcash" },
      { name: "Transfer Luar Negeri", href: "/detail/remittance" },
      { name: "Mobile Tunai", href: "/detail/mobile-tunai" },
    ],
  },
  {
    title: "Simpanan",
    items: [{ name: "wondr multicurrency", href: "/detail/multicurrency" }],
  },
  {
    title: "Investasi",
    items: [
      { name: "Reksa Dana", href: "/detail/reksa-dana" },
      { name: "Obligasi/Sukuk", href: "/detail/obligasi" },
    ],
  },
  {
    title: "Lainnya",
    items: [{ name: "Registrasi & Referral", href: "/detail/onboarding" }],
    image: {
      src: "https://wondr.bni.co.id/assets/images/ntb.svg",
      alt: "ntb",
      width: 375,
    },
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(null);

  return (
    <>
      <header className="sticky top-0 w-full z-50 bg-white shadow-md">
        <nav className="bg-white border-gray-200 transition-all duration-500 relative">
          {/* Mobile Navbar */}
          <div className="flex justify-between items-center w-full px-6 py-3 md:hidden">
            <Link href="/" className="flex items-center space-x-1">
              <Image
                src="https://wondr.bni.co.id/assets/images/wondr-color-3x.png"
                alt="logo"
                width={64}
                height={32}
                className="object-contain"
              />
            </Link>
            <div className="flex items-center gap-[20px]">
              <button
                type="button"
                className="!px-6 !py-[9px] !text-xs text-black font-semibold bg-[#71DBD3] hover:bg-[#5CCFC5] disabled:bg-[#A7ECE8] rounded-[32px]"
              >
                Download Sekarang
              </button>

              <button onClick={() => setMenuOpen(!!menuOpen ? null : "Fitur")}>
                <Image
                  src={
                    menuOpen
                      ? "https://wondr.bni.co.id/assets/images/close-icon.png"
                      : "https://wondr.bni.co.id/assets/images/menu-icon.png"
                  }
                  alt="open menu"
                  width={16}
                  height={10}
                  className="w-4 h-[10px] object-contain transition-all"
                />
              </button>
            </div>
          </div>

          {/* Mobile Dropdown */}
          <div
            className={`absolute left-0 right-0 top-full md:hidden bg-white shadow-lg w-full z-50 transition-all duration-500 ease-in-out transform ${
              menuOpen
                ? "opacity-100 scale-y-100 pointer-events-auto"
                : "opacity-0 scale-y-0 pointer-events-none"
            } origin-top`}
          >
            <div className="flex w-full">
              {["Fitur", "Info"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    if (menuOpen !== item) {
                      setMenuOpen(item);
                    }
                  }}
                  className={classNames(
                    {
                      "border-[#71DBD3]": menuOpen === item,
                      "border-transparent": menuOpen !== item,
                    },
                    "text-black w-full flex-1 font-semibold text-sm py-[18px] px-12 border-b-[4px] bg-[#F9F9F9]"
                  )}
                >
                  Fitur
                </button>
              ))}
            </div>

            {menuOpen === "Fitur" && (
              <div className="mt-4 px-4 max-h-[70vh] overflow-y-auto">
                {dropdownData.map((element) => (
                  <MobileDropdownItem
                    key={element.title}
                    title={element.title}
                    links={element.items}
                  />
                ))}
              </div>
            )}

            {menuOpen === "Info" && <DropdownMobileInfo />}

            <div className="flex items-center odd:divide-x odd:divide-[#7A7A7A] pl-8 py-6">
              <button className="text-sm leading-[24px] font-semibold pe-2 text-[#141414]">
                ID
              </button>
              <button className="text-sm leading-[24px] font-semibold ps-2 text-[#8c8c8c]">
                EN
              </button>
            </div>
          </div>

          {/* Desktop Navbar */}
          <div className="hidden md:flex flex-wrap w-full h-16 items-center justify-between md:px-6 lg:px-[150px]">
            <div className="flex gap-16 items-center">
              <Link
                href="/"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <Image
                  src="https://wondr.bni.co.id/assets/images/wondr-color-3x.png"
                  alt="logo"
                  width={100}
                  height={32}
                  className="object-contain"
                />
              </Link>

              <div className="flex gap-6">
                {["Fitur", "Info"].map((label) => (
                  <div
                    key={label}
                    onClick={() => {
                      setMenuOpen((prev) => (prev === label ? null : label));
                    }}
                    className={classNames(
                      {
                        "bg-[#F9F9F9] border-[#71DBD3]": menuOpen === label,
                        "border-transparent": menuOpen !== label,
                      },
                      "text-black flex items-center gap-[14px] font-semibold text-base px-6 py-[18px] border-b-[4px] cursor-pointer transition"
                    )}
                  >
                    <span>{label}</span>
                    <svg
                      className={classNames(
                        { "rotate-180": menuOpen === label },
                        "w-4 h-4 transition-transform duration-500"
                      )}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                ))}
              </div>
            </div>

            {/* DESKTOP DROPDOWN */}
            <DropdownDesktopFitur isOpen={menuOpen === "Fitur"} />

            <DropdownDesktopInfo isOpen={menuOpen === "Info"} />

            <div className="flex justify-end gap-6 items-center">
              <button
                type="button"
                className="!px-6 !py-[9px] text-sm text-black font-semibold bg-[#71DBD3] hover:bg-[#5CCFC5] disabled:bg-[#A7ECE8] rounded-[32px]"
              >
                Download Sekarang
              </button>
              <div className="flex items-center space-x-1">
                <div className="flex items-center odd:divide-x odd:divide-[#7A7A7A]">
                  <button className="text-[16px] leading-[24px] font-semibold pe-2 text-[#141414]">
                    ID
                  </button>
                  <button className="text-[16px] leading-[24px] font-semibold ps-2 text-[#8c8c8c]">
                    EN
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Overlay for mobile */}
          <div
            className={`fixed w-full h-screen bg-black/25 z-10 transition-opacity duration-300 ease-in-out ${
              menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            onClick={() => setMenuOpen(false)}
          />
        </nav>
      </header>
    </>
  );
}

function DropdownDesktopFitur({ isOpen, onClose }) {
  return (
    <div
      className={`hidden md:flex !absolute left-0 right-0 top-full w-full bg-[#F9F9F9] rounded-b-xl z-[50] transition-all duration-500 ease-in-out transform ${
        isOpen
          ? "opacity-100 scale-y-100"
          : "opacity-0 scale-y-0 pointer-events-none"
      } origin-top`}
    >
      <div className="block w-full py-6 px-6 lg:px-[150px] overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-screen-xl w-full">
          {dropdownData.map((section) => (
            <div
              key={section.title}
              className="bg-white p-6 rounded-lg transition-transform duration-500 flex flex-col text-black after:content-[''] after:block after:h-[120px]"
            >
              <h3 className="font-semibold text-base mb-6">{section.title}</h3>
              <ul className="flex flex-col list-none text-base font-light">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      rel="noopener noreferrer"
                      href={item.href}
                      className="block p-[10px] rounded-lg transition-all duration-500 hover:bg-[#F0F0F0]"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              {section.image && (
                <Image
                  src={section.image.src}
                  alt={section.image.alt}
                  width={section.image.width}
                  height={0}
                  className="object-cover w-[375px] rounded-b-lg mt-4"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DropdownDesktopInfo({ isOpen }) {
  return (
    <div
      className={`hidden md:flex absolute left-0 right-0 top-full w-full bg-[#F9F9F9] rounded-b-xl z-[50] transition-all duration-500 ease-in-out transform ${
        isOpen
          ? "opacity-100 scale-y-100"
          : "opacity-0 scale-y-0 pointer-events-none"
      } origin-top`}
    >
      <div className="block w-full py-6 px-6 lg:px-[150px] overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {/* FAQ Section */}
          <div className="bg-white px-4 py-6 rounded-lg transition-transform duration-500 flex flex-col">
            <h3 className="font-semibold text-black text-2xl">FAQ</h3>
            <ul className="flex flex-col gap-5 ml-[2px] text-[#7A7A7A] text-base font-light mt-4">
              <li className="flex gap-3 items-start">
                <span className="mt-2 w-2 h-2 bg-black rounded-full shrink-0"></span>
                <span className="leading-snug">
                  Metode transfer apa saja yang bisa dipilih?
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="mt-2 w-2 h-2 bg-black rounded-full shrink-0"></span>
                <span className="leading-snug">
                  Di mana saya bisa bertransaksi menggunakan QRIS?
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="mt-2 w-2 h-2 bg-black rounded-full shrink-0"></span>
                <span className="leading-snug">
                  Apakah terdapat biaya transaksi saat menggunakan fitur Bayar &
                  Beli?
                </span>
              </li>
            </ul>
            <div className="px-4 py-2 mt-4">
              <Link
                href="/faq"
                className="text-[#FF8736] text-sm font-bold flex items-center gap-1 hover:underline"
              >
                Lihat Selengkapnya
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#FF8736"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Privacy Section */}
          <div className="flex flex-col gap-4">
            <div className="bg-white px-4 py-6 rounded-lg transition-transform duration-500 flex flex-col justify-between">
              <div>
                <h2 className="font-semibold text-black text-2xl">
                  Syarat, Ketentuan, dan Pemberitahuan Privasi
                </h2>
                <p className="text-[#7A7A7A] text-[14px] font-light mt-2">
                  Cek syarat, ketentuan, dan pemberitahuan privasi
                </p>
              </div>
              <div className="px-4 py-2 mt-4">
                <Link
                  href="/legal/privacy-policy"
                  className="text-[#FF8736] text-sm font-bold flex items-center gap-1 hover:underline"
                >
                  Lihat Selengkapnya
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#FF8736"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileDropdownItem({ title, links = [] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-4 bg-[#F9F9F9] rounded-lg">
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={() => setOpen(!open)}
        tabIndex={0}
        role="button"
      >
        <p className="font-semibold text-base text-black">{title}</p>
        <button className="w-8 h-8 bg-[#71DBD3] rounded-full flex items-center justify-center">
          <svg
            className={`w-4 h-4 transition-transform duration-500 ${
              open ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="black"
            strokeWidth={3}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      <ul
        className={`flex flex-col list-none text-black text-base font-light px-4 transition-all duration-500 ease-in-out overflow-hidden ${
          open ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0"
        }`}
      >
        {links.map((item) => (
          <li key={item.href} className="p-[10px] text-black">
            <Link
              href={item.href}
              className="transition-all duration-500 hover:font-semibold text-black"
              rel="noopener noreferrer"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DropdownMobileInfo() {
  return (
    <div>
      <div className="mb-[10px] bg-[#F9F9F9] rounded-lg">
        <div className="p-4">
          <p className="font-semibold text-base text-black">FAQ</p>
          <ul className="flex flex-col gap-5 ml-[2px] text-[#000000] text-[14px] font-light mt-2">
            <li className="flex gap-3 items-start">
              <span className="mt-2 w-2 h-2 bg-black rounded-full shrink-0" />
              <span className="leading-snug">
                Metode transfer apa saja yang bisa dipilih?
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-2 w-2 h-2 bg-black rounded-full shrink-0" />
              <span className="leading-snug">
                Di mana saya bisa bertransaksi menggunakan QRIS?
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-2 w-2 h-2 bg-black rounded-full shrink-0" />
              <span className="leading-snug">
                Apakah terdapat biaya transaksi saat menggunakan fitur Bayar &
                Beli?
              </span>
            </li>
          </ul>
          <div className="px-4 py-2 mt-4">
            <Link
              href="/faq"
              className="text-[#FF8736] text-sm font-bold hover:underline flex items-center gap-1"
            >
              Lihat Selengkapnya
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#FF8736"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Syarat & Ketentuan */}
      <div className="mb-[10px] bg-[#F9F9F9] rounded-lg">
        <div className="p-4">
          <p className="font-semibold text-base text-black">
            Syarat, Ketentuan, dan Pemberitahuan Privasi
          </p>
          <p className="text-sm text-[#7A7A7A] mt-2 leading-snug">
            Cek syarat, ketentuan, dan pemberitahuan privasi
          </p>
          <div className="px-4 py-2 mt-4">
            <Link
              href="/legal/privacy-policy"
              className="text-[#FF8736] text-sm font-bold hover:underline flex items-center gap-1"
            >
              Lihat Selengkapnya
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#FF8736"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
