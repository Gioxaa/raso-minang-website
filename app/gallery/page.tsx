"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ZoomIn, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GALLERY_IMAGES } from "@/lib/constants";

const categories = [
  { id: "all", name: "Semua" },
  { id: "food", name: "Makanan" },
  { id: "interior", name: "Interior" },
  { id: "event", name: "Acara" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_IMAGES[number] | null>(null);

  const filteredImages = GALLERY_IMAGES.filter(
    (image) => activeCategory === "all" || image.category === activeCategory
  );

  const currentIndex = selectedImage
    ? filteredImages.findIndex((img) => img.id === selectedImage.id)
    : -1;

  const goToPrevious = useCallback(() => {
    if (currentIndex > 0) {
      setSelectedImage(filteredImages[currentIndex - 1]);
    }
  }, [currentIndex, filteredImages]);

  const goToNext = useCallback(() => {
    if (currentIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentIndex + 1]);
    }
  }, [currentIndex, filteredImages]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, goToPrevious, goToNext]);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Galeri <span className="text-gradient">Foto</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Lihat suasana dan hidangan lezat yang kami sajikan
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Filter Tabs */}
          <Tabs
            defaultValue="all"
            value={activeCategory}
            onValueChange={setActiveCategory}
            className="w-full"
          >
            <TabsList className="flex flex-nowrap justify-start sm:justify-center gap-2 bg-transparent h-auto mb-8 md:mb-12 overflow-x-auto no-scrollbar px-1">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-5 sm:px-6 py-3 text-sm min-h-[44px] flex-shrink-0"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={activeCategory} className="mt-0">
              <motion.div
                layout
                className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
              >
                <AnimatePresence mode="popLayout">
                  {filteredImages.map((image, index) => (
                    <motion.div
                      key={image.id}
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                      className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
                      onClick={() => setSelectedImage(image)}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Overlay - visible on mobile, hover on desktop */}
                      <div className="absolute inset-0 bg-black/30 md:bg-black/0 md:group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            <ZoomIn className="w-5 h-5 md:w-6 md:h-6 text-white" />
                          </div>
                        </div>
                      </div>
                      {/* Caption - always visible on mobile, hover on desktop */}
                      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 bg-gradient-to-t from-black/80 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                        <p className="text-white text-xs md:text-sm font-medium line-clamp-2">
                          {image.alt}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-7xl p-0 overflow-hidden bg-black/95 border-0">
          <DialogTitle className="sr-only">
            {selectedImage ? selectedImage.alt : "Galeri Foto"}
          </DialogTitle>
          {selectedImage && (
            <div className="relative">
              {/* Close button - with background for visibility */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-20 text-white hover:text-white bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full w-11 h-11"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </Button>

              {/* Previous button - hidden on mobile, use swipe instead */}
              {currentIndex > 0 && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white hover:text-white bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full w-12 h-12"
                  onClick={goToPrevious}
                >
                  <ChevronLeft className="w-8 h-8" />
                </Button>
              )}

              {/* Next button - hidden on mobile, use swipe instead */}
              {currentIndex < filteredImages.length - 1 && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white hover:text-white bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full w-12 h-12"
                  onClick={goToNext}
                >
                  <ChevronRight className="w-8 h-8" />
                </Button>
              )}

              <div className="relative flex items-center justify-center min-h-[50vh] max-h-[85vh]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={1200}
                  height={800}
                  className="object-contain max-h-[85vh] w-auto"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                <p className="text-white text-lg font-medium">
                  {selectedImage.alt}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-white/60 text-sm capitalize">
                    {selectedImage.category === "food"
                      ? "Makanan"
                      : selectedImage.category === "interior"
                      ? "Interior"
                      : "Acara"}
                  </p>
                  <p className="text-white/60 text-sm">
                    {currentIndex + 1} / {filteredImages.length}
                  </p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
