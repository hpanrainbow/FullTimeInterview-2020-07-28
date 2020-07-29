import { BooksComponent } from '../components/books/books/books.component';
import { Book } from "./book";

export interface Character {
    name: string,
    culture: string,
    birth: Date,
    titles: string[],
    booksAppear: string[]
}
