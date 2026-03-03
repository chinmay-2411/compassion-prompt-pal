import { motion } from "framer-motion";
import { Bird, Heart, Home, Users, Truck, Bike, Clock, Newspaper, Tv } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Service photos from gallery
import birdRescueImg from "@/assets/gallery/gallery-12.jpg";
import bikeAmbulanceImg from "@/assets/gallery/gallery-5.jpg";
import communityImg from "@/assets/gallery/gallery-10.jpg";
import aniNewsImg from "@/assets/gallery/gallery-13.jpg";
import aajTakImg from "@/assets/gallery/gallery-9.jpg";
import jagranImg from "@/assets/gallery/gallery-14.jpg";
import officialsImg from "@/assets/gallery/gallery-11.jpg";
import shelterImg from "@/assets/gallery/gallery-7.jpg";

const services = [
  {
    icon: Bird,
    title: "Bird Rescue & Hospital",
    image: birdRescueImg,
    desc: "Our dedicated bird hospital is the heart of our operations. Located at Babarpur, Shahdara, the facility provides specialized medical care, surgery, and rehabilitation for injured, sick, and orphaned birds of all species.",
    details: [
      "Fully equipped bird hospital with surgical facilities",
      "Treatment for fractures, infections, dehydration & malnutrition",
      "Post-surgery rehabilitation and release programs",
      "Specialized care for pigeons, parrots, kites, eagles & more",
    ],
  },
  {
    icon: Heart,
    title: "Cow & Large Animal Rescue",
    image: communityImg,
    desc: "We conduct emergency rescue operations for cows, bulls, and other large animals across Delhi NCR. Our large ambulance is specially designed to safely transport big animals to our shelter for treatment and care.",
    details: [
      "24/7 emergency response for large animal distress calls",
      "On-site first aid and stabilization before transport",
      "Dedicated large vehicle ambulance for safe transport",
      "Post-rescue medical treatment and long-term shelter",
    ],
  },
  {
    icon: Home,
    title: "Shelter & Medical Treatment",
    image: shelterImg,
    desc: "Our shelter provides a safe haven for rescued animals with proper medical facilities, nutritious food, clean water, and a caring environment. Animals stay until they are fully recovered and ready for release or adoption.",
    details: [
      "Clean and hygienic shelter with dedicated enclosures",
      "Regular veterinary checkups and medical treatment",
      "Nutritious diet plans tailored to each animal's needs",
      "Long-term rehabilitation for severely injured animals",
    ],
  },
  {
    icon: Users,
    title: "Humanitarian Help",
    image: officialsImg,
    desc: "Our compassion extends beyond animals. We provide assistance to abandoned, elderly, and helpless human beings in need — offering food, medical help, and support to those forgotten by society.",
    details: [
      "Food distribution to homeless and abandoned individuals",
      "Medical assistance and emergency aid",
      "Support for elderly and disabled persons in distress",
      "Community awareness and welfare programs",
    ],
  },
  {
    icon: Truck,
    title: "Ambulance Services",
    image: bikeAmbulanceImg,
    desc: "We operate India's innovative bike ambulance service for bird rescue along with a large vehicle ambulance for cows and big animals — ensuring rapid emergency response across Delhi NCR.",
    details: [
      "5 bike ambulances for quick bird rescue in narrow lanes",
      "1 large ambulance for cows, bulls & big animals",
      "Equipped with first-aid kits and rescue tools",
      "Covers all areas of Delhi NCR",
    ],
  },
];

const mediaFeatures = [
  {
    type: "TV",
    icon: Tv,
    outlet: "Aaj Tak",
    image: aajTakImg,
    desc: "Vidyasagar Jeev Daya Parivar Trust featured on Aaj Tak news, sharing our mission and rescue operations with a national audience.",
  },
  {
    type: "TV",
    icon: Tv,
    outlet: "ANI News",
    image: aniNewsImg,
    desc: "ANI News covered our innovative bike ambulance service for bird rescue — a first-of-its-kind initiative in India.",
  },
  {
    type: "Print",
    icon: Newspaper,
    outlet: "Dainik Jagran",
    image: jagranImg,
    desc: "Dainik Jagran featured our trust's efforts in rescuing over 600 goats during Bakrid, highlighting the Jain community's compassion.",
  },
];

const OurWork = () => {
  return (
    <div>
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Our Work</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">From emergency rescues to long-term rehabilitation, every service is driven by compassion. Here's a closer look at everything we do.</p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16">
        <div className="container space-y-16">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}
            >
              <div className="lg:w-1/2">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img src={s.image} alt={s.title} className="w-full h-64 md:h-80 object-cover" loading="lazy" />
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <s.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-bold">{s.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                <ul className="space-y-2">
                  {s.details.map((detail, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">✓</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Ambulance Highlights */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <h2 className="font-display text-3xl font-bold text-center mb-12">Our Ambulance Fleet</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">We operate a fleet of <strong className="text-foreground">6 ambulances</strong> — 5 bike ambulances for quick bird rescues and 1 large ambulance for cows and big animals.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card className="border-none bg-card h-full">
                <CardContent className="p-8 text-center">
                  <Bike className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-display text-xl font-semibold mb-3">5 Bike Ambulances</h3>
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

      {/* Media & News Coverage */}
      <section className="py-16">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl font-bold text-center mb-4">Media & News Coverage</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Our work has been recognized and covered by leading national media outlets.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mediaFeatures.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
                <Card className="h-full border-none bg-card overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={m.image} alt={m.outlet} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <m.icon className="h-4 w-4 text-primary" />
                      <span className="text-xs font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded-full">{m.type}</span>
                      <span className="font-display font-semibold">{m.outlet}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Hours */}
      <section className="py-16 bg-muted/50">
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
