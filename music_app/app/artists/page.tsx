import { Button } from "@/components/ui/button";
import { User2 } from "lucide-react";
import Link from "next/link";

export default async function ArtistPage() {
  const artists = [
    {
      idArtist: "112024",
      strArtist: "The Weeknd",
      strLabel: "Republic Records",
    },
  ];

  return (
    <main className="flex-1 overflow-auto">
      {artists.map((artist) => (
        <Button
          key={artist.idArtist}
          className="w-full flex justify-start"
          variant={"outline"}
          asChild
        >
          <Link href={`/artists/${artist.idArtist}`}>
            <User2 />
            <p>Name: {artist.strArtist} </p>
            <p className="ml-20">Label: {artist.strLabel} </p>
          </Link>
        </Button>
      ))}
    </main>
  );
}
