import Footer from "@/components/Footer";
import InvestSection from "@/components/MulaiInvestasi";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Konten halaman */}

      <InvestSection />
      {/* Footer selalu di luar main */}
    </main>
  );
}
