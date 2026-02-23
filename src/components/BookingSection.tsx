import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CalendarDays } from "lucide-react";

const BOOKING_URL = "https://kouziinfo.setmore.com/?utm_source=ig&utm_medium=social&utm_content=link_in_bio";

const BookingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="booking" className="section-padding bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(43_74%_49%),transparent_70%)]" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <CalendarDays className="mx-auto text-primary mb-4" size={40} />
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gold-gradient-text">Book Your Seat</span>
          </h2>
          <div className="w-16 h-[2px] gold-gradient-bg mx-auto mb-6" />
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Ready for a fresh look? Secure your appointment in seconds and experience premium grooming.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block gold-gradient-bg text-primary-foreground px-12 py-4 text-sm sm:text-base font-bold tracking-[0.2em] uppercase rounded-sm hover:opacity-90 transition-all duration-300 hover:shadow-[0_0_40px_hsl(43_74%_49%/0.3)]"
          >
            Book Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;
