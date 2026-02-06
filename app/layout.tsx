import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloatingButton } from "@/components/layout/WhatsAppFloatingButton";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { RESTAURANT } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${RESTAURANT.name} | Masakan Padang Autentik`,
    template: `%s | ${RESTAURANT.shortName}`,
  },
  description: RESTAURANT.description,
  keywords: [
    "rumah makan padang",
    "masakan padang",
    "rendang",
    "gulai",
    "nasi padang",
    "restoran padang",
    "makanan minang",
    "sumatera barat",
  ],
  authors: [{ name: RESTAURANT.name }],
  creator: RESTAURANT.name,
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://rasominang.com",
    siteName: RESTAURANT.name,
    title: RESTAURANT.name,
    description: RESTAURANT.description,
    images: [
      {
        url: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=1200",
        width: 1200,
        height: 630,
        alt: RESTAURANT.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: RESTAURANT.name,
    description: RESTAURANT.description,
    images: ["https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=1200"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Skip to content link for keyboard navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          Langsung ke konten utama
        </a>
        <Header />
        <ScrollToTop />
        <main id="main-content" className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
