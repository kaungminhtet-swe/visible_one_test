import { Card, CardContent } from "../ui/card";

export default function RecommendedMusics() {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Recommended For You</h2>
      <div className="grid grid-cols-3 gap-4">
        {[
          { title: "Best of Blues", artist: "Jazzmaster Bill" },
          { title: "Out of This World", artist: "Lily Wonders" },
          { title: "Acoustics", artist: "The Spacemen" },
        ].map((album) => (
          <Card
            key={`index ${album.title}`}
            className="p-0 border-0 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 transform cursor-pointer"
          >
            <CardContent className="p-0">
              <div className="w-full aspect-square bg-gray-200" />
              <div className="p-3">
                <h3 className="font-medium">{album.title}</h3>
                <p className="text-sm text-gray-500">{album.artist}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
