import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function HeroSection() {
  return (
    <header className="container mx-auto px-4 py-3 flex justify-between items-center">
      <div className="text-red-500 font-bold text-lg">LOGO</div>
      <div className="flex items-center gap-6">
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-black font-medium text-sm">
            HOME
          </Link>
          <Link href="#" className="text-gray-500 font-medium text-sm">
            DISCOVERY
          </Link>
          <Link href="#" className="text-gray-500 font-medium text-sm">
            PHOTOS
          </Link>
          <Link href="#" className="text-gray-500 font-medium text-sm">
            CONTACT
          </Link>
        </nav>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
