import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import { TodayLayout } from "@/layouts/TodayLayout";
import { MarketsLayout } from "@/layouts/MarketsLayout";
import { BrokersLayout } from "@/layouts/BrokersLayout";
import { GuidesLayout } from "@/layouts/GuidesLayout";

// Pages
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
import WhyMT5 from "./pages/education/WhyMT5";
import BeforeMT5 from "./pages/education/BeforeMT5";
import Roadmap from "./pages/Roadmap";
import Start from "./pages/Start";
import Gateway from "./pages/Gateway";
import About from "./pages/About";
import MarketDashboard from "./pages/MarketDashboard";
import BrokerGuide from "./pages/BrokerGuide";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Home section - no sub-navigation */}
          <Route path="/" element={<Index />} />
          <Route path="/gateway" element={<Gateway />} />
          <Route path="/start" element={<Start />} />
          <Route path="/about" element={<About />} />
          
          {/* Today section - /today/* with TodayLayout */}
          <Route element={<TodayLayout />}>
            <Route path="/today" element={<MarketDashboard />} />
          </Route>
          
          {/* Markets section - /markets/* with MarketsLayout */}
          <Route element={<MarketsLayout />}>
            <Route path="/markets" element={<Marketplace />} />
          </Route>
          
          {/* Brokers section - /brokers/* with BrokersLayout */}
          <Route element={<BrokersLayout />}>
            <Route path="/brokers" element={<BrokerGuide />} />
          </Route>
          
          {/* Guides section - /guides/* with GuidesLayout */}
          <Route element={<GuidesLayout />}>
            <Route path="/guides" element={<Education />} />
            <Route path="/guides/market-basics" element={<MarketBasics />} />
            <Route path="/guides/strategy" element={<Strategy />} />
            <Route path="/guides/risk" element={<Risk />} />
            <Route path="/guides/why-mt5" element={<WhyMT5 />} />
            <Route path="/guides/before-mt5" element={<BeforeMT5 />} />
            <Route path="/guides/mt5-manual" element={<MT5Manual />} />
            <Route path="/guides/mt5-pc" element={<MT5PCGuide />} />
            <Route path="/guides/mt5-mobile" element={<MT5MobileGuide />} />
            <Route path="/guides/resources" element={<Resources />} />
            <Route path="/guides/roadmap" element={<Roadmap />} />
          </Route>
          
          {/* Standalone pages */}
          <Route path="/community" element={<Community />} />
          <Route path="/consult" element={<Consult />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/blog" element={<Blog />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
