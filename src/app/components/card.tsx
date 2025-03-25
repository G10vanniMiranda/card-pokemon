'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiRoundStar } from "react-icons/gi";

interface CardPokemonProps {
    codigo?: string;
    name: string;
    img: string;
    imgAlt: string;
    types: string;
    favorite?: boolean;
}
export default function Card(props: CardPokemonProps) {

    const [isFavorite, setFavorite] = useState("");
    const handleFavorite = () => {
        // setFavorite("text-yellow-500");
        setFavorite((prev) => (prev === "text-yellow-500" ? "" : "text-yellow-500"));
    }
    return (
        <div className="flex justify-center">

            <div className="w-96 h-96 bg-white ">

                <div className="flex justify-between items-center">
                    <GiRoundStar size={40} className={isFavorite} />
                    <div className="bg-slate-400 w-20 h-10 flex items-center justify-center rounded-bl-2xl opacity">
                        <h1 className="text-black"> {props.codigo} </h1>
                    </div>
                </div>

                <Link href="/details">
                    <div className="flex justify-center items-center ">
                        <Image
                            src={props.img}
                            alt={props.imgAlt}
                            width={200}
                            height={200}
                            className="hover:scale-150 duration-300 cursor-pointer"
                        />
                    </div>
                </Link>

                <div className="h-14 flex justify-center items-center gap-4">
                    <div className="bg-green-600 w-20 flex justify-center rounded-lg p-1">{props.types}</div>
                    <div className="bg-fuchsia-700 w-20 flex justify-center rounded-lg p-1">{props.types}</div>
                </div>

                <div className="bg-green-600 h-22 flex justify-center items-center" onClick={handleFavorite}>
                    <h1 className="font-semibold text-4xl border-b-2 cursor-pointer">{props.name}</h1>
                </div>
            </div>
        </div>
    );
}