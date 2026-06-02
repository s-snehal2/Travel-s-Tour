"use client";

import Header from "./header";
import Footer from "./footer";
import Herosection from "./herosection";
import Thirdsection from "./thirdsection";
import SecondSection from "./secondsection";
import Blog from "./blog";
import TripCard from "./card/card";
import About from "./about/about";
import Contact from "./contact/contact";

import { Toaster } from "@/components/ui/sonner";

export type DataImage = {
  id: number;
  title: string;
  img: string;
};

function Dashboard() {
  return (
    <div>
      {/* Header */}
      <div className="fixed top-0 z-50 w-full">
        <Header />
      </div>

      {/* Hero Section */}
      <Herosection />

      {/* Second Section */}
      <div className="p-2">
        <SecondSection />
      </div>

      {/* Third Section */}
      <Thirdsection />

      {/* Card Grid */}
      <TripCard />
      {/* Blog */}
      <div>
        <Blog />
      </div>
      <div className="px-6 border border-border">
        <div className="text-xl md:text-2xl px-4 text-center p-2 font-semibold">
          About
        </div>

        <About />
      </div>
      <div className="px-6">
        <div className="text-xl md:text-2xl px-4 text-center p-2 font-semibold">
          Contact Us
        </div>
        <div className="mt-4">
          <Contact />
        </div>
      </div>

      {/* nemubar for sm */}
      <div className="sticky bottom-0 z-50 w-full bg-background">
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
