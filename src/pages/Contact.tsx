import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { StockTicker } from "@/components/StockTicker";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram 
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Our Office",
    details: ["Dwarka City Sector 2A,", "Mahalunge Ingale, Chakan,", "Pune, Maharashtra 410501"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 9607509586"],
    links: ["tel:+919607509586"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["alphainvestmentmnt@gmail.com"],
    links: ["mailto:alphainvestmentmnt@gmail.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 2:00 PM (Consultant only)", "Sunday: Closed"],
  },
];

const Contact = () => {
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
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Let's Start Your{" "}
              <span className="gold-text">Financial Journey</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions about our services? Want to schedule a consultation? 
              We're here to help you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-display font-bold mb-2">Get in Touch</h2>
                <p className="text-muted-foreground">
                  Reach out to us through any of the following channels.
                </p>
              </div>

              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center shrink-0">
                    <item.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    {item.details.map((detail, i) => (
                      item.links ? (
                        <a
                          key={i}
                          href={item.links[i]}
                          className="block text-muted-foreground hover:text-primary transition-colors"
                        >
                          {detail}
                        </a>
                      ) : (
                        <p key={i} className="text-muted-foreground">{detail}</p>
                      )
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Social Links */}
              <div>
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, href: "#" },
                    { icon: Twitter, href: "#" },
                    { icon: Linkedin, href: "#" },
                    { icon: Instagram, href: "#" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl overflow-hidden h-96"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.4198087894544!2d73.53823!3d18.7444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ba6f6f6f6f6f%3A0x0!2sIn%20front%20of%20Mahalunge%20Gate%2C%20Ingale%2C%20Chakan%2C%20Pune%2C%20Maharashtra%20410501!5e0!3m2!1sen!2sin!4v1706460000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Alpha Investment Management - Office Location in Pune"
              className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            />
          </motion.div>
          <div className="mt-6 text-center">
            <p className="text-muted-foreground text-sm">
              📍 In front of Mahalunge Gate, Ingale, Chakan, Pune, Maharashtra 410501
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
