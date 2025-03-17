"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MusicVideo } from "@/types/music-video";
import { Pause, Play, SkipBack, SkipForward, Volume2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function MusicPlayer({
  musicVideo,
}: {
  musicVideo: MusicVideo;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  // Convert duration from milliseconds to seconds
  const durationInSeconds = Number.parseInt(musicVideo.intDuration) / 1000;

  // Format time as mm:ss
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  // Extract YouTube video ID from URL
  const getYouTubeId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const youtubeId = getYouTubeId(musicVideo.strMusicVid);

  return (
    <Card className="w-full">
      <CardContent className="p-0">
        <Tabs defaultValue="player" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="player">Player</TabsTrigger>
            <TabsTrigger value="video">Music Video</TabsTrigger>
          </TabsList>
          <TabsContent value="player" className="space-y-4 p-4">
            <div className="flex items-center justify-center py-6">
              <div className="relative w-48 h-48 rounded-md overflow-hidden bg-muted">
                {musicVideo.strTrackThumb ? (
                  <Image
                    src={musicVideo.strTrackThumb || "/placeholder.svg"}
                    alt={`${musicVideo.strTrackThumb} album art`}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <Image
                      src="/placeholder.svg?height=192&width=192"
                      alt="Album placeholder"
                      width={192}
                      height={192}
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(durationInSeconds)}</span>
              </div>
              <Slider
                value={[currentTime]}
                max={durationInSeconds}
                step={1}
                onValueChange={(value) => setCurrentTime(value[0])}
                className="w-full"
              />
            </div>

            <div className="flex justify-center items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Previous musicVideo"
              >
                <SkipBack className="h-5 w-5" />
              </Button>
              <Button
                variant="default"
                size="icon"
                className="h-12 w-12 rounded-full"
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause className="h-6 w-6" />
                ) : (
                  <Play className="h-6 w-6 ml-0.5" />
                )}
              </Button>
              <Button variant="ghost" size="icon" aria-label="Next musicVideo">
                <SkipForward className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Volume2 className="h-4 w-4 text-muted-foreground" />
              <Slider defaultValue={[70]} max={100} step={1} className="w-28" />
            </div>

            <div className="mt-4 text-sm text-muted-foreground">
              <p>{musicVideo.strDescriptionEN}</p>
            </div>
          </TabsContent>
          <TabsContent value="video">
            {youtubeId ? (
              <div className="aspect-video overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${youtubeId}`}
                  title={`${musicVideo.strTrack} by ${musicVideo.strArtist}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="aspect-video"
                ></iframe>
              </div>
            ) : (
              <div className="flex items-center justify-center h-64 bg-muted">
                <p className="text-muted-foreground">Video not available</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
