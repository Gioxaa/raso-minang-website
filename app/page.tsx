import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { FeaturedMenu } from "@/components/sections/FeaturedMenu";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { LocationMap } from "@/components/sections/LocationMap";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedMenu />
      <GalleryPreview />
      <Testimonials />
      <LocationMap />
    </>
  );
}
