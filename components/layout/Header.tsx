"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { NAV_LINKS, RESTAURANT } from "@/lib/constants";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  
  // Only use transparent header style on homepage
  const isHomepage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    // Check immediately on mount to prevent flash
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Use scrolled (glass) style if: actually scrolled OR not on homepage
  const useScrolledStyle = isScrolled || !isHomepage;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Background Layer 1: Dark gradient (visible when NOT scrolled) */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent pointer-events-none"
        style={{ 
          opacity: useScrolledStyle ? 0 : 1,
          transition: 'opacity 500ms cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      />
      
      {/* Background Layer 2: Glass effect (visible when scrolled) */}
      <div 
        className="absolute inset-0 glass pointer-events-none"
        style={{ 
          opacity: useScrolledStyle ? 1 : 0,
          transition: 'opacity 500ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 500ms cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: useScrolledStyle ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none'
        }}
      />
      
      {/* Border bottom (fades in when scrolled) */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-px bg-border/50 pointer-events-none"
        style={{ 
          opacity: useScrolledStyle ? 1 : 0,
          transition: 'opacity 500ms cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3"
            >
              <div 
                className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-primary flex items-center justify-center"
                style={{ 
                  boxShadow: useScrolledStyle ? '0 2px 8px rgba(0,0,0,0.15)' : '0 4px 20px rgba(0,0,0,0.3)',
                  transition: 'box-shadow 500ms cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <span className="text-xl md:text-2xl">🍛</span>
              </div>
              <div className="hidden sm:block">
                <h1 
                  className="text-lg md:text-xl font-bold"
                  style={{ 
                    color: useScrolledStyle ? 'var(--foreground)' : 'white',
                    transition: 'color 500ms cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  {RESTAURANT.shortName}
                </h1>
                <p 
                  className="text-xs"
                  style={{ 
                    color: useScrolledStyle ? 'var(--muted-foreground)' : 'rgba(255,255,255,0.7)',
                    transition: 'color 500ms cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  Sejak {RESTAURANT.established}
                </p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium rounded-lg hover:scale-[1.02] active:scale-[0.98]"
                  style={{ 
                    color: isActive 
                      ? (useScrolledStyle ? 'var(--primary)' : 'white')
                      : (useScrolledStyle ? 'var(--foreground)' : 'rgba(255,255,255,0.9)'),
                    backgroundColor: isActive 
                      ? (useScrolledStyle ? 'hsl(var(--primary) / 0.1)' : 'rgba(255,255,255,0.15)')
                      : 'transparent',
                    transition: 'color 500ms cubic-bezier(0.4, 0, 0.2, 1), background-color 300ms cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a 
              href={`tel:${RESTAURANT.phone}`}
              className="inline-flex items-center justify-center h-9 px-4 text-sm font-medium rounded-md border hover:scale-[1.02] active:scale-[0.98]"
              style={{
                borderColor: useScrolledStyle ? 'hsl(var(--primary) / 0.5)' : 'rgba(255,255,255,0.5)',
                color: useScrolledStyle ? 'var(--foreground)' : 'white',
                backgroundColor: useScrolledStyle ? 'transparent' : 'rgba(255,255,255,0.05)',
                transition: 'all 500ms cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <Phone className="w-4 h-4 mr-2" />
              Hubungi Kami
            </a>
            <Button asChild size="sm" className="glow-orange">
              <Link href="/contact">Reservasi</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <button 
                className="inline-flex items-center justify-center w-10 h-10 rounded-md"
                aria-label="Buka menu navigasi"
                style={{
                  color: useScrolledStyle ? 'var(--foreground)' : 'white',
                  transition: 'color 500ms cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <Menu className="w-6 h-6" aria-hidden="true" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <SheetTitle className="sr-only">Menu Navigasi</SheetTitle>
              <div className="flex flex-col h-full py-6">
                {/* Mobile Logo */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-2xl">🍛</span>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">{RESTAURANT.shortName}</h2>
                    <p className="text-xs text-muted-foreground">
                      {RESTAURANT.slogan}
                    </p>
                  </div>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex flex-col gap-2 flex-1">
                  {NAV_LINKS.map((link, index) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center px-4 py-4 text-lg font-medium rounded-lg transition-colors ${
                            isActive
                              ? "text-primary bg-primary/10"
                              : "hover:bg-primary/10 hover:text-primary"
                          }`}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* Mobile CTAs */}
                <div className="flex flex-col gap-3 pt-6 border-t">
                  <Button asChild variant="outline" className="w-full">
                    <a href={`tel:${RESTAURANT.phone}`}>
                      <Phone className="w-4 h-4 mr-2" />
                      {RESTAURANT.phone}
                    </a>
                  </Button>
                  <Button asChild className="w-full glow-orange">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Reservasi Sekarang
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
