import { fetchArtist } from "@/lib/data/artist";
import ArtistProfile from "./artist-profile";

export default async function ArtistPage({
  params,
}: {
  params: { artist_id: string };
}) {
  const artistId = (await params).artist_id;
  const artist = await fetchArtist(artistId);

  return <ArtistProfile artist={artist} />;
}
