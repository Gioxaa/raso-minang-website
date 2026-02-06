"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Users, ChefHat, Heart } from "lucide-react";
import { RESTAURANT } from "@/lib/constants";

const features = [
  {
    icon: ChefHat,
    title: "Resep Turun Temurun",
    description: "Diwariskan dari generasi ke generasi dengan cita rasa autentik",
  },
  {
    icon: Award,
    title: "Bahan Berkualitas",
    description: "Menggunakan rempah-rempah pilihan langsung dari Ranah Minang",
  },
  {
    icon: Users,
    title: "Pelayanan Ramah",
    description: "Tim kami siap melayani dengan sepenuh hati",
  },
  {
    icon: Heart,
    title: "Dimasak dengan Cinta",
    description: "Setiap hidangan dibuat dengan penuh kasih sayang",
  },
];

export function About() {
  const [yearsOfExperience, setYearsOfExperience] = useState<number | null>(null);

  // Calculate years on client only to avoid hydration mismatch
  useEffect(() => {
    setYearsOfExperience(new Date().getFullYear() - RESTAURANT.established);
  }, []);

  return (
    <section id="about" className="section-padding bg-secondary/30 overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=800"
                alt="Masakan Padang"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 bg-primary text-primary-foreground p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl max-w-[140px] sm:max-w-[200px]"
            >
              <p className="text-2xl sm:text-4xl font-bold">{yearsOfExperience !== null ? `${yearsOfExperience}+` : "—"}</p>
              <p className="text-xs sm:text-sm opacity-90">Tahun Pengalaman</p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Tentang Kami
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6">
              Kelezatan Autentik dari{" "}
              <span className="text-gradient">Ranah Minang</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              {RESTAURANT.description}
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Didirikan pada tahun {RESTAURANT.established}, kami berkomitmen untuk menyajikan 
              masakan Padang dengan kualitas terbaik. Dari rendang yang empuk hingga 
              sambal lado hijau yang menyegarkan, setiap hidangan adalah cerminan 
              kekayaan kuliner Minangkabau.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-background/50 hover:bg-background transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{feature.title}</h3>
                    <p className="text-muted-foreground text-xs mt-1">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
