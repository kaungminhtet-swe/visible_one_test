import { Bell, Search } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function AppHeader() {
  return (
    <div className="flex justify-between items-center">
      <div className="relative w-64">
        <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input
          className="pl-10 rounded-full bg-gray-100 border-0"
          placeholder="Search..."
        />
      </div>
      <div className="relative">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5" />
          <Badge className="absolute -top-1 -right-1 w-4 h-4 p-0 flex items-center justify-center bg-pink-500">
            1
          </Badge>
        </Button>
      </div>
    </div>
  );
}
