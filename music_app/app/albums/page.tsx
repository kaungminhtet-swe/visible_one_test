import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { User2 } from "lucide-react";
import Link from "next/link";

export default async function AlbumPage() {
  const artists = [
    {
      idArtist: "112024",
      strArtist: "The Weeknd",
      strLabel: "Republic Records",
    },
  ];

  return (
    <main className="flex-1 overflow-auto pt-2">
      <h1 className="text-3xl font-bold mb-6">Albums</h1>
      {artists.map((artist) => (
        <TooltipProvider key={artist.idArtist}>
          <Tooltip>
            <TooltipTrigger>
              <Button
                key={artist.idArtist}
                className="w-full flex justify-start"
                variant={"outline"}
                asChild
              >
                <Link href={`/artists/${artist.idArtist}/albums`}>
                  <User2 />
                  <p>Name: {artist.strArtist} </p>
                  <p className="ml-20">Label: {artist.strLabel} </p>
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Click to view all albums by {artist.strArtist}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </main>
  );
}
