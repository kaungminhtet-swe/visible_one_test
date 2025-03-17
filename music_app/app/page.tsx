import AppHeader from "@/components/home/app-header";
import MusicCard from "@/components/home/music-card";
import PlayerBar from "@/components/home/player-bar";
import RecentPlayedMusic from "@/components/home/recent-played-musics";
import RecommendedMusics from "@/components/home/recommended-musics";
import Sidebar from "@/components/home/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function MusicApp() {
  return (
    <div className="w-screen h-screen flex flex-col bg-pink-500">
      <main className="bg-white flex flex-1 overflow-hidden rounded-b-4xl border-0 shadow-xl">
        <Sidebar />
        <div className="h-screen w-full flex flex-col gap-1 p-3 overflow-auto">
          <AppHeader />
          <div className="flex-1 overflow-auto">
            <ScrollArea className="h-full">
              <div className="m-3 grid grid-cols-2 gap-8 mb-8">
                <MusicCard
                  title="GET LOST"
                  description="in your music."
                  className="from-pink-400 to-pink-600 hover:shadow-pink-400"
                />
                <MusicCard
                  title="MELLOW"
                  description="beats."
                  className="from-blue-400 to-blue-600 hover:shadow-blue-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-8 mb-8">
                <RecentPlayedMusic />
                <RecommendedMusics />
              </div>
            </ScrollArea>
          </div>
        </div>
      </main>
      <PlayerBar />
    </div>
  );
}
