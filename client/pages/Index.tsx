import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AppsShowcase from "@/components/AppsShowcase";
import Journey from "@/components/Journey";
import VideoTestimonials from "@/components/VideoTestimonials";
import UserTestimonials from "@/components/UserTestimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-setapp-dark">
      <Navbar />
      <Hero />
      <AppsShowcase />
      <Journey />
      <VideoTestimonials />
      <UserTestimonials />
      <CTASection />
      <Footer />
    </div>
  );
}
