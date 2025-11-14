import Image from "next/image";
import React from "react";

function Thirdsection() {
  return (
    <div className="relative w-full h-[20vh] md:h-[30vh] rounded-xl">
      <Image
        src="/images/img32.JPG"
        alt="Upcoming trip"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-secondary dark:text-primary text-2xl md:text-4xl font-bold">
          Upcoming Trips
        </div>
      </div>
    </div>
  );
}

export default Thirdsection;
