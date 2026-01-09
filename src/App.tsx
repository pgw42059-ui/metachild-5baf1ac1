import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Education from "./pages/Education";
import Marketplace from "./pages/Marketplace";
import MT5Manual from "./pages/MT5Manual";
import MT5PCGuide from "./pages/MT5PCGuide";
import MT5MobileGuide from "./pages/MT5MobileGuide";
import Resources from "./pages/Resources";
import Community from "./pages/Community";
import Consult from "./pages/Consult";
import Thanks from "./pages/Thanks";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Blog from "./pages/Blog";
import MarketBasics from "./pages/education/MarketBasics";
import Strategy from "./pages/education/Strategy";
import Risk from "./pages/education/Risk";
import Roadmap from "./pages/Roadmap";
import Start from "./pages/Start";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/education" element={<Education />} />
          <Route path="/education/market-basics" element={<MarketBasics />} />
          <Route path="/education/strategy" element={<Strategy />} />
          <Route path="/education/risk" element={<Risk />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/community" element={<Community />} />
          <Route path="/consult" element={<Consult />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/guide/mt5-manual" element={<MT5Manual />} />
          <Route path="/guide/mt5-pc" element={<MT5PCGuide />} />
          <Route path="/guide/mt5-mobile" element={<MT5MobileGuide />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/start" element={<Start />} />
          <Route path="/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
