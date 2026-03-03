import { Link } from "react-router-dom";
import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground relative">
      {/* Curved divider */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[1px]">
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 md:h-12" preserveAspectRatio="none">
          <path d="M0 48h1440V24C1200 0 240 0 0 24v24z" fill="hsl(var(--primary))" />
        </svg>
      </div>
      <div className="container py-14 md:py-18 pt-16 md:pt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-6 w-6 fill-accent text-accent" />
              <span className="font-display font-bold text-lg">Vidyasagar Jeev Daya Parivar Trust</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Saving lives, spreading compassion, and protecting the voiceless since 2018. Government verified trust serving all living beings.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { to: "/about", label: "About Us" },
                { to: "/our-work", label: "Our Work" },
                { to: "/impact", label: "Our Impact" },
                { to: "/get-involved", label: "Get Involved" },
                { to: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-primary-foreground/80 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent shrink-0" />
                <a href="tel:+918866591008" className="text-primary-foreground/80 hover:text-accent transition-colors">8866591008</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent shrink-0" />
                <a href="tel:+919716565758" className="text-primary-foreground/80 hover:text-accent transition-colors">9716565758</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent shrink-0" />
                <a href="mailto:vidyasagarjeevdayaparivar@gmail.com" className="text-primary-foreground/80 hover:text-accent transition-colors break-all">vidyasagarjeevdayaparivar@gmail.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <div className="text-primary-foreground/80">
                  <div className="font-medium text-primary-foreground">Registered Office:</div>
                  R-117, Khirki Ext, Malviya Nagar, New Delhi
                  <div className="font-medium text-primary-foreground mt-2">Bird Hospital:</div>
                  21/5, Babarpur, Near Maujpur Metro Station, Shahdara, Delhi - 110032
                  <div className="font-medium text-primary-foreground mt-2">Animal Hospital & Shelter:</div>
                  Morta Village, Ghaziabad
                </div>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Follow Us</h3>
            <p className="text-primary-foreground/80 text-sm mb-4">Join us on social media and help spread the word about animal welfare.</p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/vidyasagar.jeevdaya.parivar.trust" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
              <a href="https://www.instagram.com/vidyasagarjeevdayaparivar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
              <a href="https://www.youtube.com/@VidyasagarJDP/featured" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors" aria-label="YouTube"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Vidyasagar Jeev Daya Parivar Trust. All rights reserved. | Government Verified Trust</p>
          <p className="text-[10px] text-primary-foreground/40 mt-2">Website created by Chinmay Jain</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
