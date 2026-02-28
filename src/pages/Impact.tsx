import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import StatCounter from "@/components/StatCounter";
import gallery1 from "@/assets/gallery/gallery-1.jpg";
import gallery2 from "@/assets/gallery/gallery-2.jpg";
import gallery3 from "@/assets/gallery/gallery-3.jpg";
import gallery4 from "@/assets/gallery/gallery-4.jpg";
import gallery5 from "@/assets/gallery/gallery-5.jpg";
import gallery6 from "@/assets/gallery/gallery-6.jpg";
import gallery7 from "@/assets/gallery/gallery-7.jpg";
import gallery8 from "@/assets/gallery/gallery-8.jpg";
import gallery9 from "@/assets/gallery/gallery-9.jpg";
import gallery10 from "@/assets/gallery/gallery-10.jpg";
import gallery11 from "@/assets/gallery/gallery-11.jpg";
import gallery12 from "@/assets/gallery/gallery-12.jpg";
import gallery13 from "@/assets/gallery/gallery-13.jpg";
import gallery14 from "@/assets/gallery/gallery-14.jpg";

const galleryImages = [
  { src: gallery1, alt: "Meeting with former President of India" },
  { src: gallery2, alt: "Presenting trust work to dignitaries" },
  { src: gallery3, alt: "Award ceremony for animal welfare" },
  { src: gallery4, alt: "Founders receiving blessings" },
  { src: gallery5, alt: "Bike ambulance for bird rescue" },
  { src: gallery6, alt: "Newspaper coverage - Dainik Jagran" },
  { src: gallery7, alt: "Rabbit rescue and treatment" },
  { src: gallery8, alt: "Young volunteer with rescued bird" },
  { src: gallery9, alt: "Aaj Tak news coverage of trust" },
  { src: gallery10, alt: "Community awareness campaign" },
  { src: gallery11, alt: "Meeting with officials" },
  { src: gallery12, alt: "Bird rescue in action" },
  { src: gallery13, alt: "ANI News interview about bike ambulance" },
  { src: gallery14, alt: "Dainik Jagran newspaper feature" },
];

const stories = [
  { title: "Raja the Street Dog", desc: "Found with a broken leg near a highway, Raja was rescued and treated at our shelter. After 3 months of care, he made a full recovery and found a loving home.", tag: "Dog Rescue" },
  { title: "Injured Eagle Recovery", desc: "A majestic eagle was found with an injured wing in a village. Our bird hospital team performed surgery and rehabilitation. The eagle was released back into the wild.", tag: "Bird Rescue" },
  { title: "Cow Accident Rescue", desc: "A cow was hit by a vehicle on a busy road. Our large ambulance team reached the spot within minutes, provided first aid, and transported her to our shelter for treatment.", tag: "Cow Rescue" },
  { title: "Abandoned Kittens Saved", desc: "Four newborn kittens were found abandoned in a drain. Our bike ambulance team rescued them and nursed them back to health at our shelter.", tag: "Cat Rescue" },
];

const Impact = () => {
  return (
    <div>
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Our Impact</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Every number represents a life saved, a family reunited, and hope restored.</p>
          </motion.div>
        </div>
      </section>

      {/* Big Counter */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <StatCounter end={200000} suffix="+" label="Lives Rescued Since 2018" />
        </div>
      </section>

      {/* Stories */}
      <section className="py-16">
        <div className="container">
          <h2 className="font-display text-3xl font-bold text-center mb-12">Rescue Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {stories.map((story, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="h-full border-none bg-card">
                  <CardContent className="p-8">
                    <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">{story.tag}</span>
                    <h3 className="font-display text-lg font-semibold mb-2">{story.title}</h3>
                    <p className="text-muted-foreground text-sm">{story.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Placeholder */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <h2 className="font-display text-3xl font-bold text-center mb-12">Photo Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="aspect-square rounded-lg overflow-hidden"
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
