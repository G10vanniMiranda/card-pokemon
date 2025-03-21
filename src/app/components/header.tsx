
interface HeaderProps {
    titulo: string
    subTitulo: string
}

export default function Header(props: HeaderProps) {
    return (
        <header className="flex gap-2 justify-center py-2 text-3xl">
            <h1 className="font-bold text-green-700"> {props.titulo}</h1>
            <h1 className="font-bold text-amber-500">
                Pokémon
                <span className="font-bold text-blue-700"> {props.subTitulo} </span>
            </h1>
        </header>
    );
}