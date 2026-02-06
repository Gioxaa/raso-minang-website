// Restaurant Information
export const RESTAURANT = {
  name: "Rumah Makan Padang Raso Minang",
  shortName: "Raso Minang",
  slogan: "Cita Rasa Otentik Ranah Minang Sejak 1985",
  description: "Nikmati kelezatan masakan Padang autentik dengan resep turun-temurun dari Ranah Minang. Setiap hidangan dibuat dengan cinta dan bumbu pilihan untuk menghadirkan cita rasa yang tak terlupakan.",
  established: 1985,
  phone: "+6281234567890",
  whatsapp: "6281234567890",
  email: "info@rasominang.com",
  address: {
    street: "Jl. Sudirman No. 123",
    city: "Padang",
    province: "Sumatera Barat",
    postalCode: "25121",
    full: "Jl. Sudirman No. 123, Padang, Sumatera Barat 25121",
  },
  coordinates: {
    lat: -0.9471,
    lng: 100.4172,
  },
  hours: [
    { day: "Senin - Kamis", time: "10:00 - 22:00" },
    { day: "Jumat", time: "07:00 - 22:00" },
    { day: "Sabtu - Minggu", time: "08:00 - 23:00" },
  ],
  social: {
    instagram: "https://instagram.com/rasominang",
    facebook: "https://facebook.com/rasominang",
    tiktok: "https://tiktok.com/@rasominang",
  },
} as const;

