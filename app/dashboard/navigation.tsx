import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import Link from "next/link";
import { ModeToggle } from "./togglemode";

type Links = {
  name: string;
  href: string;
};

const link = [
  { name: "Home", href: "/dashboard/home" },
  { name: "Locations", href: "/dashboard/location" },
  { name: "Blog", href: "/dashboard/blog" },
  { name: "About", href: "/dashboard/about" },
  { name: "Contact", href: "/dashboard/contact" },
];

function Navigation() {
  return (
    <div className=" md:block w-full flex justify-center  gap-6">
      <div className="flex flex-col h-20 justify-center items-center bg-accent/20">
        <div className=" mb-4 flex flex-row justify-center items-center gap-2">
          <NavigationMenu className="border border-none">
            <NavigationMenuList>
              {link.map((l) => (
                <NavigationMenuItem key={l.name}>
                  <NavigationMenuLink asChild>
                    <Link href={l.href} className="text-xl lg:text-lg ">
                      {l.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

export default Navigation;
