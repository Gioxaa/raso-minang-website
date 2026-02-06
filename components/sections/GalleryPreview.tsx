"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GALLERY_IMAGES } from "@/lib/constants";

export function GalleryPreview() {
  // Take first 6 images for preview
  const previewImages = GALLERY_IMAGES.slice(0, 6);

  return (
    <section id="gallery" className="section-padding bg-secondary/30 overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Galeri
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Momen <span className="text-gradient">Istimewa</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Suasana hangat dan hidangan lezat yang kami hadirkan untuk Anda
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {previewImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div
                className={`relative ${
                  index === 0 ? "aspect-square md:aspect-[4/3]" : "aspect-square"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 md:group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 md:group-hover:bg-black/40 transition-colors duration-300" />
                
                {/* Caption */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-medium text-lg text-center px-4">
                    {image.alt}
                  </span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 opacity-0 md:group-hover:opacity-100 transition-opacity">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium capitalize">
                    {image.category === "food" ? "Makanan" : 
                     image.category === "interior" ? "Interior" : "Acara"}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" variant="outline">
            <Link href="/gallery">
              Lihat Semua Foto
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
