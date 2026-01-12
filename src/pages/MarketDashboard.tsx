import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import MarketRegimeSummary from "@/components/dashboard/MarketRegimeSummary";
import FuturesCardGrid from "@/components/dashboard/FuturesCardGrid";
import CompositeSignals from "@/components/dashboard/CompositeSignals";
import DailyWarning from "@/components/dashboard/DailyWarning";
import TraderLevelSummary from "@/components/dashboard/TraderLevelSummary";
import { Clock, RefreshCw } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";

const MarketDashboard = () => {
  const queryClient = useQueryClient();
  
  const lastUpdated = new Date().toLocaleString("ko-KR", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const handleRefresh = () => {
    queryClient.invalidateQueries({ queryKey: ["market-daily"] });
    queryClient.invalidateQueries({ queryKey: ["daily-warning"] });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Page Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                글로벌 선물 시장 대시보드
              </h1>
              <p className="text-muted-foreground text-sm mt-1">
                주요 6개 종목의 실시간 상태를 한눈에 파악하세요
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="w-3.5 h-3.5" />
              <span>최근 업데이트: {lastUpdated}</span>
              <button 
                onClick={handleRefresh}
                className="ml-2 p-1.5 rounded-md hover:bg-muted transition-colors"
                title="새로고침"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* [1] Market Regime Summary */}
          <section className="mb-8">
            <MarketRegimeSummary />
          </section>

          {/* [4] Daily Warning - Prominent placement */}
          <section className="mb-8">
            <DailyWarning />
          </section>

          {/* [2] Top 6 Futures Cards */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              Top 6 종목 상태
            </h2>
            <FuturesCardGrid />
          </section>

          {/* [3] Composite Signals */}
          <section className="mb-8">
            <CompositeSignals />
          </section>

          {/* [5] Trader Level Summary */}
          <section>
            <TraderLevelSummary />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MarketDashboard;
