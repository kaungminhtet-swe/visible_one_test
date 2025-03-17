import { ScrollArea } from "@radix-ui/react-scroll-area";
import { ListMusic, PlusCircle } from "lucide-react";
import { Button } from "../ui/button";
import AccountAvatar from "./account-avatar";
import AppNav from "./app-nav";

export default function AppSidebar() {
  return (
    <div className="w-60 bg-gray-100 flex flex-col border-r">
      <AccountAvatar name="Kaung Min Htet" />

      <ScrollArea className="flex-1">
        <div className="px-5 py-4">
          <h3 className="text-xs font-medium text-gray-400 mb-2">BROWSE</h3>
          <AppNav />
        </div>

        <div className="px-5 py-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-medium text-gray-400">
              YOUR PLAYLISTS
            </h3>
            <Button variant="ghost" size="icon" className="w-5 h-5">
              <PlusCircle className="w-4 h-4" />
            </Button>
          </div>
          <nav className="space-y-1">
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 text-gray-700 font-normal"
            >
              <ListMusic className="w-5 h-5" />
              Workout Mix
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 text-gray-700 font-normal bg-blue-50"
            >
              <ListMusic className="w-5 h-5" />
              Chillin&apos; at Home
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 text-gray-700 font-normal"
            >
              <ListMusic className="w-5 h-5" />
              Booping at Adobe
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 text-gray-700 font-normal"
            >
              <ListMusic className="w-5 h-5" />
              XD 4 Life
            </Button>
          </nav>
        </div>
      </ScrollArea>
    </div>
  );
}
