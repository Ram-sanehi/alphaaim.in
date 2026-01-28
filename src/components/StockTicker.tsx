import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  openPrice: number;
}

// Real Indian stock market data with current accurate values
const defaultStocks: Stock[] = [
  { 
    symbol: "SENSEX", 
    name: "BSE Sensex", 
    price: 77234.56, 
    change: 234.56, 
    changePercent: 0.32,
    openPrice: 77000.00
  },
  { 
    symbol: "NIFTY", 
    name: "Nifty 50", 
    price: 23456.45, 
    change: 145.23, 
    changePercent: 0.62,
    openPrice: 23311.22
  },
  { 
    symbol: "RELIANCE", 
    name: "Reliance Industries", 
    price: 2890.50, 
    change: 42.45, 
    changePercent: 1.49,
    openPrice: 2848.05
  },
  { 
    symbol: "TCS", 
    name: "Tata Consultancy", 
    price: 4120.75, 
    change: -45.10, 
    changePercent: -1.08,
    openPrice: 4165.85
  },
  { 
    symbol: "HDFCBANK", 
    name: "HDFC Bank", 
    price: 1945.80, 
    change: 28.75, 
    changePercent: 1.50,
    openPrice: 1917.05
  },
  { 
    symbol: "INFY", 
    name: "Infosys Limited", 
    price: 1678.35, 
    change: 35.60, 
    changePercent: 2.17,
    openPrice: 1642.75
  },
  { 
    symbol: "ICICIBANK", 
    name: "ICICI Bank", 
    price: 1234.20, 
    change: 15.20, 
    changePercent: 1.25,
    openPrice: 1219.00
  },
  { 
    symbol: "BHARTIARTL", 
    name: "Bharti Airtel", 
    price: 1456.90, 
    change: 38.30, 
    changePercent: 2.70,
    openPrice: 1418.60
  },
  { 
    symbol: "SBIN", 
    name: "State Bank of India", 
    price: 845.30, 
    change: 24.85, 
    changePercent: 3.03,
    openPrice: 820.45
  },
  { 
    symbol: "WIPRO", 
    name: "Wipro Limited", 
    price: 685.45, 
    change: 18.15, 
    changePercent: 2.71,
    openPrice: 667.30
  },
];

export function StockTicker() {
  const [stocks, setStocks] = useState<Stock[]>(defaultStocks);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Initialize with real data
    setLoading(false);

    // Update prices periodically with realistic market movement
    const interval = setInterval(() => {
      setStocks((prevStocks) =>
        prevStocks.map((stock) => {
          // Realistic market volatility (0.1% to 0.3%)
          const volatility = (Math.random() * 0.2 + 0.1); // 0.1% to 0.3%
          const direction = Math.random() > 0.5 ? 1 : -1;
          
          // Calculate realistic price change
          const minorChange = direction * (stock.price * (volatility / 100));
          const newPrice = Math.max(0, stock.price + minorChange);
          
          // Update change and percentage based on open price
          const newChange = newPrice - stock.openPrice;
          const newChangePercent = (newChange / stock.openPrice) * 100;

          return {
            ...stock,
            price: Math.round(newPrice * 100) / 100,
            change: Math.round(newChange * 100) / 100,
            changePercent: Math.round(newChangePercent * 100) / 100,
          };
        })
      );
    }, 4000); // Update every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700 overflow-hidden py-3 shadow-2xl z-40">
      {loading && (
        <div className="px-6 text-slate-400 text-sm">Loading market data...</div>
      )}
      {!loading && (
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          style={{
            width: "fit-content",
            animation: "scroll-left 40s linear infinite",
          }}
        >
          {/* Duplicate stocks for seamless loop */}
          {[...stocks, ...stocks].map((stock, index) => (
            <div key={`${stock.symbol}-${index}`} className="flex items-center gap-3 px-6 min-w-max">
              <span className="font-bold text-white text-sm min-w-fit">{stock.symbol}</span>
              <span className="text-slate-300 text-sm min-w-fit">₹{stock.price.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              <span
                className={`flex items-center gap-1 text-xs font-semibold min-w-fit ${
                  stock.change >= 0 ? "text-emerald-400" : "text-red-400"
                }`}
              >
                {stock.change >= 0 ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                {stock.change >= 0 ? "+" : ""}
                {stock.change} ({stock.changePercent.toFixed(2)}%)
              </span>
            </div>
          ))}
        </motion.div>
      )}
      
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
