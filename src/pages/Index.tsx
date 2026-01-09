import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CorePrinciplesSection } from "@/components/home/CorePrinciplesSection";
import { WhatWeProvideSection } from "@/components/home/WhatWeProvideSection";
import { WhatWeNeverDoSection } from "@/components/home/WhatWeNeverDoSection";
import { WhyMetaTraderSection } from "@/components/home/WhyMetaTraderSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { TrustDisclaimerSection } from "@/components/TrustDisclaimerSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* 1. Hero - 핵심 메시지 + CTA */}
        <HeroSection />
        
        {/* 2. Core Principles - 핵심 가치 */}
        <CorePrinciplesSection />
        <WhatWeProvideSection />
        
        {/* 4. 이 사이트에서 하지 않는 것 */}
        <WhatWeNeverDoSection />
        
        {/* 5. 왜 메타트레이더인가 */}
        <WhyMetaTraderSection />
        
        {/* 6. 신뢰 메시지 + 최종 CTA */}
        <FinalCTASection />
        
        {/* 투자 위험 고지 */}
        <TrustDisclaimerSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
