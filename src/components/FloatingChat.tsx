import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function FloatingChat() {
  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full gold-gradient shadow-lg flex items-center justify-center z-50 glow-gold"
      aria-label="Chat with us"
    >
      <MessageCircle className="h-6 w-6 text-primary-foreground" />
    </motion.button>
  );
}
