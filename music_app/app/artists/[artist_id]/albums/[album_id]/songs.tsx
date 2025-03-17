"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { convertMillisecondsToMinutesSeconds } from "@/lib/utils";
import { Song } from "@/types/song";
import { TabsContent } from "@radix-ui/react-tabs";
import { Play } from "lucide-react";

export default function Songs({ songs }: { songs: Song[] }) {
  return (
    <TabsContent value="songs" className="w-full space-y-8">
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Songs</h2>
        <Card className="bg-zinc-900 border-zinc-800 text-white">
          <CardContent className="p-0">
            <div className="divide-y divide-zinc-800">
              {songs.map((song, index) => (
                <div
                  key={song.idTrack}
                  className="flex items-center p-4 hover:bg-zinc-800 transition-colors"
                >
                  <div className="w-8 text-center text-zinc-500">
                    {index + 1}
                  </div>
                  <div className="ml-4 flex-1">
                    <p className="font-medium">{song.strTrack}</p>
                  </div>
                  <div className="text-zinc-500">
                    {convertMillisecondsToMinutesSeconds(song.intDuration)}
                  </div>
                  <Button size="icon" variant="ghost" className="ml-2">
                    <Play className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </TabsContent>
  );
}
