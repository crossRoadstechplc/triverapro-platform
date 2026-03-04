const Footer = () => (
  <footer className="bg-primary py-12">
    <div className="section-container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-lg font-heading font-bold text-primary-foreground">
            TriveraPro<span className="text-accent">™</span>
          </span>
          <p className="text-primary-foreground/50 text-sm mt-1">Developed by SPX</p>
        </div>
        <p className="text-primary-foreground/40 text-sm">
          © {new Date().getFullYear()} SPX. All rights reserved. Patent pending.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
