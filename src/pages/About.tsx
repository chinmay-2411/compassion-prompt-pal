import { motion } from "framer-motion";
import { Heart, Target, Eye, Shield, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
                In 2018, <strong className="text-foreground">Amit Jain</strong> and <strong className="text-foreground">Abhishek Jain</strong> witnessed the plight of 
                injured and abandoned animals on the streets of India. Moved by compassion and a deep belief in the sanctity of all life, 
                they began rescuing animals with nothing but their own vehicles and personal savings.
              </p>
              <p>
                What started as a personal mission quickly grew into a movement. Neighbors, friends, and strangers began joining in — 
                volunteering their time, donating resources, and reporting animals in need. By 2022, the trust was officially registered 
                as a government-verified organization.
              </p>
              <p>
                Today, Vidyasagar Jeev Daya Parivar Trust operates a dedicated animal shelter with a hospital, a specialized bird hospital, 
                India's first bike ambulance for small animal emergencies, and a large ambulance for cows and big animals. 
                We have rescued over <strong className="text-foreground">2,00,000+ lives</strong> and continue to serve every day.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <h2 className="font-display text-3xl font-bold text-center mb-12">Our Co-Founders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {[
              { name: "Amit Jain", role: "Co-Founder" },
              { name: "Abhishek Jain", role: "Co-Founder" },
            ].map((founder, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }}>
                <Card className="text-center border-none">
                  <CardContent className="p-8">
                    <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-semibold">{founder.name}</h3>
                    <p className="text-muted-foreground">{founder.role}</p>
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
              { icon: Target, title: "Our Mission", text: "To rescue, rehabilitate, and protect every animal in need — regardless of species, size, or condition. We also extend help to abandoned and helpless human beings." },
              { icon: Eye, title: "Our Vision", text: "A world where no animal suffers on the streets, where compassion guides action, and every living being has access to care and shelter." },
              { icon: Award, title: "Our Values", text: "Compassion for all living beings, transparency in operations, community-driven service, and unwavering dedication to saving lives." },
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
