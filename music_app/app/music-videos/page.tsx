import { fetchMusicVideos } from "@/lib/data/music-video";
import MusicVideo from "./music-video-list";

export default async function MusicVideoPage() {
  const musicVideos = await fetchMusicVideos("112024");

  return (
    <main className="h-screen container mx-auto py-4">
      <h1 className="text-3xl font-bold mb-6">The Weeknd - Trilogy</h1>
      <MusicVideo tracks={musicVideos} />
    </main>
  );
}

// import { Button } from "@/components/ui/button";

// export default function MusicVideoPage() {
//   return (
//     <main className="h-screen overflow-auto p-2">
//       <Button>Music Videos</Button>
//     </main>
//   );
// }
