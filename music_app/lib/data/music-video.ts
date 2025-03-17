export async function fetchMusicVideos(artistId: string) {
  const reponse = await fetch(`${process.env.MV_URL}?i=${artistId}`);
  const data = await reponse.json();
  return data.mvids;
}
