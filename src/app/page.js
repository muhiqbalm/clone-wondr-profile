import Jumbotron from "@/components/Jumbotron";
import InsightCermat from "@/components/InsightCermat";
import IntroSection from "@/components/KenalanSama";
import InvestSection from "@/components/MulaiInvestasi";

export default function Home() {
  return (
    <main>
      <InsightCermat />
      <Jumbotron />
      <IntroSection />
      <InvestSection />
    </main>
  );
}
