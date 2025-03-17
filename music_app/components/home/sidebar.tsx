import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Separator,
} from "@radix-ui/react-dropdown-menu";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import {
  BarChart2,
  ChevronDown,
  Home,
  ListMusic,
  PlusCircle,
  User,
} from "lucide-react";
import { Button } from "../ui/button";

export default function Sidebar() {
  return (
    <div className="w-60 bg-gray-100 flex flex-col border-r">
      <div className="p-5 flex items-center gap-3">
        <Avatar className="w-10 h-10 border">
          <AvatarImage src="/placeholder-user.jpg" alt="Joshua" />
          <AvatarFallback>J</AvatarFallback>
        </Avatar>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-auto p-0 font-semibold">
                Joshua <ChevronDown className="w-4 h-4 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Account</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <Separator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <span className="text-xs text-gray-500">Premium</span>
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="px-5 py-4">
          <h3 className="text-xs font-medium text-gray-400 mb-2">BROWSE</h3>
          <nav className="space-y-1">
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 text-gray-700 font-normal"
            >
              <Home className="w-5 h-5" />
              Home
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 text-gray-700 font-normal"
            >
              <ListMusic className="w-5 h-5" />
              Songs
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 text-gray-700 font-normal"
            >
              <ListMusic className="w-5 h-5" />
              Playlists
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 text-gray-700 font-normal"
            >
              <User className="w-5 h-5" />
              Just for You
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 text-gray-700 font-normal"
            >
              <BarChart2 className="w-5 h-5" />
              Top Charts
            </Button>
          </nav>
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
