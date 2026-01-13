import { useState } from "react";
import { Link } from "react-router-dom";
import { Bot, Crown, Gift, ExternalLink, AlertTriangle, Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import eaProducts from "@/content/ea-products.json";

type PricingFilter = "all" | "free" | "premium";

const EAOverview = () => {
  const [pricingFilter, setPricingFilter] = useState<PricingFilter>("all");

  const filteredProducts = eaProducts.filter((ea) => {
    if (pricingFilter === "all") return true;
    return ea.pricing === pricingFilter;
  });

  const freeCount = eaProducts.filter((ea) => ea.pricing === "free").length;
  const premiumCount = eaProducts.filter((ea) => ea.pricing === "premium").length;

  return (
    <div className="container px-4 py-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Bot className="w-6 h-6 text-primary" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            EA (Expert Advisor)
          </h1>
        </div>
        <p className="text-muted-foreground">
          MT5에서 사용 가능한 자동매매 시스템입니다. 각 EA의 특성과 리스크를 반드시 확인하세요.
        </p>
      </div>

      {/* Warning Notice */}
      <div className="glass-card p-4 border border-yellow-500/30 bg-yellow-500/5 mb-8">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-foreground mb-1">사용 전 필수 확인</p>
            <p className="text-xs text-muted-foreground">
              EA는 과거 성과가 미래 수익을 보장하지 않습니다. 반드시 데모 계좌에서 충분히 테스트한 후 실계좌에 적용하세요.
              본인의 리스크 허용 범위 내에서만 사용하시기 바랍니다.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <Tabs value={pricingFilter} onValueChange={(v) => setPricingFilter(v as PricingFilter)} className="mb-6">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="all" className="gap-2">
            전체
            <Badge variant="secondary" className="text-xs">{eaProducts.length}</Badge>
          </TabsTrigger>
          <TabsTrigger value="free" className="gap-2">
            <Gift className="w-3.5 h-3.5" />
            무료
            <Badge variant="secondary" className="text-xs">{freeCount}</Badge>
          </TabsTrigger>
          <TabsTrigger value="premium" className="gap-2">
            <Crown className="w-3.5 h-3.5" />
            유료
            <Badge variant="secondary" className="text-xs">{premiumCount}</Badge>
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* EA Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {filteredProducts.map((ea) => (
          <div
            key={ea.id}
            className={cn(
              "glass-card p-5 border transition-all hover:border-primary/30",
              ea.pricing === "premium" 
                ? "border-yellow-500/20" 
                : "border-border/50"
            )}
          >
            {/* Header Row */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-foreground">{ea.name}</h3>
                {ea.badge && (
                  <Badge 
                    variant={ea.badge === "NEW" ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {ea.badge}
                  </Badge>
                )}
              </div>
              <Badge 
                variant={ea.pricing === "free" ? "outline" : "default"}
                className={cn(
                  "text-xs",
                  ea.pricing === "premium" && "bg-yellow-500/10 text-yellow-600 border-yellow-500/30"
                )}
              >
                {ea.pricing === "free" ? (
                  <><Gift className="w-3 h-3 mr-1" />무료</>
                ) : (
                  <><Crown className="w-3 h-3 mr-1" />유료</>
                )}
              </Badge>
            </div>

            {/* Type Badge */}
            <Badge variant="secondary" className="text-xs mb-3">
              {ea.type}
            </Badge>

            {/* Description */}
            <p className="text-sm text-muted-foreground mb-3">
              {ea.description}
            </p>

            {/* Risk Note */}
            <div className="flex items-start gap-2 p-2 rounded-md bg-loss/5 border border-loss/20 mb-4">
              <AlertTriangle className="w-3.5 h-3.5 text-loss shrink-0 mt-0.5" />
              <p className="text-xs text-loss/80">{ea.riskNote}</p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="w-3.5 h-3.5" />
                <span>백테스트 {ea.backtestYears}년</span>
              </div>
              <a
                href={ea.mqlLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary hover:text-primary/80 flex items-center gap-1"
              >
                MQL5 마켓
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Links */}
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <Link
          to="/ea/usage-guide"
          className="glass-card p-5 border border-border/50 hover:border-primary/30 transition-all group"
        >
          <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            EA 사용 가이드
          </h3>
          <p className="text-sm text-muted-foreground mb-3">
            EA 설치, 설정, 최적화 방법을 안내합니다.
          </p>
          <span className="text-xs text-primary flex items-center gap-1">
            가이드 보기
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </span>
        </Link>

        <Link
          to="/ea/backtest"
          className="glass-card p-5 border border-border/50 hover:border-primary/30 transition-all group"
        >
          <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            백테스트 가이드
          </h3>
          <p className="text-sm text-muted-foreground mb-3">
            전략 검증을 위한 백테스트 설정 방법.
          </p>
          <span className="text-xs text-primary flex items-center gap-1">
            가이드 보기
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default EAOverview;
