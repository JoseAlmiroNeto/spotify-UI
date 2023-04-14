import Image from "next/image";

interface IAlbum {
  name: string;
  img: string;
  description: string;
  index: number;
}

export function Album({ name, img, description }: IAlbum) {
  return (
    <a
      href=""
      className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
    >
      <Image
        src={img}
        className="w-full rounded"
        width={120}
        height={120}
        alt="capa de album"
      />
      <strong className="font-semibold truncate">{name}</strong>
      <span className="text-sm text-zinc-400">{description}</span>
    </a>
  );
}
