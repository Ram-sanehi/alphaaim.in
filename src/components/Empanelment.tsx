import { motion, AnimatePresence } from "framer-motion";
import { Check, Shield, DollarSign, Building2, TrendingUp, ChevronDown } from "lucide-react";
import { useState } from "react";

const regulators = [
  { name: "SEBI", fullName: "Securities and Exchange Board of India", description: "Registered Investment Advisor" },
  { name: "AMFI", fullName: "Association of Mutual Funds in India", description: "Certified Mutual Fund Distributor" },
  { name: "IRDAI", fullName: "Insurance Regulatory and Development Authority of India", description: "Licensed Insurance Broker" },
  { name: "NSE", fullName: "National Stock Exchange", description: "Authorized Trading Member" },
  { name: "BSE", fullName: "Bombay Stock Exchange", description: "Registered Sub-Broker" },
];

const partnerCategories = [
  {
    title: "Mutual Fund Partners",
    icon: TrendingUp,
    description: "Partnerships with top mutual fund houses",
    partners: [
      "HDFC Mutual Fund",
      "SBI Mutual Fund",
      "ICICI Prudential",
      "Axis Mutual Fund",
      "Kotak Mahindra",
      "Aditya Birla Capital",
      "Nippon India",
      "UTI Mutual Fund",
      "Tata Mutual Fund",
      "DSP Mutual Fund",
      "Mirae Asset",
      "Sundaram Mutual Fund",
    ],
  },
  {
    title: "Banking & Finance Partners",
    icon: Building2,
    description: "Leading banking and financial institutions",
    partners: [
      "IDFC First Bank",
      "Kotak Mahindra Bank",
      "Axis Finance",
      "Indel Money",
      "ICICI Bank",
      "HDFC Bank",
      "Aadhar Housing Finance",
      "Easy Loan",
    ],
  },
  {
    title: "Loan & Housing Finance Partners",
    icon: DollarSign,
    description: "Trusted loan and housing finance providers",
    partners: [
      "IDFC First Bank",
      "Kotak Mahindra Bank",
      "Axis Finance",
      "Indel Money",
      "ICICI Bank",
      "HDFC Bank",
    ],
  },
];

const trustIndicators = [
  "10+ Years of Market Experience",
  "3000+ Satisfied Clients",
  "₹300+ Crores Assets Under Management",
  "100% Transparent Fee Structure",
  "Personalized Investment Strategies",
  "24/7 Portfolio Monitoring",
  "Regular Performance Reports",
  "Dedicated Relationship Manager",
];

export function Empanelment() {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Licensed & <span className="gold-text">Regulated</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We are registered with all major regulatory bodies ensuring complete transparency 
            and compliance in all our operations.
          </p>
        </motion.div>

        {/* Regulatory Badges */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-20">
          {regulators.map((reg, index) => (
            <motion.div
              key={reg.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 text-center hover-glow hover:border-primary/50"
            >
              <div className="w-16 h-16 rounded-full gold-gradient mx-auto mb-4 flex items-center justify-center">
                <span className="font-bold text-primary-foreground text-lg">{reg.name}</span>
              </div>
              <p className="text-xs text-muted-foreground">{reg.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Partner Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-display font-bold text-center mb-12">
            Our <span className="gold-text">Partners</span>
          </h3>
          <div className="space-y-6">
            {partnerCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl overflow-hidden hover-glow hover:border-primary/50"
              >
                {/* Category Header */}
                <button
                  onClick={() => setExpandedCategory(expandedCategory === index ? null : index)}
                  className="w-full p-8 flex items-center gap-6 text-left hover:bg-secondary/30 transition-colors"
                >
                  <div className="w-16 h-16 rounded-xl gold-gradient flex items-center justify-center shrink-0">
                    <category.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                    <p className="text-muted-foreground text-sm">{category.description}</p>
                  </div>
                  <ChevronDown 
                    className={`h-6 w-6 text-primary transition-transform shrink-0 ${
                      expandedCategory === index ? "rotate-180" : ""
                    }`} 
                  />
                </button>

                {/* Expanded Partners List */}
                <AnimatePresence>
                  {expandedCategory === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-border/50"
                    >
                      <div className="p-8">
                        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3">
                          {category.partners.map((partner) => (
                            <motion.div
                              key={partner}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.2 }}
                              className="glass-card rounded-lg p-3 text-center text-xs font-medium text-muted-foreground hover:text-primary hover:border-primary/50 transition-all hover-glow"
                            >
                              {partner}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 md:p-12 hover-glow hover:border-primary/50"
        >
          <div className="flex items-center gap-3 mb-8">
            <Shield className="h-8 w-8 text-primary" />
            <h3 className="text-2xl font-display font-bold">Why Trust Us?</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {trustIndicators.map((indicator, index) => (
              <motion.div
                key={indicator}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3"
              >
                <div className="w-6 h-6 rounded-full gold-gradient flex items-center justify-center shrink-0">
                  <Check className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="text-sm">{indicator}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
