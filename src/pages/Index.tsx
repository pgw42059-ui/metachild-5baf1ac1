import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { UserPathSelector } from "@/components/UserPathSelector";
import { ContentTabsSection } from "@/components/ContentTabsSection";
import { CoreValuesSection } from "@/components/CoreValuesSection";
import { ToolsResourcesSection } from "@/components/ToolsResourcesSection";
import { UpdatesLogSection } from "@/components/UpdatesLogSection";
import { TrustDisclaimerSection } from "@/components/TrustDisclaimerSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* 1. Hero - 핵심 메시지 */}
        <HeroSection />
        
        {/* 2. 사용자 유형별 진입점 선택 */}
        <UserPathSelector />
        
        {/* 3. 콘텐츠 탭 섹션 */}
        <ContentTabsSection />
        
        {/* 4. 핵심 가치 4카드 */}
        <CoreValuesSection />
        
        {/* 5. 도구 & 리소스 허브 */}
        <ToolsResourcesSection />
        
        {/* 6. 운영 공지 & 업데이트 로그 */}
        <UpdatesLogSection />
        
        {/* 7. 신뢰 & 리스크 고지 */}
        <TrustDisclaimerSection />
      </main>
      
      {/* 8. Footer */}
      <Footer />
    </div>
  );
};

export default Index;
