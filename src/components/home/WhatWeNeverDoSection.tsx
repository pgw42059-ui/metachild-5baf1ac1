import { XCircle } from "lucide-react";

const neverDoItems = [
  "시그널 서비스, 카피트레이딩을 제공하지 않습니다",
  "계좌 운용이나 투자금 위탁을 받지 않습니다",
  "수익률 보장, 원금 보전 약속을 하지 않습니다",
];

export function WhatWeNeverDoSection() {
  return (
    <section className="py-12">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-6 md:p-8 border-border/50">
            <h2 className="text-lg font-semibold text-foreground mb-6 text-center">
              이 사이트에서 하지 않는 것
            </h2>

            <ul className="space-y-4">
              {neverDoItems.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-xs text-muted-foreground text-center mt-6 pt-4 border-t border-border">
              본 사이트는 금융투자업 등록 업체가 아니며, 투자 조언을 제공하지 않습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
