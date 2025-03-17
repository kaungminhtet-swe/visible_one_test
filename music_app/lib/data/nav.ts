import type { LucideProps } from "lucide-react";
import { Home, ListMusic, MusicIcon, User } from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

export interface INavData {
  name: string;
  href: string;
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

export async function getNavData(): Promise<INavData[]> {
  return [
    {
      name: "Home",
      href: "/",
      Icon: Home,
    },
    {
      name: "Artits",
      href: "/artists",
      Icon: User,
    },
    {
      name: "Albums",
      href: "/albums",
      Icon: ListMusic,
    },
    {
      name: "Songs",
      href: "/songs",
      Icon: MusicIcon,
    },
  ];
}
