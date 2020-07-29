import { Injectable } from '@angular/core';
import { RequestrService } from './requestr.service';

const BASE_URL = 'https://www.anapioficeandfire.com/api/books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  // books$;
  constructor(private requestrService : RequestrService) { }

  getUrl() {
    return `${BASE_URL}`;
  }

  all() {
    this.requestrService.get(BASE_URL).then(function(data) {
      return data;
    }).catch(function(error) {
      console.log("ERROR WHEN GETTING BOOKS!");
    });
  }
}
