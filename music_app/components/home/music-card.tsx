import { Play } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

interface MusicCardProps {
  title: string;
  description: string;
  color: string;
}

export default function MusicCard({
  title,
  description,
  color,
}: MusicCardProps) {
  return (
    <Card
      className={`h-64 from-${color}-400 to-${color}-600 p-0 bg-gradient-to-br  overflow-hidden border-0 rounded-3xl shadow-md group transition-all duration-300 hover:shadow-lg hover:shadow-${color}-400 hover:scale-[1.03] transform`}
    >
      <CardContent className="p-0 flex flex-col justify-between h-full">
        <div className="relative flex flex-col p-6">
          <h2 className="text-5xl font-bold text-white">{title}</h2>
          <p className="text-2xl text-pink-200">{description}</p>
        </div>
        <div className="absolute h-full w-full flex flex-col-reverse">
          <Button
            size="icon"
            variant="secondary"
            className="m-2 rounded-full bg-white/20 hover:bg-white/30 text-white"
          >
            <Play className="w-6 h-6" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
