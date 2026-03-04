import { Facebook, X, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary py-12">
    <div className="section-container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-lg font-heading font-bold text-primary-foreground">
            TriveraPro<span className="text-accent">™</span>
          </span>
          <p className="text-primary-foreground/50 text-sm mt-1">Integrated Renewable Infrastructure</p>
        </div>
        
        {/* Social Media Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://facebook.com/triverapro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/60 hover:text-accent transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://x.com/triverapro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/60 hover:text-accent transition-colors"
            aria-label="X (Twitter)"
          >
            <X size={20} />
          </a>
          <a
            href="https://instagram.com/triverapro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/60 hover:text-accent transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
        </div>
        
        <p className="text-primary-foreground/40 text-sm">
          © {new Date().getFullYear()} TriveraPro. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
