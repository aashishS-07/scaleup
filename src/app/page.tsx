import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import PhotoGallery from "@/components/Gallery";
import React from "react";
import "./custom2.css";
import ErrorPage from "@/app/laravel/page";

export const metadata: Metadata = {
  title: "ScaleUP Event and Exhibition",
  description: "ScaleUP Event and Exhibition",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <ErrorPage />
      {/*<Features />*/}
      <Video />
      <h1 className="text-4xl font-bold text-center py-4">Our Work</h1>
        <PhotoGallery />


      {/*  <Brands /> */}
      {/* <AboutSectionOne /> */}
      {/* <AboutSectionTwo /> */}
      <Testimonials />

      {/* <Pricing /> */}
      {/* <Blog /> */}
      <Contact />
    </>
  );
}
