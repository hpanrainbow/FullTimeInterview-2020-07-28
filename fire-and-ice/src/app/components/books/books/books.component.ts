import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Book } from "src/app/interfaces/book";
import { RequestrService } from 'src/app/services/requestr.service';

const BASE_URL = 'https://www.anapioficeandfire.com/api/books/';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})

export class BooksComponent implements OnInit {
  books: Book[];
  selectedBook;

  constructor(private requestrService: RequestrService) { }

  ngOnInit() {
    this.getBooks();
  }

  selectBook(book) {
    this.selectedBook = book;
    console.log('SELECTED BOOK', book);
  }

  getBooks() {
    let self = this;
    this.requestrService.get(BASE_URL).then(function(response) {
      self.books = response.body;
      console.log('test ', response.body);
    }).catch(function(error) {
      console.log("ERROR WHEN GETTING BOOKS!", error);
    });
  }

  getCharacters(url) {
    let self = this;
    this.requestrService.get(url).then(function(response) {
      self.books = response.body;
      console.log('test ', response.body);
    }).catch(function(error) {
      console.log("ERROR WHEN GETTING BOOKS!", error);
    });
  }

}
