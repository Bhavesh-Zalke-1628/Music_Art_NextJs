import FeaturedCourses from "@/Components/FeaturedCourses";
import HeroSection from "@/Components/HeroSection";
import MusicTestimonilCard from "@/Components/TestimonilCard";
import WhyChooseUs from "@/Components/WhyChooseUs";


export default function Home() {
  return (
    <main className=" min-h-screen bg-black/[0.96]  antialiased bg-grid-white/[0.02]">
      <HeroSection />
      < FeaturedCourses />
      <WhyChooseUs />
      <MusicTestimonilCard />
    </main>
  );
}