import { AlertTriangle } from "lucide-react";

export function TrustDisclaimerSection() {
  return (
    <section className="py-8 border-t border-border">
      <div className="container px-4">
        <div className="max-w-md mx-auto">
          <div className="flex items-start gap-3 p-4 rounded-lg bg-destructive/5 border border-destructive/10">
            <AlertTriangle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              리스크가 수반되는 금융 거래이며, 모든 판단은 사용자 책임입니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
