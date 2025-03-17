import { getNavData } from "@/lib/data/nav";
import NavButton from "./nav-button";

export default async function AppNav() {
  const data = await getNavData();

  return (
    <nav className="flex flex-col">
      {data.map((nav) => (
        <NavButton key={nav.name} {...nav} />
      ))}
    </nav>
  );
}
