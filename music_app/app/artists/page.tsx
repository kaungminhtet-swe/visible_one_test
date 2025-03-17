import { Button } from "@/components/ui/button";
import { EyeIcon, User2 } from "lucide-react";
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
    <main className="flex-1 h-screen overflow-auto p-2">
      <h1 className="text-3xl font-bold mb-6">Artists</h1>
      <Button className="w-full flex justify-between mb-1">
        <p>#</p>
        <p>Artist</p>
        <p>Label</p>
        <div />
      </Button>
      {artists.map((artist) => (
        <Button
          key={artist.idArtist}
          className="w-full flex justify-between"
          variant={"outline"}
          asChild
        >
          <Link href={`/artists/${artist.idArtist}`}>
            <User2 />
            <p>{artist.strArtist} </p>
            <p>{artist.strLabel} </p>
            <EyeIcon />
          </Link>
        </Button>
      ))}
    </main>
  );
}
