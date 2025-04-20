
import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CompaniesSection from "@/components/home/CompaniesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import Footer from "@/components/home/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <WhyChooseUs />
        <CompaniesSection />
        <TestimonialsSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
