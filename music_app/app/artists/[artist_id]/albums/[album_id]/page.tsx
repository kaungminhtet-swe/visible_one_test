import { fetchAlbumById } from "@/lib/data/album";
import { fetchSongs } from "@/lib/data/song";
import AlbumDetail from "./album-detail";

export default async function AlbumPage({
  params,
}: {
  params: { artist_id: string; album_id: string };
}) {
  const album = await fetchAlbumById((await params).album_id);
  const songs = await fetchSongs((await params).album_id);

  return (
    <main className="h-screen">
      <AlbumDetail album={album} songs={songs} />
    </main>
  );
}
