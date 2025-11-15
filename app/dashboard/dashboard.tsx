"use client";

import Image from "next/image";
import { dataImage } from "./data";
import { Card } from "@/components/ui/card";
import { Bookmark, CircleX, Plus } from "lucide-react";
import Header from "./header";
import Footer from "./footer";
import Herosection from "./herosection";
import Thirdsection from "./thirdsection";
import SecondSection from "./secondsection";
import { motion } from "framer-motion";
import MyForm from "./enquire-form";
import { useState } from "react";
import { ModeToggle } from "./togglemode";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import BookmarkSaved from "./bookmarksaved";
import Blog from "./blog";

export type DataImage = {
  id: number;
  title: string;
  img: string;
};

function Dashboard() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div>
        <Toaster />
      </div>

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 p-2">
        {dataImage.map((d) => (
          <motion.div
            key={d.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            <Card
              key={d.id}
              className="relative w-full aspect-4/3 overflow-hidden rounded-xl shadow-md hover:shadow-lg transition"
            >
              {/* Icons */}
              <div className="absolute top-2 right-2 z-20 flex gap-2">
                <div
                  className="bg-secondary/70 p-1 rounded-full hover:bg-muted transition cursor-pointer"
                  onClick={() => setOpen(true)}
                >
                  <Plus className="w-6 h-6" />
                </div>

                <BookmarkSaved />
              </div>

              {/* Image */}
              <div className=" w-full h-full flex items-center justify-center">
                <Image
                  src={d.img}
                  alt={d.title}
                  fill
                  className="object-cover hover:scale-105 transition delay-100 rounded-xl"
                />
              </div>

              {/* Bottom title overlay */}
              <div className="absolute bottom-0  left-0 w-full bg-foreground/50 p-2 text-secondary z-10">
                <div className="text-md md:text-lg font-bold text-center">
                  {d.title}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Blog */}
      <div>
        <Blog />
      </div>

      {/*MyForm */}
      {open && (
        <div className="fixed inset-0 z-50  md:top-10 flex items-center justify-center p-4 mb-4 ">
          <div className="relative bg-secondary w-full max-w-sm md:max-w-lg h-[80vh] md:h-[70vh] lg:h-[80vh] p-6 flex flex-col overflow-y-auto rounded-xl">
            <CircleX
              className="absolute top-2 right-2 w-6 h-6 cursor-pointer"
              onClick={() => setOpen(false)}
            />
            <MyForm />
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="sticky bottom-0 z-50 w-full bg-background">
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
