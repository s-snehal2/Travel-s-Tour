"use client";

import Image from "next/image";
import { heroDataImage } from "./data";
import Navigation from "./navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Tent } from "lucide-react";

export type HeroDataImage = {
  id: number;
  title: string;
  img: string;
};

function Herosection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroDataImage.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Navbar */}
      <div className="hidden md:flex absolute top-14 z-20 w-full justify-center">
        <Navigation />
      </div>

      {/* Image Slider */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={heroDataImage[current].img}
              alt={heroDataImage[current].title}
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary/40 dark:bg-background/40 z-10 text-center px-4">
        <div className="bg-primary/80 rounded-full p-2 text-secondary">
          <Tent className="size-6 md:size-8" />
        </div>

        <h1 className="text-secondary dark:text-primary text-xl md:text-2xl lg:text-3xl font-bold mt-1">
          Welcome to Travels & Tour
        </h1>

        <p className="text-secondary dark:text-primary text-sm md:text-lg lg:text-xl font-semibold p-2">
          Explore. Dream. Discover.
        </p>
      </div>
    </div>
  );
}

export default Herosection;
