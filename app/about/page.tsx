"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Users, ChefHat, Heart, Target, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { RESTAURANT } from "@/lib/constants";

const values = [
  {
    icon: Heart,
    title: "Cinta & Dedikasi",
    description:
      "Setiap hidangan dimasak dengan penuh cinta dan dedikasi tinggi untuk memberikan yang terbaik.",
  },
  {
    icon: Award,
    title: "Kualitas Premium",
    description:
      "Kami hanya menggunakan bahan-bahan berkualitas terbaik langsung dari Ranah Minang.",
  },
  {
    icon: Users,
    title: "Keluarga",
    description:
      "Kami memperlakukan setiap pelanggan seperti keluarga sendiri dengan pelayanan yang hangat.",
  },
  {
    icon: ChefHat,
    title: "Tradisi Kuliner",
    description:
      "Melestarikan resep turun-temurun dengan sentuhan inovasi tanpa kehilangan keasliannya.",
  },
];

const timeline = [
  {
    year: "1985",
    title: "Awal Mula",
    description:
      "Didirikan oleh Bundo Ratna dengan modal kecil dan semangat besar di jantung kota Padang.",
  },
  {
    year: "1995",
    title: "Ekspansi Pertama",
    description:
      "Membuka cabang kedua karena permintaan pelanggan yang terus meningkat.",
  },
  {
    year: "2005",
    title: "Renovasi Besar",
    description:
      "Merenovasi restoran dengan konsep modern namun tetap mempertahankan nuansa tradisional.",
  },
  {
    year: "2015",
    title: "Generasi Baru",
    description:
      "Generasi kedua keluarga mulai mengambil alih dengan inovasi baru.",
  },
  {
    year: "2024",
    title: "Era Digital",
    description:
      "Hadir dengan layanan online dan tetap berkomitmen pada kualitas dan tradisi.",
  },
];

const team = [
  {
    name: "Bundo Ratna",
    role: "Pendiri & Kepala Dapur",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400",
    description: "40+ tahun pengalaman memasak autentik Minang",
  },
  {
    name: "Uda Rahman",
    role: "Manager Operasional",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    description: "Menjaga standar kualitas dan pelayanan prima",
  },
  {
    name: "Uni Sari",
    role: "Head Chef",
    image: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=400",
    description: "Spesialis rendang dan gulai tradisional",
  },
  {
    name: "Aldi Pratama",
    role: "Sous Chef",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    description: "Inovator menu dengan sentuhan modern",
  },
];

export default function AboutPage() {
  const [yearsOfExperience, setYearsOfExperience] = useState<number | null>(null);

  // Calculate years on client only to avoid hydration mismatch
  useEffect(() => {
    setYearsOfExperience(new Date().getFullYear() - RESTAURANT.established);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Tentang Kami
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mt-2 mb-6">
                Kisah <span className="text-gradient">Raso Minang</span>
              </h1>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                {RESTAURANT.description}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Berawal dari warung sederhana di tahun {RESTAURANT.established},
                kini kami telah melayani ribuan pelanggan setia dengan cita rasa
                autentik yang tak berubah. Kami percaya bahwa makanan terbaik
                adalah makanan yang dimasak dengan cinta.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8">
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-primary">
                    {yearsOfExperience !== null ? `${yearsOfExperience}+` : "—"}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Tahun Pengalaman
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-primary">
                    50K+
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Pelanggan Puas
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-primary">
                    25+
                  </p>
                  <p className="text-muted-foreground text-sm">Menu Autentik</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800"
                  alt="Suasana Restoran"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 left-0 md:-left-6 bg-primary text-primary-foreground p-4 md:p-6 rounded-2xl shadow-xl">
                <p className="text-sm">Sejak</p>
                <p className="text-4xl font-bold">{RESTAURANT.established}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full hover-lift">
                <CardContent className="p-6 md:p-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Eye className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Visi Kami</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Menjadi rumah makan Padang terdepan yang melestarikan cita
                    rasa autentik Minangkabau, sekaligus menghadirkan pengalaman
                    kuliner berkelas bagi setiap pelanggan di Indonesia.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <Card className="h-full hover-lift">
                <CardContent className="p-6 md:p-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Target className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Misi Kami</h3>
                  <ul className="text-muted-foreground space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Menyajikan masakan Padang dengan resep turun-temurun
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Menggunakan bahan-bahan berkualitas premium
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Memberikan pelayanan ramah seperti keluarga
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Menjaga kebersihan dan standar kualitas tinggi
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Nilai-Nilai Kami
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
              Apa yang Kami <span className="text-gradient">Junjung</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full text-center hover-lift">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Perjalanan Kami
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
              Sejarah <span className="text-gradient">Raso Minang</span>
            </h2>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`relative flex items-center gap-4 md:gap-8 mb-8 ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse md:text-right"
                }`}
              >
                {/* Year Badge */}
                <div className="absolute left-8 md:left-1/2 w-14 h-14 md:w-16 md:h-16 -translate-x-1/2 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xs md:text-sm z-10">
                  {item.year}
                </div>

                {/* Content */}
                <div
                  className={`ml-20 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                  }`}
                >
                  <Card className="hover-lift">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Tim Kami
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
              Orang-Orang <span className="text-gradient">Hebat</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Di balik hidangan lezat, ada tim yang berdedikasi tinggi
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="overflow-hidden hover-lift group">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-5 text-center">
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-primary text-sm font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
