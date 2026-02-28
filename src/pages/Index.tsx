import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Users, Phone, Bird, Shield, Truck, MessageCircle, Landmark, IndianRupee } from "lucide-react";
import upiQrCode from "@/assets/upi-qr-code.png";
import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import StatCounter from "@/components/StatCounter";

const testimonials = [
  { name: "Rajesh Patel", text: "I called them at night for an injured bird, and they arrived within minutes. Truly dedicated people!", location: "Shahdara, Delhi" },
  { name: "Priya Sharma", text: "The trust has been doing incredible work for animals in our community. Their shelter is well-maintained and the animals are cared for with love.", location: "Noida" },
  { name: "Mahesh Joshi", text: "I've been volunteering with them for 2 years. The passion of Amit ji and Abhishek ji for animal welfare is inspiring.", location: "Ghaziabad" },
  { name: "Sunita Agarwal", text: "They rescued an injured cow from our street within 30 minutes of calling. The large ambulance team was very professional and caring.", location: "Laxmi Nagar, Delhi" },
  { name: "Rohit Verma", text: "The bike ambulance is a brilliant idea! They saved a kite that was tangled in a thread near my building. God bless this team.", location: "Mayur Vihar, Delhi" },
  { name: "Neha Gupta", text: "I donated to their trust and they sent me updates about the animals my money helped rescue. Very transparent and genuine people.", location: "Faridabad" },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/50" />
        </div>
        <div className="container py-16 md:py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />
              Government Verified Trust
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
              Saving Lives.<br />
              <span className="text-primary">Spreading Compassion.</span><br />
              Protecting the Voiceless.
            </h1>
            <p className="text-lg md:text-xl text-foreground mb-8 max-w-2xl">
              Vidyasagar Jeev Daya Parivar Trust has been rescuing and rehabilitating animals across India since 2018. Over 2,00,000 lives saved and counting.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/80 font-bold text-base">
                <a href="https://wa.me/918866591008?text=I%20want%20to%20donate" target="_blank" rel="noopener noreferrer">
                  <Heart className="h-5 w-5 mr-1" /> Donate Now
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-bold text-base border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/get-involved">
                  <Users className="h-5 w-5 mr-1" /> Become a Volunteer
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-bold text-base border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                <a href="tel:+919716565758">
                  <Phone className="h-5 w-5 mr-1" /> Report Animal in Need
                </a>
              </Button>
              <Button asChild size="lg" className="bg-[#25D366] text-white hover:bg-[#25D366]/80 font-bold text-base">
                <a href="https://chat.whatsapp.com/HcZMMJa0KdD38YioomKm21?mode=gi_t" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5 mr-1" /> Join WhatsApp Group
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCounter end={9} suffix="+" label="Years of Service" />
            <StatCounter end={200000} suffix="+" label="Lives Rescued" />
            <StatCounter end={2} label="Shelters & Hospitals" />
            <StatCounter end={6} label="Ambulances" />
          </div>
        </div>
      </section>

      {/* About Intro */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Founded by <strong className="text-foreground">Amit Jain</strong> and <strong className="text-foreground">Abhishek Jain</strong> in 2018, 
              Vidyasagar Jeev Daya Parivar Trust is dedicated to the rescue, treatment, and rehabilitation of injured, sick, and abandoned animals. 
              From birds to cows, and even helping abandoned human beings — we believe every life matters.
            </p>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/about">Learn More About Us →</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Bird, title: "Bird Rescue & Hospital", desc: "Dedicated bird hospital with specialized care for injured and sick birds." },
              { icon: Heart, title: "Cow & Large Animal Rescue", desc: "Large ambulance service for cows and big animals with emergency medical treatment." },
              { icon: Truck, title: "Ambulance Services", desc: "5 bike ambulances for birds and 1 large ambulance for cows and big animals." },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-none bg-card">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/our-work">See All Our Work →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <Card className="h-full border-none bg-card">
                  <CardContent className="p-8">
                    <p className="text-muted-foreground italic mb-4">"{t.text}"</p>
                    <div className="font-semibold text-foreground">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.location}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-16 md:py-24 bg-accent/5">
        <div className="container max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
              <Heart className="inline h-8 w-8 text-primary mr-2" />
              Support Our Cause
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">Your donations help us run our shelters, hospitals, and ambulance services. Every contribution saves a life.</p>

            {/* Donation Tiers */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-8">
              {[
                { amount: "₹1,100", label: "Food" },
                { amount: "₹2,100", label: "Shelter Support" },
                { amount: "₹3,100", label: "Ambulance" },
                { amount: "₹5,100", label: "Medicine" },
                { amount: "₹11,000", label: "All Support" },
              ].map((tier, i) => (
                <div key={i} className="bg-card rounded-lg p-4 text-center border border-primary/20 hover:shadow-md transition-shadow">
                  <IndianRupee className="h-4 w-4 text-primary mx-auto mb-1" />
                  <div className="font-bold text-primary text-lg">{tier.amount}</div>
                  <div className="text-xs text-muted-foreground">{tier.label}</div>
                </div>
              ))}
            </div>

            {/* UPI QR Code & Bank Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto">
              <div className="bg-card rounded-xl p-6 border border-primary/20 flex flex-col items-center">
                <span className="font-display font-semibold mb-3">Scan & Pay via UPI</span>
                <img src={upiQrCode} alt="UPI QR Code for donations" className="w-48 h-48 object-contain mb-2" />
                <p className="text-xs text-muted-foreground text-center">Scan with any UPI app — Google Pay, PhonePe, Paytm, etc.</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-primary/20">
                <div className="flex items-center gap-2 mb-3">
                  <Landmark className="h-5 w-5 text-primary" />
                  <span className="font-display font-semibold">Bank Transfer Details</span>
                </div>
                <div className="text-sm space-y-1.5 text-muted-foreground">
                  <p><span className="font-medium text-foreground">A/C Name:</span> Vidyasagar Jeev Daya Parivar Trust</p>
                  <p><span className="font-medium text-foreground">A/C No:</span> 50200073992952</p>
                  <p><span className="font-medium text-foreground">IFSC Code:</span> HDFC0001360</p>
                  <p><span className="font-medium text-foreground">Bank:</span> HDFC Bank</p>
                </div>
                <p className="text-xs text-muted-foreground mt-3">For receipt, send screenshot on WhatsApp: 9716565758</p>
              </div>
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/80 font-bold text-base">
                <a href="https://wa.me/918866591008?text=I%20want%20to%20donate" target="_blank" rel="noopener noreferrer">
                  Donate via WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Every Life Matters</h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Your support helps us rescue more animals, run our shelters, and save lives every single day.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/80 font-bold text-base">
              <a href="https://wa.me/918866591008?text=I%20want%20to%20donate" target="_blank" rel="noopener noreferrer">
                Donate Now
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-bold text-base">
              <Link to="/get-involved">Volunteer With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
