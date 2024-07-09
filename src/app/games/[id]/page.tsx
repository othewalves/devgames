import { Container } from "@/components/container/Container";
import { GameCard } from "@/components/GameCard/GameCard";
import { IGame } from "@/utils/types/games";
import Image from "next/image";
import { redirect } from "next/navigation";

async function getData(id: string) {
    try {
        const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`);
        return res.json();
    } catch (error) {
        throw new Error('Houve um imprevisto, tente mais tarde.')
    }
}

async function getGameRecommended() {
    try {

        const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game_day`, { cache: 'no-cache' })
        return res.json()
    } catch (error) {
        throw new Error('Houve um imprevisto, tente mais tarde.')
    }
}


export default async function Game(
    { params: { id } }: { params: { id: string } }
) {
    const game: IGame = await getData(id);
    const gameRecommended: IGame = await getGameRecommended();



    if (!game) redirect('/')

    return (
        <main className="w-full text-black">
            <div className="w-full h-80 sm:h-96 bg-black relative">
                <Image
                    src={game.image_url}
                    alt={game.title}
                    fill={true}
                    quality={100}
                    priority={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
                    className="w-full h-80 sm:h-96 bg-black object-cover opacity-75"
                />
            </div>
            <Container>
                <h1 className="text-black font-bold text-xl my-4">{game.title}</h1>
                <p className="">{game.description}</p>
                <p className="text-black font-bold text-sm my-4">Plataformas disponíveis:</p>
                <div className="flex gap-5 mb-4 px-2">
                    {game.platforms && game.platforms.map((item) => (
                        <span className="text-black bg-slate-200 p-1 rounded sm:flex-grow-0 flex-grow" key={item}>{item}</span>
                    ))}
                </div>
                <p className="text-black font-bold text-sm my-4">Categorias:</p>
                <div className="flex gap-5 mb-4 px-2">
                    {game.platforms && game.categories.map((item) => (
                        <span className="text-black bg-slate-200 p-1 rounded sm:flex-grow-0 flex-grow" key={item}>{item}</span>
                    ))}

                </div>
                <div className="flex items-center justify-start gap-2">
                    <p className="text-black font-bold text-sm my-4">Lançamento:</p><span>{game.release}</span>
                </div>
                <p className="text-black font-bold text-sm my-4">Jogo recomendado:</p>
                {
                    gameRecommended &&
                    <GameCard
                        data={gameRecommended}
                        key={gameRecommended.id}
                    />
                }
            </Container>
        </main>
    )
}