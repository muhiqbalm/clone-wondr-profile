import Jumbotron from "@/components/Jumbotron";
import InsightCermat from "@/components/InsightCermat";
import IntroSection from "@/components/KenalanSama";
import InvestSection from "@/components/MulaiInvestasi";
import BerbagaiTransaksi from "@/components/BerbagaiTransaksi";

export default function Home() {
  return (
    <main>
      <Jumbotron />
      <IntroSection />
      <BerbagaiTransaksi />
      <InsightCermat />
      <InvestSection />
    </main>
  );
}
