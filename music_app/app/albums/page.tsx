import { Button } from "@/components/ui/button";
import { Eye, User2 } from "lucide-react";
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
    <main className="flex-1 h-screen overflow-auto p-2">
      <h1 className="text-3xl font-bold mb-6">Albums</h1>
      <Button className="w-full flex justify-between mb-1">
        <p>#</p>
        <p>Artist</p>
        <p>Label</p>
        <div />
      </Button>
      {artists.map((artist) => (
        <Button
          key={artist.idArtist}
          className="flex justify-between mb-1"
          variant={"outline"}
          asChild
        >
          <Link href={`/artists/${artist.idArtist}/albums`}>
            <User2 />
            <p>{artist.strArtist}</p>
            <p>{artist.strLabel}</p>
            <Eye />
          </Link>
        </Button>
      ))}
    </main>
  );
}
