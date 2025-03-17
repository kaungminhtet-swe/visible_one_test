import AppHeader from "@/components/home/app-header";
import MusicCard from "@/components/home/music-card";
import PlayerBar from "@/components/home/player-bar";
import RecentPlayedMusic from "@/components/home/recent-played-musics";
import RecommendedMusics from "@/components/home/recommended-musics";
import Sidebar from "@/components/home/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function MusicApp() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <main className="flex flex-1 overflow-hidden">
        <Sidebar />

        <ScrollArea className="flex-1 ml-2">
          <div className="p-4">
            <AppHeader />

            <div className="h-max grid grid-cols-2 gap-8 mb-8">
              <MusicCard
                title="GET LOST"
                description="in your music."
                color="pink"
              />
              <MusicCard title="MELLOW" description="beats." color="blue" />
            </div>

            <RecentPlayedMusic />

            <RecommendedMusics />
          </div>
        </ScrollArea>
      </main>
      <PlayerBar />
    </div>
  );
}
