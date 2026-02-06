"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RESTAURANT } from "@/lib/constants";

export function LocationMap() {
  const googleMapsUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6899!2d${RESTAURANT.coordinates.lng}!3d${RESTAURANT.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwNTYnNDkuNiJTIDEwMMKwMjUnMDIuMCJF!5e0!3m2!1sen!2sid!4v1699999999999!5m2!1sen!2sid`;
  
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${RESTAURANT.coordinates.lat},${RESTAURANT.coordinates.lng}`;

  return (
    <section id="location" className="section-padding bg-secondary/30">
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
            Lokasi
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Temukan <span className="text-gradient">Kami</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Kunjungi kami dan nikmati pengalaman kuliner yang tak terlupakan
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative aspect-[16/9] lg:aspect-[16/10] rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src={googleMapsUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Rumah Makan Padang Raso Minang"
                className="absolute inset-0"
              />
            </div>
            {/* Directions Button */}
            <div className="mt-4 flex justify-center lg:justify-start">
              <Button asChild size="lg" className="glow-orange">
                <a href={directionsUrl} target="_blank" rel="noopener noreferrer">
                  <Navigation className="w-5 h-5 mr-2" />
                  Petunjuk Arah
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Address Card */}
            <Card className="hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Alamat</h3>
                    <p className="text-muted-foreground text-sm">
                      {RESTAURANT.address.street}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {RESTAURANT.address.city}, {RESTAURANT.address.province}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {RESTAURANT.address.postalCode}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phone Card */}
            <Card className="hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Telepon</h3>
                    <a
                      href={`tel:${RESTAURANT.phone}`}
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      {RESTAURANT.phone}
                    </a>
                    <p className="text-muted-foreground text-xs mt-1">
                      Hubungi untuk reservasi
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hours Card */}
            <Card className="hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">Jam Buka</h3>
                    <div className="space-y-1">
                      {RESTAURANT.hours.map((schedule, index) => (
                        <div
                          key={index}
                          className="flex justify-between text-sm"
                        >
                          <span className="text-muted-foreground">
                            {schedule.day}
                          </span>
                          <span className="font-medium">{schedule.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reservation CTA */}
            <Button asChild size="lg" variant="outline" className="w-full">
              <Link href="/contact">Reservasi Sekarang</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
