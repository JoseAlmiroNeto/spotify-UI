import { ChevronLeft, ChevronRight } from "lucide-react";
import { Playlist } from "./Playlist";
import { Album } from "./Album";
import { ALBUM_DATA_BASE, PLAYLIST_DATA_BASE } from "./database";

export function Main() {
  return (
    <main className="flex-1 p-6">
      <div className="flex items-center gap-3">
        <button className="rounded-full bg-black/40 p-1">
          <ChevronLeft />
        </button>
        <button className="rounded-full bg-black/40 p-1">
          <ChevronRight />
        </button>
      </div>

      <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {PLAYLIST_DATA_BASE.map((data, index) => {
          return <Playlist name={data.name} img={data.img} index={index} />;
        })}
      </div>

      <h2 className="font-semibold text-2xl mt-10">Made for José Almiro</h2>

      <div className="grid grid-cols-8 gap-4 mt-4">
        {ALBUM_DATA_BASE.map((data, index) => {
          return (
            <Album
              name={data.name}
              img={data.img}
              description={data.description}
              index={index}
            />
          );
        })}
      </div>
    </main>
  );
}
