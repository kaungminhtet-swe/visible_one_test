import { Artist } from "@/types/artist";

export async function fetchArtist(artistId: string): Promise<Artist> {
  const resp = await fetch(`${process.env.ARTIST_URL}?i=${artistId}`);
  const artists = await resp.json();
  return artists.artists[0];
}
