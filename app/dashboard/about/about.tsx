import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function About() {
  return (
    <div>
      <div className="relative w-60 h-60 mx-auto">
        <Image
          src="/images/blog2.jpg"
          alt="image"
          fill
          priority
          className="rounded-full object-cover"
        />
      </div>
      {/* Text */}
      <p className="flex flex-col gap-2 text-sm  leading-relaxed ">
        <b className="text-lg md:text-xl">Explore. Experience. Remember.</b>
        Welcome to this travel space — created for people who love discovering
        the world. Here, you’ll find destination guides, travel tips,
        itineraries, budget-friendly suggestions, packing checklists, food
        recommendations and photography from different parts of the globe. This
        website was built to make travel easier, more meaningful and more
        enjoyable. Whether you're planning your first trip, backpacking across
        countries, or looking for hidden gems beyond the usual tourist spots —
        this platform is here to help. Every guide and article is based on real
        experiences, research and a love for exploring cultures, nature and
        unforgettable places.
        <b>Your journey starts here.</b>
      </p>
    </div>
  );
}

export default About;
