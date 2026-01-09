import { BookOpen, Wrench, FileText } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "MT5 사용법 교육",
    description: "설치부터 차트 설정, 주문 방식까지. 처음 접하는 분도 혼자서 조작할 수 있도록 단계별로 안내합니다.",
  },
  {
    icon: Wrench,
    title: "무료 도구 및 템플릿",
    description: "차트 템플릿, 백테스트 체크리스트, 저널 양식 등 실전에 바로 쓸 수 있는 자료를 제공합니다.",
  },
  {
    icon: FileText,
    title: "전략 구조 문서화",
    description: "자동매매(EA)의 진입 조건, 리스크 설계, 백테스트 결과를 투명하게 공개합니다.",
  },
];

export function WhatWeProvideSection() {
  return (
    <section className="py-16 border-t border-border">
      <div className="container px-4">
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
            이 사이트에서 제공하는 것
          </h2>
          <p className="text-sm text-muted-foreground">
            판매가 아닌 이해를 위한 콘텐츠
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-6 text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-base font-medium text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
