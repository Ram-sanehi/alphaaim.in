import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Business Owner",
    rating: 5,
    content: "Alpha Investment has transformed my financial outlook. Their personalized approach and expert guidance helped me build a diversified portfolio that has grown consistently over the years.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "IT Professional",
    rating: 5,
    content: "I was completely new to investing, but the team made everything so simple to understand. Their patience in explaining concepts and transparent approach built my confidence in financial planning.",
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Doctor",
    rating: 5,
    content: "Outstanding service! The retirement planning strategy they created for me gives me peace of mind knowing my family's future is secure. Highly recommend their services.",
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "Entrepreneur",
    rating: 5,
    content: "The tax planning strategies they implemented saved me significantly. Their holistic approach to wealth management is exactly what I was looking for.",
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Engineer",
    rating: 5,
    content: "The team at Alpha Investment is always available to answer my questions. Their advice is practical and tailored to my needs. I feel confident about my financial future.",
  },
  {
    id: 6,
    name: "Meera Joshi",
    role: "Teacher",
    rating: 5,
    content: "I appreciate the transparency and honesty in their recommendations. My savings have grown steadily, and I trust them completely.",
  },
  {
    id: 7,
    name: "Suresh Nair",
    role: "Small Business Owner",
    rating: 5,
    content: "Their expertise in investment and tax planning has helped my business thrive. I highly recommend Alpha Investment to anyone seeking professional financial guidance.",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;

    let mouseX = 0;
    let mouseY = 0;
    let glowX = 0;
    let glowY = 0;
    let animationId: number;

    const updateGlow = () => {
      glowX += (mouseX - glowX) * 0.05;
      glowY += (mouseY - glowY) * 0.05;
      glow.style.transform = `translate(${glowX - 150}px, ${glowY - 150}px)`;
      animationId = requestAnimationFrame(updateGlow);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (!isTouchDevice) {
      card.addEventListener('mousemove', handleMouseMove);
      updateGlow();
    }

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <section className="py-24 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            What Our <span className="gold-text">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from our satisfied clients about their experience working with us.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              ref={cardRef}
              className="glass-card rounded-2xl p-8 md:p-12 text-center relative hover-glow hover:border-primary/50"
            >
              {/* Cursor glow effect - Center */}
              <div 
                ref={glowRef}
                className="absolute pointer-events-none z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"
                style={{
                  width: '300px',
                  height: '300px',
                  background: 'radial-gradient(circle, rgba(218, 165, 32, 0.12) 0%, rgba(59, 130, 246, 0.06) 40%, rgba(6, 182, 212, 0.04) 70%, transparent 100%)',
                  filter: 'blur(50px)',
                }}
              />
              
              <Quote className="absolute top-6 left-6 h-12 w-12 text-primary/20 z-10" />
              
              <div className="relative z-10">
                {/* Image removed as requested */}

                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-lg md:text-xl text-foreground/90 italic mb-6 max-w-2xl mx-auto">
                  "{testimonials[currentIndex].content}"
                </p>

                <h4 className="text-lg font-semibold gold-text">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-muted-foreground">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
