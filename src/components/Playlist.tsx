import { Play } from "lucide-react";
import Image from "next/image";

interface Playlists {
  img: string;
  name: string;
  index: number;
}

export function Playlist({ img, name, index }: Playlists) {
  return (
    <a
      key={index}
      href=""
      className="bg-white/5 group rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
    >
      <Image src={img} width={104} height={104} alt="capa de album" />
      <strong>{name}</strong>
      <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
        <Play />
      </button>
    </a>
  );
}
