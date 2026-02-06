import { Metadata } from "next";
import { RESTAURANT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: `Kenali sejarah ${RESTAURANT.name} sejak ${RESTAURANT.established}. Visi, misi, dan tim kami yang berdedikasi untuk menyajikan masakan Padang terbaik.`,
  openGraph: {
    title: `Tentang Kami | ${RESTAURANT.name}`,
    description: `Kenali sejarah dan tim di balik masakan Padang autentik sejak ${RESTAURANT.established}.`,
    images: [
      {
        url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200",
        width: 1200,
        height: 630,
        alt: "Tentang Rumah Makan Padang",
      },
    ],
  },
};

export { default } from "./page";
