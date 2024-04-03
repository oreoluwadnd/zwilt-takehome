"use client";
import Footer from "@/components/footer/footer-section";
import Navbar from "@/components/header/navbar";
import HeroSection from "@/components/hero/hero-section";
import React from "react";

export default function page() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}
