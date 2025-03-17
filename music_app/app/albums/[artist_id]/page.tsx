import { fetchAlbumsByArtist } from "@/lib/data/album";
import { Album } from "@/types/album";
import AlbumCard from "./album-card";

export default async function AlbumPage({
  params,
}: {
  params: { artist_id: string };
}) {
  const artistId = (await params).artist_id;
  const albums: Album[] = await fetchAlbumsByArtist(artistId);

  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <h1 className="text-3xl font-bold mb-8">Albums</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {albums.map((album) => (
          <AlbumCard key={album.idAlbum} album={album} />
        ))}
      </div>
    </div>
  );
}
