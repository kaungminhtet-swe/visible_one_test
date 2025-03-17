"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Album } from "@/types/album";
import { Calendar, Disc, Music } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AlbumCard({ album }: { album: Album }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const paragraphs = album.strDescriptionEN
    ? album.strDescriptionEN.split("\n\n")
    : [];

  return (
    <>
      <Card
        onClick={() =>
          router.push(`/artists/${album.idArtist}/albums/${album.idAlbum}`)
        }
        className="h-full overflow-hidden border-zinc-800 bg-zinc-900 hover:bg-zinc-800 transition-colors"
      >
        <CardHeader className="p-0">
          <div className="relative aspect-square overflow-hidden">
            <img
              src={album.strAlbumThumb || album.strAlbum3DThumb || undefined}
              alt={album.strAlbum}
              className="h-full w-full object-cover transition-transform hover:scale-105 duration-300"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-1 text-white">
            {album.strAlbum}
          </h3>
          <p className="text-sm text-zinc-400">{album.strArtist}</p>
          <div className="flex items-center gap-2 mt-2">
            <Calendar className="h-4 w-4 text-zinc-500" />
            <span className="text-sm text-zinc-400">
              {album.intYearReleased}
            </span>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between">
          <div className="flex gap-2">
            {album.strGenre && (
              <Badge variant="outline" className="text-white bg-transparent">
                {album.strGenre}
              </Badge>
            )}
            {album.strMood && (
              <Badge variant="outline" className="text-white bg-transparent">
                {album.strMood}
              </Badge>
            )}
          </div>
        </CardFooter>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-zinc-900 text-white border-zinc-800 max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              {album.strAlbum}
            </DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="md:col-span-1">
              <div className="aspect-square overflow-hidden rounded-md">
                {album.strAlbum3DCase ? (
                  <img
                    src={album.strAlbum3DCase}
                    alt={`${album.strAlbum} 3D case`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <img
                    src={
                      album.strAlbumThumb || album.strAlbum3DThumb || undefined
                    }
                    alt={album.strAlbum}
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-2">
                  <Music className="h-4 w-4 text-zinc-400" />
                  <span className="text-zinc-300">{album.strArtist}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-zinc-400" />
                  <span className="text-zinc-300">{album.intYearReleased}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Disc className="h-4 w-4 text-zinc-400" />
                  <span className="text-zinc-300">
                    {album.strReleaseFormat}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mt-3 text-white">
                  {album.strGenre && (
                    <Badge className="bg-transparent">{album.strGenre}</Badge>
                  )}
                  {album.strMood && (
                    <Badge className="bg-transparent">{album.strMood}</Badge>
                  )}
                  {album.strSpeed && (
                    <Badge className="bg-transparent">{album.strSpeed}</Badge>
                  )}
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold mb-3">About the Album</h3>
              <div className="text-zinc-300 space-y-4">
                {paragraphs.length > 0 ? (
                  paragraphs.map((paragraph, index) => (
                    <p key={index} className="leading-relaxed text-sm">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="text-zinc-400 italic">
                    No description available.
                  </p>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
