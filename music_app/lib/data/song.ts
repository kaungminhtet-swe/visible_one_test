export async function fetchSongs(albumId: string) {
  const resp = await fetch(`${process.env.SONG_URL}?m=${albumId}`);
  const data = await resp.json();

  return data.track;
}
