import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Scissors, Sparkles, Zap, Baby, Gift } from "lucide-react";

const services = [
  { icon: Scissors, title: "Haircut", description: "Precision cuts tailored to your style and face shape." },
  { icon: Sparkles, title: "Beard Trim", description: "Expert beard shaping and grooming for a sharp look." },
  { icon: Zap, title: "Fade", description: "Seamless skin fades and taper fades, executed flawlessly." },
  { icon: Baby, title: "Kids Cut", description: "Fun, friendly cuts that keep your little ones looking fresh." },
  { icon: Gift, title: "Grooming Packages", description: "Complete head-to-toe grooming for the ultimate experience." },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gold-gradient-text">Our Services</span>
          </h2>
          <div className="w-16 h-[2px] gold-gradient-bg mx-auto mb-4" />
          <p className="text-muted-foreground max-w-lg mx-auto">
            Every service delivered with precision, care, and attention to detail.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="glass-card rounded-sm p-8 text-center group hover:border-primary/40 transition-all duration-500"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-full flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <service.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
