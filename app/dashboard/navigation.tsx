import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

function Navigation() {
  return (
    <div className="w-full bg-primary-foreground flex justify-center gap-6">
      <NavigationMenu>
        <NavigationMenuList className="flex items-center ">
          <NavigationMenuItem>
            <NavigationMenuLink className="cursor-pointer text-center">
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink className="cursor-pointer text-center">
              History
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink className="cursor-pointer text-center">
              Location
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink className="cursor-pointer text-center">
              Account
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink className="cursor-pointer text-center">
              Settings
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default Navigation;
