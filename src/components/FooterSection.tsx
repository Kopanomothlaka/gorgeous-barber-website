const BOOKING_URL = "https://kouziinfo.setmore.com/?utm_source=ig&utm_medium=social&utm_content=link_in_bio";

const FooterSection = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <a href="#home" className="font-heading text-2xl font-bold gold-gradient-text">
              The Gorgeous Barber
            </a>
            <p className="text-muted-foreground text-sm mt-2">Precision. Style. Confidence.</p>
          </div>

          <div className="flex items-center gap-6">
            {["Home", "About", "Services", "Gallery", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-xs tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-gradient-bg text-primary-foreground px-6 py-2 text-xs font-bold tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity"
          >
            Book Now
          </a>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} The Gorgeous Barber. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
