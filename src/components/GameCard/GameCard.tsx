import { IGame } from "@/utils/types/games";
import Image from "next/image";
import Link from "next/link";
import { BiRightArrowCircle } from "react-icons/bi";

interface IGameProps {
    data: IGame;
}

export function GameCard({ data }: IGameProps) {
    return (
        <Link href='/games/1'>
            <section className="w-full bg-slate-200 rounded-lg p-4 mb-5">
                <div className="w-full h-56 relative hover:scale-105 transition-all duration-300">
                    <Image
                        src={data.image_url}
                        alt={data.title}
                        fill={true}
                        quality={100}
                        className="object-cover rounded-lg"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
                    />
                </div>
                <div className="flex items-center justify-between mt-2">
                    <p className="text-sm text-black font-bold text-ellipsis truncate whitespace-nowrap overflow-hidden">{data.title}</p>
                    <BiRightArrowCircle size={24} color="#000" />
                </div>
            </section>
        </Link>
    )
}