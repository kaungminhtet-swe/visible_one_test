import AppSidebar from "@/components/home/app-sidebar";
import PlayerBar from "@/components/home/player-bar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Music App",
  description: "Listen to music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-screen h-screen flex flex-col bg-pink-500">
          <div className="w-screen bg-white flex flex-1 overflow-hidden rounded-b-4xl border-0 shadow-xl">
            <AppSidebar />
            {children}
          </div>
          <PlayerBar />
        </div>
      </body>
    </html>
  );
}
