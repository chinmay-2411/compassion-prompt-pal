import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Users, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const GetInvolved = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast({ title: "Please fill required fields", variant: "destructive" });
      return;
    }
    toast({ title: "Thank you for volunteering!", description: "We will contact you soon." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div>
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Get Involved</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Join us in making a difference — every hand counts, every rupee saves a life.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Volunteer Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
                <Users className="h-6 w-6 text-primary" /> Become a Volunteer
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input placeholder="Your Name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} required />
                <Input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={255} />
                <Input type="tel" placeholder="Phone Number *" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} maxLength={15} required />
                <Textarea placeholder="Why do you want to volunteer? (optional)" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} maxLength={1000} />
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Submit Volunteer Application</Button>
              </form>
            </motion.div>

            {/* Donate + Corporate */}
            <div className="space-y-8">
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <Card className="border-none bg-accent/10">
                  <CardContent className="p-8">
                    <Heart className="h-10 w-10 text-primary mb-4" />
                    <h3 className="font-display text-xl font-semibold mb-3">Donate</h3>
                    <p className="text-muted-foreground text-sm mb-6">Your donations help us run our shelters, hospitals, and ambulance services. Every contribution saves a life.</p>
                    <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/80 font-bold">
                      <a href="https://wa.me/918866591008?text=I%20want%20to%20donate" target="_blank" rel="noopener noreferrer">Donate via WhatsApp</a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
                <Card className="border-none bg-primary/5">
                  <CardContent className="p-8">
                    <Building2 className="h-10 w-10 text-secondary mb-4" />
                    <h3 className="font-display text-xl font-semibold mb-3">Corporate Partnership</h3>
                    <p className="text-muted-foreground text-sm mb-6">Partner with us through CSR initiatives. We welcome corporate sponsors who share our vision of compassion.</p>
                    <Button asChild variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                      <a href="tel:+918866591008">Contact Us for Partnerships</a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
