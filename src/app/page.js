import Footer from "@/components/Footer";
import InvestSection from "@/components/MulaiInvestasi";
import Image from "next/image";
import KenalanSama from "@/components/KenalanSama";

export default function Home() {

  return (
    <main>
      {/* Konten halaman */}
       <KenalanSama />
      <InvestSection />
      {/* Footer selalu di luar main */}
    </main>
  );


}
