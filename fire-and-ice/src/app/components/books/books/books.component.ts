import { Component, OnInit } from '@angular/core';
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

  constructor(private requestrService: RequestrService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    let _this = this;
    this.requestrService.get(BASE_URL).then(function(response) {
      _this.books = response.body;
    }).catch(function(error) {
      console.log("ERROR WHEN GETTING BOOKS!", error);
    });
  }
}
