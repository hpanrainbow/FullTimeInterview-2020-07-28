import { Character } from "./character";

export interface Book {
    name: string,
    authors: string,
    released: string,
    isbn: number,
    povCharacters: string[]
}
