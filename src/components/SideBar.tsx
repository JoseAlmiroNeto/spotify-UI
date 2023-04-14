import { HomeIcon, Library, Search } from "lucide-react";

export function SideBar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <img src="/spotify-logo.svg" alt="spotify-logo" className="w-40 h-12" />

      <nav className="space-y-5 mt-8">
        <a
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
          href=""
        >
          <HomeIcon />
          Home
        </a>
        <a
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
          href=""
        >
          <Search />
          Search
        </a>
        <a
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
          href=""
        >
          <Library />
          Your Library
        </a>
      </nav>

      <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Hot Hits Brasil
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Today`s Top Hits
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Wallows Radio
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Top Brasil
        </a>
      </nav>
    </aside>
  );
}
