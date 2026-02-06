// Menu Item Type
export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isSignature?: boolean;
  isSpicy?: boolean;
}

// Gallery Image Type
export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: "food" | "interior" | "event";
}

// Testimonial Type
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

// Navigation Link Type
export interface NavLink {
  href: string;
  label: string;
}

// Menu Category Type
export interface MenuCategory {
  id: string;
  name: string;
  icon: string;
}

// Operating Hours Type
export interface OperatingHours {
  day: string;
  time: string;
}

// Address Type
export interface Address {
  street: string;
  city: string;
  province: string;
  postalCode: string;
  full: string;
}

// Coordinates Type
export interface Coordinates {
  lat: number;
  lng: number;
}

// Social Links Type
export interface SocialLinks {
  instagram: string;
  facebook: string;
  tiktok: string;
}

// Restaurant Info Type
export interface RestaurantInfo {
  name: string;
  shortName: string;
  slogan: string;
  description: string;
  established: number;
  phone: string;
  whatsapp: string;
  email: string;
  address: Address;
  coordinates: Coordinates;
  hours: OperatingHours[];
  social: SocialLinks;
}

// Reservation Form Data
export interface ReservationFormData {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  notes?: string;
}

// Contact Form Data
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
