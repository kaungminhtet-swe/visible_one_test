import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Heart, MoreHorizontal, VideoIcon } from "lucide-react";
import { Button } from "../ui/button";

export default function RecentPlayedMusic() {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Recently Played</h2>
      <div className="space-y-2">
        {[
          {
            title: "All That Jazz",
            artist: "Various Artists",
            duration: "13:30",
          },
          {
            title: "Splashed",
            artist: "Blue-Eyed Devils",
            duration: "05:12",
          },
          { title: "Prism", artist: "Bus Bot", duration: "03:22" },
          {
            title: "Mind-blowing Beats",
            artist: "Various Artists",
            duration: "09:10",
          },
        ].map((track) => (
          <div
            key={`index ${track.title}`}
            className="flex items-center justify-between py-2 px-1 hover:bg-gray-100 rounded-md"
          >
            <div className="flex items-center gap-3">
              <Button size={"icon"} className="">
                <VideoIcon />
              </Button>
              <div>
                <p className="font-medium">{track.title}</p>
                <p className="text-sm text-gray-500">{track.artist}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">{track.duration}</span>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-gray-600"
              >
                <Heart className="w-4 h-4" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Add to playlist</DropdownMenuItem>
                  <DropdownMenuItem>Share</DropdownMenuItem>
                  <DropdownMenuItem>View artist</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
