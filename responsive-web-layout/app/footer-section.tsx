import { Facebook, Globe, Instagram, X } from "lucide-react";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="bg-gray-400 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          <div>
            <div className="font-bold mb-4">LOGO</div>
          </div>
          <div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">Discovery</Link>
              </li>
              <li>
                <Link href="#">Photos</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Help</Link>
              </li>
              <li>
                <Link href="#">Terms</Link>
              </li>
              <li>
                <Link href="#">Guidlines</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">Testimonials</Link>
              </li>
              <li>
                <Link href="#">Advertise</Link>
              </li>
              <li>
                <Link href="#">Integrations</Link>
              </li>
              <li>
                <Link href="#">Careers</Link>
              </li>
            </ul>
          </div>
          <div className="md:text-right">
            <div className="flex md:justify-end gap-4 mb-4">
              <Link
                href="#"
                className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center"
              >
                <Instagram className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center"
              >
                <Facebook className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center"
              >
                <Globe className="w-4 h-4" />
              </Link>
            </div>
            <form className="flex">
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent border-b border-white/30 text-sm py-1 px-2 focus:outline-none w-full"
              />
              <button type="submit" className="ml-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
        <div className="text-sm text-white/70 text-center">
          © 2025 - All rights reserved
        </div>
      </div>
    </footer>
  );
}
