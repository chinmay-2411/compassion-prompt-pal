import { motion } from "framer-motion";
import { Target, Eye, Shield, Award, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import amitPhoto from "@/assets/amit-jain.jpg";
import abhishekPhoto from "@/assets/abhishek-jain.jpg";

const founders = [
  {
    name: "Amit Jain",
    role: "Founder",
    age: "45 years old",
    photo: amitPhoto,
    bio: "A dedicated businessman who takes out time from his busy schedule to serve animals in need. Despite running a successful business, Amit ji's heart belongs to the voiceless creatures. His vision and tireless efforts have been the backbone of this trust since 2018.",
    quote: "Every animal deserves love and care. Business can wait, but a life in pain cannot.",
  },
  {
    name: "Abhishek Jain",
    role: "Co-Founder",
    age: "",
    photo: abhishekPhoto,
    bio: "A compassionate soul who co-founded the trust alongside Amit ji. Abhishek ji manages day-to-day rescue operations and ensures every rescued animal receives proper medical treatment and rehabilitation at our shelters.",
    quote: "When you save one life, you save the entire world. That's what keeps us going every day.",
  },
];

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-lg text-muted-foreground">The story of compassion, dedication, and saving every life we can.</p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-display text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Vidyasagar Jeev Daya Parivar Trust is a Delhi-based non-profit organization dedicated to rescuing injured birds, animals, and vulnerable humans.
                With a compassionate and rapid-response team, we operate a 12-hour rescue helpline to assist cases across Delhi and surrounding areas.
              </p>
              <p>
                In 2018, <strong className="text-foreground">Amit Jain</strong> and <strong className="text-foreground">Abhishek Jain</strong> witnessed the plight of 
                injured and abandoned animals on the streets. Moved by compassion and a deep belief in the sanctity of all life, 
                they began rescuing animals with nothing but their own vehicles and personal savings.
              </p>
              <p>
                What started as a personal mission quickly grew into a movement. Neighbors, friends, and strangers began joining in — 
                volunteering their time, donating resources, and reporting animals in need. By 2022, the trust was officially registered 
                as a government-verified organization.
              </p>
              <p>
                Today, the trust operates a dedicated animal shelter with a hospital in <strong className="text-foreground">Morta Village, Ghaziabad</strong>, 
                a specialized bird hospital in <strong className="text-foreground">Babarpur, Shahdara</strong>, 
                and a fleet of <strong className="text-foreground">6 ambulances</strong> including 5 bike ambulances for bird emergencies and 1 large ambulance for cows and big animals. 
                We have rescued over <strong className="text-foreground">2,00,000+ lives</strong> and continue to serve every day from 9 AM to 8 PM.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <h2 className="font-display text-3xl font-bold text-center mb-4">Our Co-Founders</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">The hearts and hands behind every rescue, every shelter, and every life saved.</p>
          <div className="space-y-12 max-w-4xl mx-auto">
            {founders.map((founder, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2, duration: 0.6 }}>
                <Card className="border-none overflow-hidden">
                  <CardContent className="p-0">
                    <div className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                      {/* Photo */}
                      <div className="md:w-1/3 relative">
                        <img src={founder.photo} alt={founder.name} className="w-full h-64 md:h-full object-cover" />
                      </div>
                      {/* Info */}
                      <div className="md:w-2/3 p-8 md:p-10 flex flex-col justify-center">
                        <h3 className="font-display text-2xl font-bold mb-1">{founder.name}</h3>
                        <p className="text-primary font-medium text-sm mb-1">{founder.role} {founder.age && `• ${founder.age}`}</p>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{founder.bio}</p>
                        <div className="bg-primary/5 rounded-lg p-4 flex gap-3 items-start">
                          <Quote className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                          <p className="text-foreground italic text-sm">"{founder.quote}"</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Our Mission", text: "To protect and nurture vulnerable lives — injured birds, animals, and humans — through timely rescue, compassionate care, and community education. We strive to create a world where every living being is treated with kindness and respect." },
              { icon: Eye, title: "Our Vision", text: "To expand across all of India, delivering fast, free, and reliable rescue services to protect every injured bird, animal, and human. We aim to build a compassionate nation where no living being suffers alone, ensuring safety, care, and dignity for all." },
              { icon: Award, title: "Our Values", text: "Compassion for all living beings, transparency in operations, community-driven service, and unwavering dedication to saving lives. Environmental harmony that sustains life for generations to come." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
                <Card className="h-full border-none bg-card">
                  <CardContent className="p-8 text-center">
                    <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-7 w-7 text-accent-foreground" />
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification */}
      <section className="py-16 bg-primary/5">
        <div className="container text-center">
          <div className="inline-flex items-center gap-3 bg-primary/10 px-6 py-4 rounded-xl">
            <Shield className="h-8 w-8 text-primary" />
            <div className="text-left">
              <div className="font-display font-bold text-lg">Government Verified Trust</div>
              <p className="text-sm text-muted-foreground">Registered in 2022 | Running since 2018</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
