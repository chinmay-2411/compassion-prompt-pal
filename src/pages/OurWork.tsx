import { motion } from "framer-motion";
import { Bird, Heart, Home, Users, Truck, Bike, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  { icon: Bird, title: "Bird Rescue & Hospital", desc: "Dedicated bird hospital providing specialized medical care, surgery, and rehabilitation for injured, sick, and orphaned birds of all species." },
  { icon: Heart, title: "Cow & Large Animal Rescue", desc: "Emergency rescue operations for cows, bulls, and other large animals. We provide on-site first aid and transport to our shelter for treatment." },
  { icon: Home, title: "Shelter & Medical Treatment", desc: "Our shelter houses rescued animals with proper medical facilities, nutritious food, and a safe environment for recovery." },
  { icon: Users, title: "Humanitarian Help", desc: "We extend our compassion beyond animals — providing assistance to abandoned, elderly, and helpless human beings in need." },
  { icon: Truck, title: "Ambulance Services", desc: "Bike ambulances for quick bird rescue and a large vehicle ambulance for cows and big animals." },
];

const OurWork = () => {
  return (
    <div>
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Our Work</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">From emergency rescues to long-term rehabilitation, every service is driven by compassion.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="h-full hover:shadow-lg transition-shadow border-none bg-card">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <s.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-3">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ambulance Highlights */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <h2 className="font-display text-3xl font-bold text-center mb-12">Our Ambulance Fleet</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">We operate a fleet of <strong className="text-foreground">5 ambulances</strong> — 4 bike ambulances for quick bird rescues and 1 large ambulance for cows and big animals.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card className="border-none bg-card h-full">
                <CardContent className="p-8 text-center">
                  <Bike className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-display text-xl font-semibold mb-3">4 Bike Ambulances</h3>
                  <p className="text-muted-foreground text-sm">Quick-response bike ambulances for bird emergencies. Navigate narrow lanes and reach injured birds faster than any vehicle.</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card className="border-none bg-card h-full">
                <CardContent className="p-8 text-center">
                  <Truck className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-display text-xl font-semibold mb-3">1 Large Ambulance</h3>
                  <p className="text-muted-foreground text-sm">Fully equipped large vehicle dedicated to rescuing cows, bulls, and other big animals. Features on-board first aid and safe transport.</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Operating Hours */}
      <section className="py-16">
        <div className="container text-center">
          <div className="inline-flex items-center gap-3 bg-accent/20 px-6 py-4 rounded-xl">
            <Clock className="h-6 w-6 text-accent-foreground" />
            <div className="text-left">
              <div className="font-semibold">Working Hours: 9:00 AM – 8:00 PM</div>
              <p className="text-sm text-muted-foreground">Our rescue services operate daily from 9 AM to 8 PM. For emergencies, call us and we'll do our best to help.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;
