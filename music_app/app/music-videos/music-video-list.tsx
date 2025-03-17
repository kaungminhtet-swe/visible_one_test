"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MusicVideo } from "@/types/music-video";
import { Clock, Music, Play } from "lucide-react";
import { useState } from "react";
import MusicPlayer from "./music-player";

interface TrackListProps {
  tracks: MusicVideo[];
}

export default function MusicVidoeList({ tracks }: TrackListProps) {
  const [selectedTrack, setSelectedTrack] = useState<MusicVideo | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");

  const formatTime = (timeInMs: string) => {
    const timeInSeconds = Number.parseInt(timeInMs) / 1000;
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const filteredTracks = tracks.filter(
    (track) =>
      track.strTrack.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.strArtist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedTracks = [...filteredTracks].sort((a, b) => {
    switch (sortBy) {
      case "title-asc":
        return a.strTrack.localeCompare(b.strTrack);
      case "title-desc":
        return b.strTrack.localeCompare(a.strTrack);
      case "duration-asc":
        return Number.parseInt(a.intDuration) - Number.parseInt(b.intDuration);
      case "duration-desc":
        return Number.parseInt(b.intDuration) - Number.parseInt(a.intDuration);
      default:
        return 0;
    }
  });

  return (
    <ScrollArea className="h-9/12">
      <div className="m-1 flex flex-col sm:flex-row justify-between gap-4">
        <div className="relative w-full sm:w-64">
          <Input
            placeholder="Search tracks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>

        <div className="flex gap-2">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Default</SelectItem>
              <SelectItem value="title-asc">Title (A-Z)</SelectItem>
              <SelectItem value="title-desc">Title (Z-A)</SelectItem>
              <SelectItem value="duration-asc">Duration (Shortest)</SelectItem>
              <SelectItem value="duration-desc">Duration (Longest)</SelectItem>
            </SelectContent>
          </Select>

          <Button
            variant={viewMode === "list" ? "default" : "outline"}
            size="icon"
            onClick={() => setViewMode("list")}
            aria-label="List view"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <line x1="8" y1="6" x2="21" y2="6"></line>
              <line x1="8" y1="12" x2="21" y2="12"></line>
              <line x1="8" y1="18" x2="21" y2="18"></line>
              <line x1="3" y1="6" x2="3.01" y2="6"></line>
              <line x1="3" y1="12" x2="3.01" y2="12"></line>
              <line x1="3" y1="18" x2="3.01" y2="18"></line>
            </svg>
          </Button>

          <Button
            variant={viewMode === "grid" ? "default" : "outline"}
            size="icon"
            onClick={() => setViewMode("grid")}
            aria-label="Grid view"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
          </Button>
        </div>
      </div>

      {viewMode === "list" ? (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">#</TableHead>
                <TableHead>Title</TableHead>
                <TableHead className="hidden md:table-cell">Artist</TableHead>
                <TableHead className="hidden md:table-cell">Duration</TableHead>
                <TableHead className="w-[70px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedTracks.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="h-24 text-center">
                    No tracks found.
                  </TableCell>
                </TableRow>
              ) : (
                sortedTracks.map((track, index) => (
                  <TableRow
                    key={track.idTrack}
                    className="cursor-pointer hover:bg-muted/50"
                    onClick={() => setSelectedTrack(track)}
                  >
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-muted flex items-center justify-center">
                          <Music className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div>
                          <div className="font-medium">{track.strTrack}</div>
                          <div className="text-xs text-muted-foreground md:hidden">
                            {track.strArtist}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {track.strArtist}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {formatTime(track.intDuration)}
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-end">
                        <Dialog>
                          <DialogTrigger
                            asChild
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                            >
                              <Play className="h-4 w-4" />
                              <span className="sr-only">Play</span>
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[600px]">
                            <DialogHeader>
                              <DialogTitle>Now Playing</DialogTitle>
                              <DialogDescription>
                                {track.strArtist} - {track.strTrack}
                              </DialogDescription>
                            </DialogHeader>
                            <MusicPlayer musicVideo={track} />
                          </DialogContent>
                        </Dialog>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sortedTracks.length === 0 ? (
            <div className="col-span-full h-24 flex items-center justify-center text-muted-foreground">
              No tracks found.
            </div>
          ) : (
            sortedTracks.map((track) => (
              <Card
                key={track.idTrack}
                className="overflow-hidden cursor-pointer hover:bg-muted/50 transition-colors"
                onClick={() => setSelectedTrack(track)}
              >
                <div className="aspect-square bg-muted relative flex items-center justify-center">
                  <Music className="h-12 w-12 text-muted-foreground/50" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black/50 transition-opacity">
                    <Dialog>
                      <DialogTrigger
                        asChild
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Button
                          variant="secondary"
                          size="icon"
                          className="rounded-full h-12 w-12"
                        >
                          <Play className="h-6 w-6" />
                          <span className="sr-only">Play</span>
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[600px]">
                        <DialogHeader>
                          <DialogTitle>Now Playing</DialogTitle>
                          <DialogDescription>
                            {track.strArtist} - {track.strTrack}
                          </DialogDescription>
                        </DialogHeader>
                        <MusicPlayer musicVideo={track} />
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium truncate">{track.strTrack}</h3>
                  <p className="text-sm text-muted-foreground">
                    {track.strArtist}
                  </p>
                  <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{formatTime(track.intDuration)}</span>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      )}

      {selectedTrack && (
        <Dialog
          open={!!selectedTrack}
          onOpenChange={(open) => !open && setSelectedTrack(null)}
        >
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Now Playing</DialogTitle>
              <DialogDescription>
                {selectedTrack.strArtist} - {selectedTrack.strTrack}
              </DialogDescription>
            </DialogHeader>
            <MusicPlayer musicVideo={selectedTrack} />
          </DialogContent>
        </Dialog>
      )}

      <div className="text-sm text-muted-foreground">
        Showing {sortedTracks.length} of {tracks.length} tracks
      </div>
    </ScrollArea>
  );
}
