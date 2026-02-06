"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { FEATURED_DISHES, formatPrice } from "@/lib/constants";

export function FeaturedMenu() {
  return (
    <section id="menu" className="section-padding">
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
            Menu Andalan
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Hidangan <span className="text-gradient">Signature</span> Kami
          </h2>
          <p className="text-muted-foreground text-lg">
            Pilihan terbaik dari dapur kami yang menjadi favorit pelanggan
          </p>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {FEATURED_DISHES.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="group overflow-hidden hover-lift border-0 shadow-md h-full">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    {'isSignature' in dish && dish.isSignature && (
                      <Badge className="bg-primary text-primary-foreground">
                        Signature
                      </Badge>
                    )}
                    {'isSpicy' in dish && dish.isSpicy && (
                      <Badge variant="destructive" className="flex items-center gap-1">
                        <Flame className="w-3 h-3" />
                        Pedas
                      </Badge>
                    )}
                  </div>

                  {/* Price Tag */}
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="font-bold text-primary text-sm">
                      {formatPrice(dish.price)}
                    </span>
                  </div>
                </div>
                <CardContent className="p-3 sm:p-4">
                  <h3 className="font-bold text-sm sm:text-lg mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                    {dish.name}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {dish.description}
                  </p>
                </CardContent>
              </Card>
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
          <Button asChild size="lg" className="glow-orange">
            <Link href="/menu">
              Lihat Semua Menu
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
