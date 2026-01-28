import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StockTicker } from "@/components/StockTicker";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { FloatingChat } from "@/components/FloatingChat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <StockTicker />
      <Hero />
      <Stats />
      <Services />
      <Testimonials />
      <CTA />
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default Index;
