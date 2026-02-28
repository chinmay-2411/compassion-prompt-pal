import { Link } from "react-router-dom";
import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+918866591008" className="text-primary-foreground/80 hover:text-accent transition-colors">8866591008</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+919716565758" className="text-primary-foreground/80 hover:text-accent transition-colors">9716565758</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">info@vjdptrust.org</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                <div className="text-primary-foreground/80">
                  <div className="font-medium text-primary-foreground">Registered Office:</div>
                  R-117, Flat No. 2, Khirki Ext, Malviya Nagar, New Delhi
                  <div className="font-medium text-primary-foreground mt-2">Bird Shelter:</div>
                  21/5, Babarpur, Near Maujpur Metro Station, Shahdara, Delhi - 110032
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
