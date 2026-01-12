import FuturesCard, { FuturesData } from "./FuturesCard";

// Mock data - replace with real data source
const mockFuturesData: FuturesData[] = [
  {
    symbol: "ES",
    name: "S&P 500 Futures",
    nameKo: "S&P 500 선물",
    trend: "bullish",
    volatility: "medium",
    difficulty: "medium",
    comment: "기술주 주도로 상승 중. 저항선 접근으로 단기 조정 가능성 주시.",
  },
  {
    symbol: "NQ",
    name: "Nasdaq-100 Futures",
    nameKo: "나스닥 100 선물",
    trend: "bullish",
    volatility: "high",
    difficulty: "hard",
    comment: "AI 관련주 급등으로 변동성 확대. 갭 리스크 존재.",
  },
  {
    symbol: "CL",
    name: "WTI Crude Oil Futures",
    nameKo: "WTI 원유 선물",
    trend: "bearish",
    volatility: "high",
    difficulty: "hard",
    comment: "수요 둔화 우려로 하락 압력. 지정학적 이슈에 따른 급변동 주의.",
  },
  {
    symbol: "ZN",
    name: "10-Year T-Note Futures",
    nameKo: "미국 10년물 국채 선물",
    trend: "bearish",
    volatility: "medium",
    difficulty: "medium",
    comment: "금리 인상 기대로 채권 가격 하락. FOMC 발언에 민감하게 반응 중.",
  },
  {
    symbol: "SR3",
    name: "SOFR Futures",
    nameKo: "단기금리 선물 (SOFR)",
    trend: "neutral",
    volatility: "low",
    difficulty: "easy",
    comment: "금리 동결 예상 반영. 경제 지표 발표 전까지 제한적 움직임.",
  },
  {
    symbol: "GC",
    name: "Gold Futures",
    nameKo: "금 선물",
    trend: "bullish",
    volatility: "medium",
    difficulty: "medium",
    comment: "달러 약세와 안전자산 선호로 상승세. 주요 지지선 유지 중.",
  },
];

const FuturesCardGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {mockFuturesData.map((data) => (
        <FuturesCard key={data.symbol} data={data} />
      ))}
    </div>
  );
};

export default FuturesCardGrid;
