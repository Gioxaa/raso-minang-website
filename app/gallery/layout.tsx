import { Metadata } from "next";
import { RESTAURANT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Galeri",
  description: `Lihat galeri foto ${RESTAURANT.name}. Suasana restoran, hidangan lezat, dan momen-momen istimewa pelanggan kami.`,
  openGraph: {
    title: `Galeri | ${RESTAURANT.name}`,
    description: `Lihat galeri foto suasana restoran dan hidangan lezat masakan Padang autentik.`,
    images: [
      {
        url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200",
        width: 1200,
        height: 630,
        alt: "Galeri Rumah Makan Padang",
      },
    ],
  },
};

export { default } from "./page";
