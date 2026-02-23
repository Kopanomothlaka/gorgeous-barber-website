import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Scissors } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Scissors className="mx-auto text-primary mb-4 rotate-90" size={32} />
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gold-gradient-text">About Us</span>
          </h2>
          <div className="w-16 h-[2px] gold-gradient-bg mx-auto mb-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              At <span className="text-primary font-semibold">The Gorgeous Barber</span>, we believe that a great haircut is more than just a trim — it's a statement. Our skilled barbers combine traditional craftsmanship with modern techniques to deliver cuts that define your personal style.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              From precision fades to classic beard grooming, every service is tailored to bring out the best version of you. Step into our shop and experience the difference that true artistry makes.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { number: "10+", label: "Years of Experience" },
              { number: "5000+", label: "Happy Clients" },
              { number: "100%", label: "Satisfaction" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                className="flex items-center gap-6 glass-card rounded-sm p-5"
              >
                <span className="font-heading text-3xl sm:text-4xl font-bold gold-gradient-text">{stat.number}</span>
                <span className="text-muted-foreground text-sm tracking-wider uppercase">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
