import Link from "next/link";
import Image from "next/image";
import LogoImg from '@/assets/logo.svg';
import { LiaGamepadSolid} from 'react-icons/lia';
export function Header() {
    return (
        <header className="w-full h-28 bg-slate-100 text-black px-2">
            <div className="max-w-screen-xl h-28 mx-auto flex items-center justify-center sm:justify-between">
                <nav className="flex items-center gap-4">
                    <Link href='/'>
                        <Image
                            src={LogoImg}
                            alt="devGames"
                            quality={100}
                            priority
                            className="w-full"
                        />
                    </Link>
                    <Link href='/games'>
                    Games
                    </Link>
                    <Link href='/profile'>
                    Perfil
                    </Link>
                </nav>
                <div className="hidden sm:flex justify-center items-center">
                    <Link href='/profile'>
                    <LiaGamepadSolid
                        size={32}
                        color="#475569"
                    />
                    </Link>
                </div>
            </div>
        </header>
    )
}