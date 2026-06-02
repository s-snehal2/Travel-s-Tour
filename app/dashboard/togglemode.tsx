"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Laptop2, MoonStar, SunDim } from "lucide-react";

export function ModeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div>
      {/* Mobile toggle */}
      <div className="md:hidden">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-muted"
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        >
          {resolvedTheme === "light" ? (
            <SunDim className="h-5 w-5" />
          ) : (
            <MoonStar className="h-5 w-5" />
          )}
        </Button>
      </div>

      <div className="hidden md:block">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="border border-none gap-4 text-xl lg:text-lg">
              Themes
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="rounded-lg">
            <DropdownMenuItem
              onClick={() => setTheme("light")}
              className="flex gap-2"
            >
              <SunDim className="h-4 w-4" /> Light
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={() => setTheme("dark")}
              className="flex gap-2"
            >
              <MoonStar className="h-4 w-4" /> Dark
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={() => setTheme("system")}
              className="flex gap-2"
            >
              <Laptop2 className="h-4 w-4" /> System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
