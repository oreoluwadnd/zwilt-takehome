"use client";
import AboutSection from "@/components/about/about-section";
import CarouselSection from "@/components/carouel/why-section";
import FaqSection from "@/components/faq/faq-section";
import Footer from "@/components/footer/footer-section";
import Navbar from "@/components/header/navbar";
import HeroSection from "@/components/hero/hero-section";
import JourneySection from "@/components/journey/journey-section";
import StepsSection from "@/components/steps/steps-section";
import TestimonySection from "@/components/testimony/testimony-section";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TestimonySection />
      <StepsSection />
      <JourneySection />
      <CarouselSection />
      <FaqSection />
      <Footer />
    </div>
  );
}
