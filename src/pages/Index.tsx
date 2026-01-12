import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import TodayMarketOverview from "@/components/home/TodayMarketOverview";
import { TrustDisclaimerSection } from "@/components/TrustDisclaimerSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        {/* 오늘의 시장 - 핵심 요약 */}
        <TodayMarketOverview />
        
        {/* 투자 위험 고지 (간소화) */}
        <TrustDisclaimerSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
