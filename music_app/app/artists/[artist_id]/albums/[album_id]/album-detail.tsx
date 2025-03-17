"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Album } from "@/types/album";
import { Song } from "@/types/song";
import {
  Award,
  Building,
  Calendar,
  Disc,
  Heart,
  Music,
  Play,
  Share2,
  Star,
  User,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { default as Songs } from "./songs";

export default function AlbumDetail({
  album,
  songs,
}: {
  album: Album;
  songs: Song[];
}) {
  const router = useRouter();
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="h-screen bg-black overflow-hidden text-white">
      <ScrollArea className="h-11/12">
        <div className="relative h-96 bg-gradient-to-b from-zinc-800 to-black">
          <div
            className="absolute inset-0 opacity-30 bg-cover bg-center"
            style={{
              backgroundImage: `url(${album.strAlbumThumb})`,
              backgroundSize: "cover",
              filter: "blur(20px)",
            }}
          />

          <div className="container mx-auto px-4 py-8 relative h-full flex items-end">
            <div className="flex flex-col md:flex-row items-start md:items-end gap-6 pb-8">
              <div className="w-64 h-64 shrink-0 rounded-md overflow-hidden shadow-2xl">
                <img
                  src={album.strAlbumThumb}
                  alt={album.strAlbum}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <Badge variant="outline" className="text-white mb-2">
                  {album.strReleaseFormat}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  {album.strAlbum}
                </h1>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">{album.strArtist}</span>
                  <span className="text-zinc-400">•</span>
                  <span className="text-zinc-400">{album.intYearReleased}</span>
                  <span className="text-zinc-400">•</span>
                  {/* <span className="text-zinc-400">{songs.length} songs</span> */}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Badge className="bg-zinc-800 hover:bg-zinc-700">
                    {album.strGenre}
                  </Badge>
                  {album.strStyle && (
                    <Badge className="bg-zinc-800 hover:bg-zinc-700">
                      {album.strStyle}
                    </Badge>
                  )}
                  {album.strMood && (
                    <Badge className="bg-zinc-800 hover:bg-zinc-700">
                      {album.strMood}
                    </Badge>
                  )}
                  {album.strSpeed && (
                    <Badge className="bg-zinc-800 hover:bg-zinc-700">
                      {album.strSpeed}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 border-t border-b border-zinc-800">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center gap-4">
              <Button
                size="lg"
                onClick={() => router.push(`/albums/${album.idAlbum}/songs`)}
                className="bg-red-600 hover:bg-red-700"
              >
                <Play className="h-5 w-5 mr-2" /> Play Songs
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setIsLiked(!isLiked)}
                className={isLiked ? "text-red-500" : "text-zinc-400"}
              >
                <Heart className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-zinc-400">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="bg-zinc-900 mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="songs">Songs</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <Card className="bg-zinc-900 border-zinc-800">
                    <CardContent className="p-6">
                      <h2 className="text-white text-2xl font-semibold mb-4">
                        About
                      </h2>
                      <p className="text-zinc-300 leading-relaxed">
                        {album.strDescriptionEN}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <Card className="bg-zinc-900 border-zinc-800">
                    <CardContent className="p-6">
                      <h2 className="text-white text-xl font-semibold mb-4">
                        Album Info
                      </h2>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-zinc-500">Artist</p>
                          <div className="flex items-center gap-2 mt-1">
                            <User className="h-4 w-4 text-zinc-400" />
                            <Link
                              href={`/artists/${album.idArtist}`}
                              className="text-blue-400 hover:underline"
                            >
                              {album.strArtist}
                            </Link>
                          </div>
                        </div>

                        <Separator className="bg-zinc-800" />

                        <div className="text-white">
                          <p className="text-sm text-zinc-500">Released</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Calendar className="h-4 w-4 text-zinc-400" />
                            <p>{album.intYearReleased}</p>
                          </div>
                        </div>

                        <Separator className="bg-zinc-800" />

                        <div>
                          <p className="text-sm text-zinc-500">Label</p>
                          <div className="text-white flex items-center gap-2 mt-1">
                            <Building className="h-4 w-4 text-zinc-400" />
                            <p>{album.strLabel}</p>
                          </div>
                        </div>

                        <Separator className="bg-zinc-800" />

                        <div>
                          <p className="text-sm text-zinc-500">Format</p>
                          <div className="text-white flex items-center gap-2 mt-1">
                            <Disc className="h-4 w-4 text-zinc-400" />
                            <p>{album.strReleaseFormat}</p>
                          </div>
                        </div>

                        <Separator className="bg-zinc-800" />

                        <div>
                          <p className="text-sm text-zinc-500">Rating</p>
                          <div className="text-white flex items-center gap-2 mt-1">
                            <Star
                              className="h-4 w-4 text-yellow-400"
                              fill="currentColor"
                            />
                            <p>
                              {album.intScore}/10 ({album.intScoreVotes} votes)
                            </p>
                          </div>
                        </div>

                        {album.strBBCReviewID && (
                          <>
                            <Separator className="bg-zinc-800" />
                            <div>
                              <p className="text-sm text-zinc-500">Reviews</p>
                              <div className="flex items-center gap-2 mt-1">
                                <Award className="h-4 w-4 text-zinc-400" />
                                <a
                                  href={`https://www.bbc.co.uk/music/reviews/${album.strBBCReviewID}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-400 hover:underline"
                                >
                                  BBC Review
                                </a>
                              </div>
                            </div>
                          </>
                        )}

                        {album.strGeniusID && (
                          <>
                            <Separator className="bg-zinc-800" />
                            <div>
                              <p className="text-sm text-zinc-500">
                                Lyrics & Info
                              </p>
                              <div className="flex items-center gap-2 mt-1">
                                <Music className="h-4 w-4 text-zinc-400" />
                                <a
                                  href={`https://genius.com/albums/The-weeknd/${album.strGeniusID}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-400 hover:underline"
                                >
                                  Genius
                                </a>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <Songs songs={songs} />
          </Tabs>
        </div>
      </ScrollArea>
    </div>
  );
}
