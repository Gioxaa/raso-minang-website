"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESTAURANT } from "@/lib/constants";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  
  // Disable animations if user prefers reduced motion
  const animationProps = prefersReducedMotion 
    ? { initial: {}, animate: {}, transition: {} }
    : { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } };

  return (
    <section className="relative min-h-svh flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920"
          alt="Restaurant Ambiance"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        {/* Orange accent gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/30 via-transparent to-orange-600/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white pt-32 pb-28">
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={prefersReducedMotion ? {} : { duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.8 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
            transition={prefersReducedMotion ? {} : { delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
          >
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" aria-hidden="true" />
            <span className="text-sm font-medium">Sejak {RESTAURANT.established}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? {} : { delay: 0.3, duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold mb-6 leading-tight text-balance"
          >
            <span className="block">{RESTAURANT.name.split(" ").slice(0, 3).join(" ")}</span>
            <span className="text-gradient">{RESTAURANT.name.split(" ").slice(3).join(" ")}</span>
          </motion.h1>

          {/* Slogan */}
          <motion.p
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? {} : { delay: 0.4, duration: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto"
          >
            {RESTAURANT.slogan}
          </motion.p>

          {/* Info Pills */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? {} : { delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-10"
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <MapPin className="w-4 h-4 text-primary" aria-hidden="true" />
              <span className="text-sm">{RESTAURANT.address.city}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Clock className="w-4 h-4 text-primary" aria-hidden="true" />
              <span className="text-sm">Buka Setiap Hari</span>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? {} : { delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="text-base px-6 py-3 glow-orange"
            >
              <Link href="/menu">
                Lihat Menu
                <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="text-base px-6 py-3 bg-white/10 border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60 backdrop-blur-sm"
            >
              <Link href="/contact">Reservasi Meja</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        {!prefersReducedMotion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            aria-hidden="true"
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center pt-2">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-2 bg-white/60 rounded-full"
              />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
