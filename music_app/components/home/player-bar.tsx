"use client";

import { Slider } from "@/components/ui/slider";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  ListMusic,
  Maximize2,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume2,
} from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

export default function PlayerBar() {
  const [volume, setVolume] = useState(75);
  const [currentTime, setCurrentTime] = useState(0);

  return (
    <div className="h-20 bg-gradient-to-r from-pink-500 to-pink-600 flex items-center px-4 text-white">
      <div className="flex items-center gap-3 w-1/4">
        <Avatar className="w-12 h-12 rounded-full">
          <AvatarImage
            src="/placeholder.svg?height=48&width=48"
            alt="Album cover"
          />
          <AvatarFallback className="bg-pink-400">MB</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">Mind-Blowing</p>
          <p className="text-sm text-pink-200">Various Artists</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center">
        <div className="flex items-center gap-4 mb-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-pink-200 hover:text-white"
          >
            <Shuffle className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white">
            <SkipBack className="w-5 h-5" />
          </Button>
          <Button
            size="icon"
            className="bg-white text-pink-500 rounded-full h-10 w-10 hover:bg-white/90"
          >
            <Play className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white">
            <SkipForward className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-pink-200 hover:text-white"
          >
            <Repeat className="w-5 h-5" />
          </Button>
        </div>

        <div className="flex items-center gap-3 w-full">
          <span className="text-xs">0:00</span>
          <Slider
            value={[currentTime]}
            max={550}
            step={1}
            className="w-full"
            onValueChange={(value) => setCurrentTime(value[0])}
          />
          <span className="text-xs">9:10</span>
        </div>
      </div>

      <div className="w-1/4 flex items-center justify-end gap-3">
        <Button variant="ghost" size="icon" className="text-white">
          <ListMusic className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-white">
          <Maximize2 className="w-5 h-5" />
        </Button>
        <div className="flex items-center gap-2">
          <Volume2 className="w-4 h-4 text-pink-200" />
          <Slider
            value={[volume]}
            max={100}
            step={1}
            className="w-24"
            onValueChange={(value) => setVolume(value[0])}
          />
        </div>
      </div>
    </div>
  );
}
