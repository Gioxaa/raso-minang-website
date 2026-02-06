import { Metadata } from "next";
import { RESTAURANT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Menu",
  description: `Jelajahi menu lengkap ${RESTAURANT.name}. Rendang, gulai, ayam pop, dan berbagai hidangan Padang autentik lainnya.`,
  openGraph: {
    title: `Menu | ${RESTAURANT.name}`,
    description: `Jelajahi menu lengkap masakan Padang autentik. Rendang, gulai, ayam pop, dan hidangan khas Minang lainnya.`,
    images: [
      {
        url: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=1200",
        width: 1200,
        height: 630,
        alt: "Menu Masakan Padang",
      },
    ],
  },
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
