"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { blogData } from "./data";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export type BlogCard = {
  id: number;
  title: string;
  image: string[];
  excerpt: string;
  author: string;
  date: string;
};

function Blog() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" space-y-4 p-2">
      <div className="text-xl md:text-2xl px-4 font-semibold">Latest Blog</div>

      {/* HORIZONTAL SCROLL */}
      <div className="flex gap-4 overflow-auto">
        {blogData.map((d) => {
          const index = current % d.image.length;

          return (
            <Card
              key={d.id}
              className="min-w-[300px] md:min-w-[500px] rounded-xl  shadow-none hover:scale-105 transition-transform delay-200"
            >
              <CardHeader>
                <CardTitle className="text-lg md:text-center">
                  {d.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-2">
                <div className="relative w-full h-48 overflow-hidden rounded-md">
                  <AnimatePresence>
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={d.image[index]}
                        alt="slide image"
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                <p className="text-sm line-clamp-2">{d.excerpt}</p>
                <p className="text-xs text-muted-foreground">By {d.author}</p>
              </CardContent>

              <CardFooter className="text-xs text-muted-foreground">
                {d.date}
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Blog;
