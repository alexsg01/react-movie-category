import { HeaderProps } from "../interfaces/HeaderProps";


export function Header({ title }: HeaderProps) {
    return (
        <header>
            <span className="category">Categoria:<span> {title}</span></span>
        </header>
    )
}