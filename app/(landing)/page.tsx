"use client";
import AboutSection from "@/components/about/about-section";
import CarouselSection from "@/components/carouel/why-section";
import FaqSection from "@/components/faq/faq-section";
import Footer from "@/components/footer/footer-section";
import Navbar from "@/components/header/navbar";
import HeroSection from "@/components/hero/hero-section";
import StepsSection from "@/components/steps/steps-section";
import TestimonySection from "@/components/testimony/testimony-section";
import React from "react";

export default function page() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TestimonySection />
      <StepsSection />
      <CarouselSection />
      <FaqSection />
      <Footer />
    </div>
  );
}
