import { Metadata } from "next";
import { RESTAURANT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kontak & Reservasi",
  description: `Hubungi ${RESTAURANT.name} untuk reservasi meja. Alamat: ${RESTAURANT.address.full}. Telepon: ${RESTAURANT.phone}.`,
  openGraph: {
    title: `Kontak & Reservasi | ${RESTAURANT.name}`,
    description: `Reservasi meja dan hubungi kami. Lokasi di ${RESTAURANT.address.city}, ${RESTAURANT.address.province}.`,
    images: [
      {
        url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200",
        width: 1200,
        height: 630,
        alt: "Kontak Rumah Makan Padang",
      },
    ],
  },
};

export { default } from "./page";
