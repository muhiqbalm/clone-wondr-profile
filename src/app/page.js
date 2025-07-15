import Jumbotron from "@/components/Jumbotron";
import IntroSection from "@/components/KenalanSama";
import InvestSection from "@/components/MulaiInvestasi";

export default function Home() {
  return (
    <main>
      <Jumbotron />
      <IntroSection />
      <InvestSection />
    </main>
  );
}
