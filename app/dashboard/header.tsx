import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { BellIcon, MessageCircle, Search, Tent } from "lucide-react";
import React, { useState } from "react";
import { ModeToggle } from "./togglemode";
import Profile from "./profile";

function Header() {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between border-b border-border px-4 py-3 bg-background shadow-sm">
        <div className="flex items-center gap-2 text-lg md:text-xl font-bold">
          <div className="bg-primary/80 p-1.5 rounded-full text-secondary">
            <Tent size={20} />
          </div>
          <span>Travel & Tour</span>
        </div>

        <div className="hidden md:block relative w-1/3">
          <Input placeholder="Search locations..." className="pl-8 w-full" />
          <Search
            size={16}
            className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
        </div>

        <div className="flex items-center gap-2">
          <MessageCircle size={32} className="bg-muted rounded-full p-1" />
          <BellIcon size={32} className="bg-muted rounded-full p-1" />

          <ModeToggle />

          {/* Avatar click */}
          <Avatar
            className="w-9 h-9 cursor-pointer"
            onClick={() => setShowProfile(!showProfile)}
          >
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
        </div>
      </header>

      {/* Show Profile Card */}
      {showProfile && (
        <div className="absolute top-15 right-0 z-50 flex justify-center items-center">
          <Profile />
        </div>
      )}
    </>
  );
}

export default Header;
