import Jumbotron from "@/components/Jumbotron";
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
