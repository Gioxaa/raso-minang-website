"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { generateWhatsAppLink, RESTAURANT } from "@/lib/constants";

export function WhatsAppFloatingButton() {
  const defaultMessage = `Halo ${RESTAURANT.shortName}! Saya ingin bertanya tentang menu dan reservasi.`;
  const whatsappLink = generateWhatsAppLink(defaultMessage);

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 sm:gap-3 bg-green-500 hover:bg-green-600 text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all group"
      aria-label="Chat via WhatsApp"
    >
      <motion.div
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.div>
      <span className="hidden sm:inline font-medium text-sm">
        Chat WhatsApp
      </span>
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
    </motion.a>
  );
}
