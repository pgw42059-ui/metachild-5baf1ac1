import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SubNavigation } from "@/components/SubNavigation";
import { Outlet } from "react-router-dom";

interface SectionLayoutProps {
  children?: React.ReactNode;
}

export function SectionLayout({ children }: SectionLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SubNavigation />
      
      <main className="pt-28 pb-16">
        {children || <Outlet />}
      </main>
      
      <Footer />
    </div>
  );
}
