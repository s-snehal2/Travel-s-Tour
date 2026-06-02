import Link from "next/link";
import { Contact, InfoIcon, MapPin, NotebookText, Search } from "lucide-react";

const links = [
  { icon: MapPin, href: "/dashboard/location" },
  { icon: NotebookText, href: "/dashboard/blog" },
  { icon: InfoIcon, href: "/dashboard/about" },
  { icon: Contact, href: "/dashboard/contact" },
];

function Footer() {
  return (
    <div className="md:hidden flex flex-row items-center justify-between border-t border-border bg-background px-6 py-4 fixed bottom-0 left-0 right-0">
      {links.map((l) => {
        return (
          <Link key={l.href} href={l.href}>
            <l.icon className="" />
          </Link>
        );
      })}
    </div>
  );
}

export default Footer;
