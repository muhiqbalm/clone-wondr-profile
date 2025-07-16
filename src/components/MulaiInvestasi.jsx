"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const images = Array.from({ length: 14 }, (_, i) => `/imageInv${i + 1}.svg`);

export default function InvestSection() {
  const scrollBoxRef = useRef(null);
  const rawIndex = useMotionValue(0);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false); // This state controls which layout is shown

  const currentFrame = useTransform(rawIndex, (v) =>
    Math.round(Math.max(0, Math.min(images.length - 1, v)))
  );

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      // **CHANGED THIS LINE**
      // Set isDesktop to true if window.innerWidth is GREATER than 1000px
      // This means 1000px and below will be considered "mobile/tablet" (isDesktop = false)
      setIsDesktop(window.innerWidth > 1000);
    };

    checkScreenSize(); // Run once on mount
    window.addEventListener("resize", checkScreenSize); // Add event listener for resize
    return () => window.removeEventListener("resize", checkScreenSize); // Clean up on unmount
  }, []); // Empty dependency array means this runs once on mount and cleans up on unmount

  useEffect(() => {
    if (!isDesktop) return; // Skip scroll logic on mobile/tablet

    const unsubscribe = currentFrame.on("change", (v) => {
      setVisibleIndex(v);
    });
    return () => unsubscribe();
  }, [currentFrame, isDesktop]);

  useEffect(() => {
    if (!isDesktop) return; // Skip scroll logic on mobile/tablet

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
  }, [rawIndex, isDesktop]);

  return (
    <section className="bg-[#C2F0EC] overflow-hidden">
      {/* TEKS - Fully Responsive */}
      <div className="pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8 text-center max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-black">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[56px] font-semibold leading-tight">
          Mulai investasi untuk growth maksimal
        </h2>
        <p className="mt-3 sm:mt-4 md:mt-6 text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl max-w-[95%] sm:max-w-[90%] md:max-w-[85%] mx-auto text-neutral-900 leading-relaxed">
          Beragam pilihan investasi ada di wondr! Mulai produk berisiko rendah
          sampai berjangka panjang, pilih yang sesuai dengan kebutuhan dan
          profil risiko kamu.
        </p>
      </div>

      {/* CONTENT AREA - Responsive */}
      {isDesktop ? (
        /* DESKTOP - Scroll Animation (for screens > 1000px) */
        <div className="relative min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px] xl:min-h-[450px] 2xl:min-h-[500px] flex items-center justify-center">
          <div
            ref={scrollBoxRef}
            className="absolute inset-0 overflow-y-scroll scrollbar-none"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            <div style={{ height: "200vh" }} />
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-2 sm:p-4 md:p-6">
            <motion.img
              key={visibleIndex}
              src={images[visibleIndex]}
              alt={`Frame ${visibleIndex + 1}`}
              className="w-full min-h-[180px] sm:min-h-[220px] md:min-h-[280px] lg:min-h-[320px] xl:min-h-[380px] 2xl:min-h-[450px] object-contain"
              initial={false}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.15 }}
              style={{ willChange: "opacity, transform" }}
            />
          </div>
        </div>
      ) : (
        /* MOBILE/TABLET - Static Image (for screens <= 1000px) */
        <div className="relative min-h-[150px] xs:min-h-[180px] sm:min-h-[220px] md:min-h-[280px] flex items-center justify-center py-2 sm:py-4 md:py-6">
          <img
            src="imageForTablet.svg"
            alt="Investment illustration"
            className="w-[98%] xs:w-[95%] sm:w-[90%] md:w-[85%] min-h-[120px] xs:min-h-[150px] sm:min-h-[180px] md:min-h-[250px] object-contain"
          />
        </div>
      )}

      {/* Bottom spacing - Sesuaikan atau hapus jika tidak perlu */}
    </section>
  );
}
