import { FeaturedCourses } from "@/components/FeaturedCourses";
import { HeroSection } from "@/components/HeroSection";
import MusicSchoolTestimonial from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
  <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
  
   <HeroSection />
   <FeaturedCourses />
   <WhyChooseUs />
   <MusicSchoolTestimonial/>
   <UpcomingWebinars />
  </main>
  );
}
