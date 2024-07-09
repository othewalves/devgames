import { Container } from "@/components/container/Container";
import { GameCard } from "@/components/GameCard/GameCard";
import { Input } from "@/components/input/Input";
import { IGame } from "@/utils/types/games";

async function getGame(title: string) {
    try {
        const decodeTitle = decodeURI(title)
        const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&title=${decodeTitle}`);
        return res.json();
    } catch (error) {
        return null;
    }
}
export default async function Search(
    { params: { title } }: { params: { title: string } }
) {
    const game: IGame[] = await getGame(title);
    return (
        <main className="w-full text-black">
            <Container>
                <Input />
                <h1 className="text-xl font-bold mt-4 mb-3">Veja o que encontramos!</h1>
                {!game && (
                    <p>Não encontramos esse jogo...</p>
                )}
                <section className="grid gap-7 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4">
                    {game &&
                        game.map((item) => (
                            <GameCard
                                key={item.id}
                                data={item}
                            />
                        ))
                    }
                </section>
            </Container>
        </main>
    )
}