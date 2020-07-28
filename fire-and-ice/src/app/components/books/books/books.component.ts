import { Component, OnInit } from '@angular/core';
import { RequestrService } from 'src/app/services/requestr.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor(requestr: RequestrService) { }

  ngOnInit() {
  }

}
