"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const images = Array.from({ length: 14 }, (_, i) => `/imageInv${i + 1}.svg`);

export default function InvestSection() {
  const scrollBoxRef = useRef(null);
  const rawIndex = useMotionValue(0);
  const [visibleIndex, setVisibleIndex] = useState(0);

  const currentFrame = useTransform(rawIndex, (v) =>
    Math.round(Math.max(0, Math.min(images.length - 1, v)))
  );

  useEffect(() => {
    const unsubscribe = currentFrame.on("change", (v) => {
      setVisibleIndex(v);
    });
    return () => unsubscribe();
  }, [currentFrame]);

  useEffect(() => {
    const box = scrollBoxRef.current;
    if (!box) return;

    const handleScroll = () => {
      const scrollTop = box.scrollTop;
      const maxScroll = box.scrollHeight - box.clientHeight;
      const progress = scrollTop / maxScroll;
      const targetIndex = progress * (images.length - 1);

      animate(rawIndex, targetIndex, {
        type: "tween",
        duration: 0.1,
        ease: "easeOut",
      });
    };

    box.addEventListener("scroll", handleScroll, { passive: true });
    return () => box.removeEventListener("scroll", handleScroll);
  }, [rawIndex]);

  return (
    <section className="bg-[#C2F0EC] overflow-hidden">
      {/* TEKS */}
      <div className="pt-16 pb-4 text-center max-w-screen-xl mx-auto px-4 text-black">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-semibold">
          Mulai investasi untuk growth maksimal
        </h2>
        <p className="mt-2 text-sm lg:text-2xl max-w-[85%] mx-auto text-neutral-900">
          Beragam pilihan investasi ada di wondr! Mulai produk berisiko rendah
          sampai berjangka panjang, pilih yang sesuai dengan kebutuhan dan
          profil risiko kamu.
        </p>
      </div>

      {/* SCROLL AREA */}
      <div className="relative h-[400px] mt-4">
        <div ref={scrollBoxRef} className="absolute inset-0 overflow-y-scroll">
          <div style={{ height: "250vh" }} />
        </div>

        {/* IMAGE */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.img
            key={visibleIndex}
            src={images[visibleIndex]}
            alt={`Frame ${visibleIndex + 1}`}
            className="w-[1183px] h-[390px] object-contain absolute"
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15 }}
            style={{ willChange: "opacity, transform" }}
          />
        </div>
      </div>
    </section>
  );
}
