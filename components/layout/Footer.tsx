import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { NAV_LINKS, RESTAURANT } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background overflow-hidden">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-2xl">🍛</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">{RESTAURANT.shortName}</h3>
                <p className="text-sm text-background/80">
                  Sejak {RESTAURANT.established}
                </p>
              </div>
            </div>
            <p className="text-background/80 text-sm leading-relaxed mb-6">
              {RESTAURANT.description}
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={RESTAURANT.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Raso Minang"
                className="w-11 h-11 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href={RESTAURANT.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Raso Minang"
                className="w-11 h-11 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href={RESTAURANT.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok Raso Minang"
                className="w-11 h-11 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Menu Navigasi</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-2 text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-background/70 text-sm break-words">
                  {RESTAURANT.address.full}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href={`tel:${RESTAURANT.phone}`}
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  {RESTAURANT.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href={`mailto:${RESTAURANT.email}`}
                  className="text-background/70 hover:text-primary transition-colors text-sm break-all"
                >
                  {RESTAURANT.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Jam Operasional</h4>
            <ul className="space-y-3">
              {RESTAURANT.hours.map((schedule, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="text-background/90 font-medium">
                      {schedule.day}
                    </p>
                    <p className="text-background/80">{schedule.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <Separator className="bg-background/10" />
      <div className="container-custom py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/80 text-center md:text-left">
          <p>
            &copy; {currentYear} {RESTAURANT.name}. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
