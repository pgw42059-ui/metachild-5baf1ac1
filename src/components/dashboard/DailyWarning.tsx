import { AlertTriangle } from "lucide-react";

// Mock data - replace with real data source
const mockWarning = {
  message: "지수는 강하지만 금리가 동시에 상승 중 – 추격 진입 주의",
  severity: "caution" as "info" | "caution" | "danger",
};

const severityConfig = {
  info: {
    bg: "bg-accent/10",
    border: "border-accent/30",
    iconColor: "text-accent",
    textColor: "text-accent",
  },
  caution: {
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/30",
    iconColor: "text-yellow-500",
    textColor: "text-yellow-400",
  },
  danger: {
    bg: "bg-loss/10",
    border: "border-loss/30",
    iconColor: "text-loss",
    textColor: "text-loss",
  },
};

const DailyWarning = () => {
  const { message, severity } = mockWarning;
  const config = severityConfig[severity];

  return (
    <div
      className={`flex items-center gap-3 p-4 rounded-lg border ${config.bg} ${config.border}`}
    >
      <AlertTriangle className={`w-5 h-5 flex-shrink-0 ${config.iconColor}`} />
      <div>
        <p className="text-xs text-muted-foreground mb-0.5">
          오늘의 핵심 주의 포인트
        </p>
        <p className={`font-medium ${config.textColor}`}>{message}</p>
      </div>
    </div>
  );
};

export default DailyWarning;
