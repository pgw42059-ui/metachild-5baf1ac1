import brandCharacter from "@/assets/brand-character.png";

export function NarrativeSection() {
  return (
    <section className="relative py-20 bg-secondary/30">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-4xl mx-auto">
          {/* Character Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-2xl scale-90" />
              <img
                src={brandCharacter}
                alt="메린이 - 경험을 통해 성장한 사람"
                className="relative w-64 h-auto md:w-80 rounded-lg"
              />
            </div>
          </div>

          {/* Caption */}
          <div className="text-center md:text-left max-w-md">
            <blockquote className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-4 font-medium">
              "처음엔 저도 EA가 왜 작동하는지 몰랐습니다.
              <br />
              손실을 겪고 나서야 구조를 들여다보기 시작했습니다."
            </blockquote>
            <p className="text-sm text-muted-foreground leading-relaxed">
              수익률이 아니라 원리를 먼저 이해했더라면,
              <br />
              시행착오는 훨씬 짧았을 겁니다.
            </p>
            <p className="mt-6 text-xs text-muted-foreground/70">
              — 메린이를 만든 사람
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
