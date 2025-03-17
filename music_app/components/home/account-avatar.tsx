import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { fallbackName } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export default function AccountAvatar({ name }: { name: string }) {
  return (
    <div className="p-5 flex items-center gap-3">
      <Avatar className="w-10 h-10 border">
        <AvatarImage
          // src="/placeholder-user.jpg"
          alt={name}
        />
        <AvatarFallback>{fallbackName(name)}</AvatarFallback>
      </Avatar>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-auto p-0 font-semibold">
              {name} <ChevronDown className="w-4 h-4 ml-1" />
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
  );
}
