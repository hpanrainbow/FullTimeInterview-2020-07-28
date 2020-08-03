import { BooksComponent } from '../components/books/books/books.component';
import { Book } from "./book";

export interface Character {
    name: string,
    culture: string,
    born: string,
    gender: string,
    titles: string[],
    aliases: string[],
    books: string[]
}
