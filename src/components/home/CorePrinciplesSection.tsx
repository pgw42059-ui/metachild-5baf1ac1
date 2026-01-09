import { Search, MessageSquareWarning, ShieldCheck } from "lucide-react";

const principles = [
  {
    icon: Search,
    title: "구조부터 봅니다",
    subtitle: "전략보다 구조, 감정보다 시스템.",
  },
  {
    icon: MessageSquareWarning,
    title: "리스크를 숨기지 않습니다",
    subtitle: "손실·비용·한계를 먼저 말합니다.",
  },
  {
    icon: ShieldCheck,
    title: "생존을 우선합니다",
    subtitle: "수익보다 지속 가능한 구조.",
  },
];

export function CorePrinciplesSection() {
  return (
    <section className="py-16 md:py-20 bg-card/30">
      <div className="container px-4">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {principles.map((item, idx) => (
            <div key={idx} className="text-center">
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/30 flex items-center justify-center">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              
              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                {item.title}
              </h3>
              
              {/* Subtitle */}
              <p className="text-sm text-muted-foreground">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
