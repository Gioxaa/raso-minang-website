"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Search, Flame, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MENU_ITEMS, MENU_CATEGORIES, formatPrice } from "@/lib/constants";

export default function MenuPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

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
              Menu <span className="text-gradient">Kami</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Jelajahi berbagai hidangan autentik Padang dengan cita rasa yang
              tak terlupakan
            </p>

            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Cari menu favorit Anda..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-3 text-base rounded-full h-12"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Category Tabs */}
          <Tabs
            defaultValue="all"
            value={activeCategory}
            onValueChange={setActiveCategory}
            className="w-full"
          >
            {/* Scrollable tabs wrapper - extends to edges on mobile */}
            <div className="relative -mx-4 px-4 md:mx-0 md:px-0">
              {/* Scroll indicator - fade effect on right edge */}
              <div className="absolute right-0 top-0 bottom-2 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none z-10 md:hidden" aria-hidden="true" />
              <TabsList className="flex justify-start gap-2 bg-transparent h-auto mb-8 md:mb-12 overflow-x-auto no-scrollbar whitespace-nowrap pb-2 scroll-smooth">
                <TabsTrigger
                  value="all"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-4 md:px-6 py-2.5 shrink-0 min-h-[44px]"
                >
                  Semua Menu
                </TabsTrigger>
                {MENU_CATEGORIES.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-4 md:px-6 py-2.5 shrink-0 min-h-[44px]"
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <div className="mt-0">
              {filteredItems.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16"
                >
                  <p className="text-muted-foreground text-lg">
                    Tidak ada menu yang ditemukan
                  </p>
                </motion.div>
              ) : (
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
                  {filteredItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                    >
                      <Card className="group overflow-hidden hover-lift h-full">
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          {/* Badges */}
                          <div className="absolute top-3 left-3 flex gap-2">
                            {"isSignature" in item && item.isSignature && (
                              <Badge className="bg-primary text-primary-foreground">
                                <Star className="w-3 h-3 mr-1" />
                                Signature
                              </Badge>
                            )}
                            {"isSpicy" in item && item.isSpicy && (
                              <Badge variant="destructive">
                                <Flame className="w-3 h-3 mr-1" />
                                Pedas
                              </Badge>
                            )}
                          </div>
                          {/* Price */}
                          <div className="absolute bottom-3 right-3 bg-card/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg">
                            <span className="font-bold text-primary text-sm">
                              {formatPrice(item.price)}
                            </span>
                          </div>
                        </div>
                          <CardContent className="p-3 sm:p-5">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <h3 className="font-bold text-sm sm:text-lg group-hover:text-primary transition-colors">
                              {item.name}
                            </h3>
                          </div>
                          <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2">
                            {item.description}
                          </p>
                          <div className="mt-3">
                            <Badge variant="outline" className="text-xs">
                              {MENU_CATEGORIES.find(
                                (c) => c.id === item.category
                              )?.icon}{" "}
                              {MENU_CATEGORIES.find(
                                (c) => c.id === item.category
                              )?.name}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
