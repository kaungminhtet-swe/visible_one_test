export async function fetchAlbumsByArtist(artistId: string) {
  const response = await fetch(`${process.env.ALBUM_URL}?i=${artistId}`);
  const data = await response.json();
  return data.album;
}

export async function fetchAlbumById(albumId: string) {
  const response = await fetch(`${process.env.ALBUM_URL}?m=${albumId}`);
  const data = await response.json();
  return data.album[0];
}
