"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const next = () => {
    setAutoPlay(false);
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setAutoPlay(false);
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="section-padding overflow-hidden">
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
            Testimoni
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Apa Kata <span className="text-gradient">Pelanggan</span> Kami
          </h2>
          <p className="text-muted-foreground text-lg">
            Kepuasan pelanggan adalah kebanggaan kami
          </p>
        </motion.div>

        {/* Testimonial Cards - Desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full hover-lift">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-primary/20 mb-4" />
                  
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(Math.max(0, Math.min(5, testimonial.rating || 0)))].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{testimonial.name}</p>
                      <p className="text-muted-foreground text-xs">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Slider - Mobile */}
        <div className="md:hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="mx-4">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-primary/20 mb-4" />
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(Math.max(0, Math.min(5, TESTIMONIALS[current]?.rating || 0)))].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    &ldquo;{TESTIMONIALS[current].content}&rdquo;
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={TESTIMONIALS[current].image}
                        alt={TESTIMONIALS[current].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{TESTIMONIALS[current].name}</p>
                      <p className="text-muted-foreground text-sm">
                        {TESTIMONIALS[current].role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 mt-6">
            <Button variant="outline" size="icon" onClick={prev} aria-label="Testimoni sebelumnya" className="min-w-[44px] min-h-[44px]">
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => setAutoPlay(!autoPlay)} 
              aria-label={autoPlay ? "Jeda rotasi otomatis" : "Mulai rotasi otomatis"}
              aria-pressed={autoPlay}
              className="min-w-[44px] min-h-[44px]"
            >
              {autoPlay ? <Pause className="w-4 h-4" aria-hidden="true" /> : <Play className="w-4 h-4" aria-hidden="true" />}
            </Button>
            <div className="flex gap-1" role="tablist" aria-label="Pilih testimoni">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setAutoPlay(false);
                    setCurrent(index);
                  }}
                  role="tab"
                  aria-selected={index === current}
                  aria-label={`Testimoni ${index + 1}`}
                  className="p-2 flex items-center justify-center"
                >
                  <span className={`w-2 h-2 rounded-full transition-colors ${index === current ? "bg-primary" : "bg-primary/30"}`} />
                </button>
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={next} aria-label="Testimoni selanjutnya" className="min-w-[44px] min-h-[44px]">
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
