import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
}

// Simulated stock data - in production, this would come from a real API
const initialStocks: Stock[] = [
  { symbol: "SENSEX", name: "BSE Sensex", price: 72568.45, change: 234.56, changePercent: 0.32 },
  { symbol: "NIFTY", name: "Nifty 50", price: 21987.65, change: -45.23, changePercent: -0.21 },
  { symbol: "RELIANCE", name: "Reliance", price: 2456.80, change: 12.45, changePercent: 0.51 },
  { symbol: "TCS", name: "TCS", price: 3789.25, change: -23.10, changePercent: -0.61 },
  { symbol: "HDFCBANK", name: "HDFC Bank", price: 1654.30, change: 8.75, changePercent: 0.53 },
  { symbol: "INFY", name: "Infosys", price: 1478.90, change: 15.60, changePercent: 1.06 },
  { symbol: "ICICIBANK", name: "ICICI Bank", price: 987.45, change: -5.20, changePercent: -0.52 },
  { symbol: "BHARTIARTL", name: "Bharti Airtel", price: 1234.55, change: 18.30, changePercent: 1.50 },
  { symbol: "SBIN", name: "SBI", price: 623.40, change: 4.85, changePercent: 0.78 },
  { symbol: "WIPRO", name: "Wipro", price: 445.75, change: -2.15, changePercent: -0.48 },
];

export function StockTicker() {
  const [stocks, setStocks] = useState<Stock[]>(initialStocks);

  // Simulate real-time price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStocks((prevStocks) =>
        prevStocks.map((stock) => {
          const randomChange = (Math.random() - 0.5) * 2;
          const newPrice = stock.price + randomChange;
          const newChange = stock.change + randomChange * 0.1;
          const newChangePercent = (newChange / newPrice) * 100;
          return {
            ...stock,
            price: Math.round(newPrice * 100) / 100,
            change: Math.round(newChange * 100) / 100,
            changePercent: Math.round(newChangePercent * 100) / 100,
          };
        })
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-secondary/80 backdrop-blur-sm border-y border-border overflow-hidden py-3">
      <motion.div
        className="flex gap-12 whitespace-nowrap animate-ticker"
        style={{ width: "fit-content" }}
      >
        {/* Duplicate stocks for seamless loop */}
        {[...stocks, ...stocks].map((stock, index) => (
          <div key={`${stock.symbol}-${index}`} className="flex items-center gap-3">
            <span className="font-semibold text-foreground">{stock.symbol}</span>
            <span className="text-muted-foreground">₹{stock.price.toLocaleString()}</span>
            <span
              className={`flex items-center gap-1 text-sm ${
                stock.change >= 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {stock.change >= 0 ? (
                <TrendingUp className="h-3 w-3" />
              ) : (
                <TrendingDown className="h-3 w-3" />
              )}
              {stock.change >= 0 ? "+" : ""}
              {stock.change} ({stock.changePercent}%)
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
