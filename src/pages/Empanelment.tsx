import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { StockTicker } from "@/components/StockTicker";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Empanelment as EmpanelmentSection } from "@/components/Empanelment";

const EmpanelmentPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <StockTicker />

      {/* Hero Section */}
      <section className="py-24 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Empanelment
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Trusted by <span className="gold-text">Industry Leaders</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We are registered with all major regulatory bodies and partnered with 
              leading financial institutions to offer you the best solutions.
            </p>
          </motion.div>
        </div>
      </section>

      <EmpanelmentSection />
      <CTA />
      <Footer />
    </div>
  );
};

export default EmpanelmentPage;
