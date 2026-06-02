import React from "react";
import TripCard from "../card/card";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

function page() {
  return (
    <div>
      <div className="flex flex-col gap-6 max-w-5xl mx-auto p-4 md:p-6">
        <div className="relative border-b border-border pb-2 py-8">
          <p className="text-2xl font-bold text-center">Locations </p>
          <Link href="/dashboard" className="absolute left-0 top-1/2  px-2">
            <ArrowLeft size={28} />
          </Link>
        </div>
        <TripCard />
      </div>
    </div>
  );
}

export default page;
