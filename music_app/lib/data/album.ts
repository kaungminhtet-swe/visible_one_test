export async function fetchAlbumsByArtist(artistId: string) {
  const response = await fetch(`${process.env.ALBUM_URL}?i=${artistId}`);
  const data = await response.json();
  return data.album;
}
