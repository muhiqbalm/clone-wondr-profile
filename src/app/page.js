import Jumbotron from "@/components/Jumbotron";
import InsightCermat from "@/components/InsightCermat";
import IntroSection from "@/components/KenalanSama";
import InvestSection from "@/components/MulaiInvestasi";
import BerbagaiTransaksi from "@/components/BerbagaiTransaksi";
import PromoSection from "@/components/Promo";

export default function Home() {
  return (
    <main>
      <Jumbotron />
      <IntroSection />
      <BerbagaiTransaksi />
      <InsightCermat />
      <InvestSection />
      <PromoSection />
    </main>
  );
}
