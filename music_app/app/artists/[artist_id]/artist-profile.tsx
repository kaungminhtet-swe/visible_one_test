// src/app/artist/[id]/page.jsx
"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, ExternalLink, MapPin, Music } from "lucide-react";
import { Artist } from "../types";

export default function ArtistProfile({ artist }: { artist: Artist }) {
  return (
    <div className="h-screen flex-1 overflow-auto bg-black text-white">
      <ScrollArea className="h-full">
        <div
          className="relative h-96 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.9)), url(${artist.strArtistFanart})`,
          }}
        >
          <div className="absolute bottom-0 left-0 w-full p-8">
            <div className="flex items-end gap-6">
              <div className="relative h-40 w-40 rounded-lg shadow-lg">
                <img
                  src={artist.strArtistThumb}
                  alt={artist.strArtist}
                  className="object-cover h-full w-full"
                />
              </div>
              <div>
                <h1 className="text-5xl font-bold tracking-tighter mb-2">
                  {artist.strArtist}
                </h1>
                <div className="flex items-center gap-4 mb-2">
                  <Badge
                    variant="outline"
                    className="text-xs px-2 py-0 text-white"
                  >
                    {artist.strGenre}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-xs px-2 py-0 text-white"
                  >
                    {artist.strStyle}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-xs px-2 py-0 text-white"
                  >
                    {artist.strMood}
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <MapPin className="h-4 w-4" />
                  <span>{artist.strCountry}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <Tabs defaultValue="overview" className="w-full h-full">
            <TabsList className="mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
              <TabsTrigger value="links">Links</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Bio */}
                <div className="md:col-span-2">
                  <Card className="bg-zinc-900 border-zinc-800">
                    <CardContent className="pt-6">
                      <h2 className="text-white text-2xl font-semibold mb-4">
                        Biography
                      </h2>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {artist.strBiographyEN}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Info */}
                <div>
                  <Card className="bg-zinc-900 border-zinc-800">
                    <CardContent className="pt-6">
                      <h2 className="text-white text-2xl font-semibold mb-4">
                        Info
                      </h2>
                      <div className="text-primary-foreground space-y-4">
                        <div>
                          <p className="text-sm text-gray-500">Born</p>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-gray-400" />
                            <p>{artist.intBornYear}</p>
                          </div>
                        </div>

                        <Separator className="bg-zinc-800" />

                        <div>
                          <p className="text-sm text-gray-500">
                            Career Started
                          </p>
                          <div className="flex items-center gap-2">
                            <Music className="h-4 w-4 text-gray-400" />
                            <p>{artist.intFormedYear}</p>
                          </div>
                        </div>

                        <Separator className="bg-zinc-800" />

                        <div>
                          <p className="text-sm text-gray-500">Label</p>
                          <p>{artist.strLabel}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="gallery" className="space-y-6">
              <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  artist.strArtistFanart,
                  artist.strArtistFanart2,
                  artist.strArtistFanart3,
                  artist.strArtistFanart4,
                  artist.strArtistWideThumb,
                  artist.strArtistBanner,
                ].map((image, index) => (
                  <div key={index} className="aspect-video rounded-lg">
                    <img
                      src={image}
                      alt={`${artist.strArtist} - Image ${index + 1}`}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="links">
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="pt-6">
                  <h2 className="text-white text-2xl font-semibold mb-4">
                    Official Links
                  </h2>
                  <div className="space-y-4">
                    <a
                      href={`https://${artist.strWebsite}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>{artist.strWebsite}</span>
                    </a>

                    <Separator className="bg-zinc-800" />

                    <a
                      href={`https://${artist.strFacebook}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>{artist.strFacebook}</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </ScrollArea>
    </div>
  );
}
