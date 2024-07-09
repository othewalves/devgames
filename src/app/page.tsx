import { Container } from "@/components/container/Container";
import { GameCard } from "@/components/GameCard/GameCard";
import { Input } from "@/components/input/Input";
import { IGame } from "@/utils/types/games";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightSquare } from "react-icons/bs";


async function getGameDay() {
  try {

    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game_day`, { next: { revalidate: 320 } })
    return res.json()
  } catch (error) {
    throw new Error('Houve um imprevisto, tente mais tarde.')
  }
}

async function getGameRecommend() {
  try {

    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=games`, { next: { revalidate: 320 } })
    return res.json()
  } catch (error) {
    throw new Error('Houve um imprevisto, tente mais tarde.')
  }
}

export default async function Home() {

  const gameDay: IGame = await getGameDay();
  const gamesRecommend: IGame[] = await getGameRecommend();

  return (
    <main className="w-full">
      <Container>
        <section>
          <h1 className="text-center font-bold text-xl mt-5 mb-8">Separamos um jogo exclusivo para você</h1>
          <Link href={`game/${gameDay.id}`}>
            <section className="w-full bg-black rounded-lg">
              <div className="w-full max-h-96 h-96 relative">
                <div className="absolute z-20 bottom-0 p-3 flex items-center justify-center gap-2">
                  <p className="font-bold text-white text-xl">{gameDay.title}</p>
                  <BsArrowRightSquare color="#FFF" size={32} />
                </div>
                <Image
                  src={gameDay.image_url}
                  alt={`Banner do game: ${gameDay.title}`}
                  priority={true}
                  quality={100}
                  fill={true}
                  className="max-h-96 object-cover rounded-lg opacity-50 hover:opacity-90 transition-all duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
                />
              </div>
            </section>
          </Link>
        </section>
        <Input />
        <h2 className="text-lg font-bold mt-8 mb-5">
          Jogos para conhecer
        </h2>
        <section className="grid gap-7 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4">
          {
            gamesRecommend.map((item) => (
              <GameCard
                key={item.id}
                data={item}
              />
            ))
          }
        </section>
      </Container>
    </main>
  );
}
