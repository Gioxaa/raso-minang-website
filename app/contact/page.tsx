"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Users,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  RESTAURANT,
  generateWhatsAppLink,
  getReservationMessage,
} from "@/lib/constants";

interface ReservationForm {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  notes: string;
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [minDate, setMinDate] = useState("");
  const [mapInteractive, setMapInteractive] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ReservationForm>();

  // Calculate min date on client only to avoid hydration mismatch
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setMinDate(tomorrow.toISOString().split("T")[0]);
  }, []);

  const onSubmit = (data: ReservationForm) => {
    setIsSubmitting(true);

    const message = getReservationMessage({
      name: data.name,
      phone: data.phone,
      date: data.date,
      time: data.time,
      guests: data.guests,
      notes: data.notes,
    });

    const whatsappUrl = generateWhatsAppLink(message);
    window.open(whatsappUrl, "_blank");

    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Delay reset to show success message
    setTimeout(() => {
      reset();
      setIsSuccess(false);
    }, 3000);
  };

  const googleMapsUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6899!2d${RESTAURANT.coordinates.lng}!3d${RESTAURANT.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwNTYnNDkuNiJTIDEwMMKwMjUnMDIuMCJF!5e0!3m2!1sen!2sid!4v1699999999999!5m2!1sen!2sid`;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hubungi <span className="text-gradient">Kami</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Reservasi meja atau sampaikan pertanyaan Anda. Kami siap membantu!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Reservation Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    Reservasi Meja
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Isi formulir di bawah dan kirim via WhatsApp
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Success Message */}
                    {isSuccess && (
                      <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg" role="alert">
                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                        <p className="text-green-800 dark:text-green-200 text-sm">
                          Reservasi berhasil dikirim! Silakan cek WhatsApp Anda.
                        </p>
                      </div>
                    )}

                    {/* Name */}
                    <div>
                      <label htmlFor="reservation-name" className="block text-sm font-medium mb-2">
                        Nama Lengkap *
                      </label>
                      <Input
                        id="reservation-name"
                        aria-describedby={errors.name ? "name-error" : undefined}
                        aria-invalid={errors.name ? "true" : "false"}
                        {...register("name", {
                          required: "Nama wajib diisi",
                        })}
                        placeholder="Masukkan nama Anda"
                        className="py-3"
                      />
                      {errors.name && (
                        <p id="name-error" role="alert" className="text-destructive text-sm mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="reservation-phone" className="block text-sm font-medium mb-2">
                        Nomor WhatsApp *
                      </label>
                      <Input
                        id="reservation-phone"
                        type="tel"
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                        aria-invalid={errors.phone ? "true" : "false"}
                        {...register("phone", {
                          required: "Nomor WhatsApp wajib diisi",
                          pattern: {
                            value: /^(\+62|62|0)8[1-9][0-9]{6,10}$/,
                            message: "Format nomor Indonesia tidak valid (contoh: 08123456789)",
                          },
                        })}
                        placeholder="08123456789"
                        className="py-3"
                      />
                      {errors.phone && (
                        <p id="phone-error" role="alert" className="text-destructive text-sm mt-1">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    {/* Date & Time */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label htmlFor="reservation-date" className="block text-sm font-medium mb-2">
                          Tanggal *
                        </label>
                        <Input
                          id="reservation-date"
                          type="date"
                          min={minDate}
                          aria-describedby={errors.date ? "date-error" : undefined}
                          aria-invalid={errors.date ? "true" : "false"}
                          {...register("date", {
                            required: "Tanggal wajib diisi",
                          })}
                          className="py-3"
                        />
                        {errors.date && (
                          <p id="date-error" role="alert" className="text-destructive text-sm mt-1">
                            {errors.date.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="reservation-time" className="block text-sm font-medium mb-2">
                          Waktu *
                        </label>
                        <Input
                          id="reservation-time"
                          type="time"
                          aria-describedby={errors.time ? "time-error" : undefined}
                          aria-invalid={errors.time ? "true" : "false"}
                          {...register("time", {
                            required: "Waktu wajib diisi",
                          })}
                          className="py-3"
                        />
                        {errors.time && (
                          <p id="time-error" role="alert" className="text-destructive text-sm mt-1">
                            {errors.time.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Guests */}
                    <div>
                      <label htmlFor="reservation-guests" className="block text-sm font-medium mb-2">
                        Jumlah Tamu *
                      </label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" aria-hidden="true" />
                        <Input
                          id="reservation-guests"
                          type="number"
                          min={1}
                          max={50}
                          aria-describedby={errors.guests ? "guests-error" : undefined}
                          aria-invalid={errors.guests ? "true" : "false"}
                          {...register("guests", {
                            required: "Jumlah tamu wajib diisi",
                            min: { value: 1, message: "Minimal 1 orang" },
                            max: { value: 50, message: "Maksimal 50 orang" },
                          })}
                          placeholder="Jumlah orang"
                          className="pl-10 py-3"
                        />
                      </div>
                      {errors.guests && (
                        <p id="guests-error" role="alert" className="text-destructive text-sm mt-1">
                          {errors.guests.message}
                        </p>
                      )}
                    </div>

                    {/* Notes */}
                    <div>
                      <label htmlFor="reservation-notes" className="block text-sm font-medium mb-2">
                        Catatan Tambahan
                      </label>
                      <Textarea
                        id="reservation-notes"
                        {...register("notes")}
                        placeholder="Permintaan khusus, alergi makanan, dll."
                        rows={3}
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full glow-orange"
                      disabled={isSubmitting || isSuccess}
                    >
                      {isSubmitting ? (
                        "Mengirim..."
                      ) : isSuccess ? (
                        <>
                          <CheckCircle className="w-5 h-5 mr-2" />
                          Terkirim!
                        </>
                      ) : (
                        <>
                          <MessageCircle className="w-5 h-5 mr-2" />
                          Kirim via WhatsApp
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Contact Cards */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <Card className="hover-lift">
                  <CardContent className="p-3 sm:p-5">
                    <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm sm:text-base mb-1">Alamat</h3>
                        <p className="text-muted-foreground text-xs sm:text-sm">
                          {RESTAURANT.address.full}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover-lift">
                  <CardContent className="p-3 sm:p-5">
                    <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm sm:text-base mb-1">Telepon</h3>
                        <a
                          href={`tel:${RESTAURANT.phone}`}
                          className="text-muted-foreground text-xs sm:text-sm hover:text-primary transition-colors"
                        >
                          {RESTAURANT.phone}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover-lift">
                  <CardContent className="p-3 sm:p-5">
                    <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm sm:text-base mb-1">Email</h3>
                        <a
                          href={`mailto:${RESTAURANT.email}`}
                          className="text-muted-foreground text-xs sm:text-sm hover:text-primary transition-colors break-all"
                        >
                          {RESTAURANT.email}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover-lift">
                  <CardContent className="p-3 sm:p-5">
                    <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm sm:text-base mb-1">Jam Buka</h3>
                        <p className="text-muted-foreground text-xs sm:text-sm">
                          Setiap hari, 10:00 - 22:00
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Map */}
              <Card className="overflow-hidden">
                <div className="relative h-[350px] md:h-[400px]">
                  {/* Overlay with tap-to-interact for mobile - prevents scroll trap */}
                  {!mapInteractive && (
                    <button
                      type="button"
                      onClick={() => setMapInteractive(true)}
                      className="absolute inset-0 z-10 bg-black/5 md:hidden flex items-center justify-center cursor-pointer transition-colors hover:bg-black/10 active:bg-black/15"
                      aria-label="Ketuk untuk berinteraksi dengan peta"
                    >
                      <span className="bg-white/95 dark:bg-gray-900/95 text-foreground px-4 py-2 rounded-full shadow-lg text-sm font-medium flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        Ketuk untuk buka peta
                      </span>
                    </button>
                  )}
                  <iframe
                    src={googleMapsUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi Rumah Makan Padang Raso Minang"
                    className="absolute inset-0"
                    tabIndex={mapInteractive ? 0 : -1}
                  />
                </div>
              </Card>

              {/* Operating Hours Detail */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    Jam Operasional
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {RESTAURANT.hours.map((schedule, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b last:border-0"
                      >
                        <span className="font-medium">{schedule.day}</span>
                        <span className="text-primary font-semibold">
                          {schedule.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
