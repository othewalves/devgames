'use client';
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { FiSearch } from "react-icons/fi";

export function Input() {

    const [input, setInput] = useState('');
    const router = useRouter();

    async function handleSearch(event: FormEvent) {
        event.preventDefault();

        if(input === '') return;

        router.push(`/games/search/${input}`)
    }

    return (
        <form
            onSubmit={handleSearch}
            className="w-full bg-slate-200 p-2 gap-4 rounded-lg flex items-center justify-between mt-2"
        >
            <input
                type="text"
                placeholder="Buscando algum jogo hoje?..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-11/12 bg-slate-200 outline-none"
            />
            <button type="submit">
                <FiSearch size={24} color="#ea580c" />
            </button>
        </form>
    )
}