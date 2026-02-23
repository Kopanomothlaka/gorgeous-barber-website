import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import gallery16 from "@/assets/gallery-16.jpg";
import gallery17 from "@/assets/gallery-17.jpg";
import gallery18 from "@/assets/gallery-18.jpg";
import gallery19 from "@/assets/gallery-19.jpg";
import gallery20 from "@/assets/gallery-20.jpg";
import gallery21 from "@/assets/gallery-21.jpg";
import gallery22 from "@/assets/gallery-22.jpg";
import gallery23 from "@/assets/gallery-23.jpg";
import gallery24 from "@/assets/gallery-24.jpg";
import gallery25 from "@/assets/gallery-25.jpg";
import gallery26 from "@/assets/gallery-26.jpg";
import gallery27 from "@/assets/gallery-27.jpg";
import gallery28 from "@/assets/gallery-28.jpg";
import gallery29 from "@/assets/gallery-29.jpg";
import gallery30 from "@/assets/gallery-30.jpg";
import gallery31 from "@/assets/gallery-31.jpg";
import gallery32 from "@/assets/gallery-32.jpg";
import gallery33 from "@/assets/gallery-33.jpg";
import gallery34 from "@/assets/gallery-34.jpg";

const images = [
  { src: gallery16, alt: "Fresh low fade cut" },
  { src: gallery17, alt: "Clean buzz cut style" },
  { src: gallery18, alt: "Waves haircut" },
  { src: gallery19, alt: "Sharp line-up fade" },
  { src: gallery20, alt: "Textured top fade" },
  { src: gallery21, alt: "Dreadlocks with fade" },
  { src: gallery22, alt: "Low fade haircut" },
  { src: gallery23, alt: "Happy client fresh cut" },
  { src: gallery24, alt: "High top fade" },
  { src: gallery25, alt: "Curly top with lineup" },
  { src: gallery26, alt: "Curly top fade style" },
  { src: gallery27, alt: "Clean fade at the shop" },
  { src: gallery28, alt: "Barber and client vibes" },
  { src: gallery29, alt: "Curly top grooming session" },
  { src: gallery30, alt: "Happy client after cut" },
  { src: gallery31, alt: "Cornrows with beard lineup" },
  { src: gallery32, alt: "Afro taper from behind" },
  { src: gallery33, alt: "Barber with client smiling" },
  { src: gallery34, alt: "Grooming in progress" },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gold-gradient-text">Our Work</span>
          </h2>
          <div className="w-16 h-[2px] gold-gradient-bg mx-auto mb-4" />
          <p className="text-muted-foreground max-w-lg mx-auto">
            A showcase of precision, artistry, and style.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="aspect-square overflow-hidden rounded-sm cursor-pointer group relative"
              onClick={() => setSelected(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-foreground/70 hover:text-primary transition-colors"
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={images[selected].src}
              alt={images[selected].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-sm"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