// Navigation Links
export const NAV_LINKS = [
  { href: "/", label: "Beranda" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Galeri" },
  { href: "/about", label: "Tentang Kami" },
  { href: "/contact", label: "Kontak" },
] as const;

// Menu Categories
export const MENU_CATEGORIES = [
  { id: "rendang", name: "Rendang", icon: "🍖" },
  { id: "gulai", name: "Gulai", icon: "🍲" },
  { id: "goreng", name: "Gorengan", icon: "🍗" },
  { id: "sambal", name: "Sambal", icon: "🌶️" },
  { id: "sayur", name: "Sayuran", icon: "🥬" },
  { id: "minuman", name: "Minuman", icon: "🥤" },
] as const;

// Menu Items
export const MENU_ITEMS = [
  // Rendang
  {
    id: 1,
    name: "Rendang Daging Sapi",
    description: "Daging sapi pilihan dimasak dengan santan dan rempah khas Minang hingga kering dan bumbu meresap sempurna",
    price: 45000,
    category: "rendang",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
    isSignature: true,
    isSpicy: true,
  },
  {
    id: 2,
    name: "Rendang Ayam",
    description: "Ayam kampung dimasak dengan bumbu rendang tradisional, empuk dan berbumbu kaya",
    price: 35000,
    category: "rendang",
    image: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=800",
    isSpicy: true,
  },
  {
    id: 3,
    name: "Rendang Telur",
    description: "Telur ayam kampung dimasak dengan bumbu rendang, cocok untuk pelengkap nasi",
    price: 25000,
    category: "rendang",
    image: "https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?w=800",
    isSpicy: true,
  },
  // Gulai
  {
    id: 4,
    name: "Gulai Otak",
    description: "Otak sapi yang lembut dimasak dengan kuah santan kuning yang gurih dan kaya rempah",
    price: 40000,
    category: "gulai",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800",
    isSignature: true,
  },
  {
    id: 5,
    name: "Gulai Nangka",
    description: "Nangka muda dimasak dengan santan dan bumbu gulai khas Padang",
    price: 20000,
    category: "gulai",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800",
  },
  {
    id: 6,
    name: "Gulai Tunjang",
    description: "Kikil sapi yang empuk dalam kuah santan yang gurih",
    price: 35000,
    category: "gulai",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
  },
  {
    id: 7,
    name: "Gulai Ikan Kakap",
    description: "Ikan kakap segar dimasak dengan bumbu gulai dan daun kunyit",
    price: 50000,
    category: "gulai",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800",
  },
  // Gorengan
  {
    id: 8,
    name: "Ayam Pop",
    description: "Ayam yang direbus dengan bumbu lalu digoreng hingga kulitnya renyah, disajikan dengan sambal lado",
    price: 35000,
    category: "goreng",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800",
    isSignature: true,
  },
  {
    id: 9,
    name: "Ayam Goreng Balado",
    description: "Ayam goreng renyah disiram sambal balado merah yang pedas dan segar",
    price: 35000,
    category: "goreng",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=800",
    isSpicy: true,
  },
  {
    id: 10,
    name: "Dendeng Balado",
    description: "Irisan tipis daging sapi yang digoreng kering lalu dibalado dengan cabai merah",
    price: 45000,
    category: "goreng",
    image: "https://images.unsplash.com/photo-1432139509613-5c4255815697?w=800",
    isSpicy: true,
    isSignature: true,
  },
  {
    id: 11,
    name: "Ikan Goreng",
    description: "Ikan segar digoreng hingga renyah, disajikan dengan sambal hijau",
    price: 40000,
    category: "goreng",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800",
  },
  // Sambal
  {
    id: 12,
    name: "Sambal Lado Hijau",
    description: "Sambal khas Padang dari cabai hijau yang diulek dengan bawang dan jeruk nipis",
    price: 10000,
    category: "sambal",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800",
    isSpicy: true,
  },
  {
    id: 13,
    name: "Sambal Balado Merah",
    description: "Sambal dari cabai merah dengan tomat dan bawang yang ditumis",
    price: 10000,
    category: "sambal",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800",
    isSpicy: true,
  },
  {
    id: 14,
    name: "Sambal Lado Mudo",
    description: "Sambal hijau segar yang tidak dimasak, pedas dan menyegarkan",
    price: 8000,
    category: "sambal",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800",
    isSpicy: true,
  },
  // Sayuran
  {
    id: 15,
    name: "Daun Singkong Rebus",
    description: "Daun singkong yang direbus lembut, disajikan dengan sambal",
    price: 12000,
    category: "sayur",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800",
  },
  {
    id: 16,
    name: "Gulai Pakis",
    description: "Sayur pakis dimasak dengan santan dan bumbu gulai",
    price: 18000,
    category: "sayur",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
  },
  {
    id: 17,
    name: "Sayur Nangka",
    description: "Nangka muda dimasak dengan kuah santan yang gurih",
    price: 15000,
    category: "sayur",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800",
  },
  // Minuman
  {
    id: 18,
    name: "Es Teh Manis",
    description: "Teh manis segar dengan es batu",
    price: 8000,
    category: "minuman",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800",
  },
  {
    id: 19,
    name: "Es Jeruk",
    description: "Jeruk peras segar dengan es batu",
    price: 12000,
    category: "minuman",
    image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=800",
  },
  {
    id: 20,
    name: "Kopi Tubruk",
    description: "Kopi hitam khas dengan gula aren",
    price: 10000,
    category: "minuman",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800",
  },
  {
    id: 21,
    name: "Teh Talua",
    description: "Minuman khas Minang dari teh dengan telur dan rempah",
    price: 18000,
    category: "minuman",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800",
    isSignature: true,
  },
] as const;

// Featured/Signature Dishes (for homepage)
export const FEATURED_DISHES = MENU_ITEMS.filter((item) => 'isSignature' in item && item.isSignature);

// Gallery Images
export const GALLERY_IMAGES = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=1200",
    alt: "Rendang Daging Sapi",
    category: "food",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200",
    alt: "Suasana Restoran",
    category: "interior",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=1200",
    alt: "Nasi Padang Lengkap",
    category: "food",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200",
    alt: "Interior Restoran",
    category: "interior",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=1200",
    alt: "Ayam Pop",
    category: "food",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200",
    alt: "Area Makan Outdoor",
    category: "interior",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200",
    alt: "Aneka Lauk Pauk",
    category: "food",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200",
    alt: "Meja Makan Elegan",
    category: "interior",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1200",
    alt: "Gulai Otak",
    category: "food",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1200",
    alt: "Acara Keluarga",
    category: "event",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1432139509613-5c4255815697?w=1200",
    alt: "Dendeng Balado",
    category: "food",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200",
    alt: "Wedding Reception",
    category: "event",
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "Food Blogger",
    content: "Rendang terenak yang pernah saya coba! Bumbunya meresap sempurna dan dagingnya empuk. Sudah langganan sejak 5 tahun lalu.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
  },
  {
    id: 2,
    name: "Siti Rahayu",
    role: "Ibu Rumah Tangga",
    content: "Keluarga selalu request makan di sini setiap weekend. Rasa masakannya seperti masakan nenek di kampung.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
  },
  {
    id: 3,
    name: "Ahmad Fadli",
    role: "Pengusaha",
    content: "Tempat favorit untuk meeting dengan klien. Makanan enak, tempatnya nyaman, dan pelayanannya ramah.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200",
  },
  {
    id: 4,
    name: "Dewi Lestari",
    role: "Dokter",
    content: "Ayam Pop-nya luar biasa! Sambal lado hijau-nya juga pedas pas. Recommended banget!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
  },
] as const;

// Helper function to format price
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

// Helper function to generate WhatsApp link
export const generateWhatsAppLink = (message: string): string => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${RESTAURANT.whatsapp}?text=${encodedMessage}`;
};

// Default reservation message template
export const getReservationMessage = (data: {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  notes?: string;
}): string => {
  return `Halo, saya ingin melakukan reservasi:

Nama: ${data.name}
No. HP: ${data.phone}
Tanggal: ${data.date}
Waktu: ${data.time}
Jumlah Tamu: ${data.guests} orang
${data.notes ? `Catatan: ${data.notes}` : ""}

Terima kasih.`;
};
