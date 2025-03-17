import type { INavData } from "@/lib/data/nav";
import Link from "next/link";
import { Button } from "../ui/button";

export default function NavButton({ name, href, Icon }: INavData) {
  return (
    <Button
      variant="ghost"
      className="w-full flex justify-start hover:bg-gray-200"
      asChild
    >
      <Link href={href}>
        <Icon />
        {name}
      </Link>
    </Button>
  );
}
