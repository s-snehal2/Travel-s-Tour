import { History, Home, MapPin, Search, Settings } from "lucide-react";

function Footer() {
  return (
    <div>
      <div className="md:hidden flex flex-row items-center justify-between border-b border-border px-4 py-6  ">
        <Home />
        <History />
        <Search />
        <MapPin />
        <Settings />
      </div>
    </div>
  );
}

export default Footer;
