import {Component, OnInit, ViewChild} from '@angular/core';
import {RequestrService} from "../../services/requestr.service";
import {Character} from "../../interfaces/character";
import {MatTableDataSource} from "@angular/material/table";

const BASE_URL = 'https://www.anapioficeandfire.com/api/characters/';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  totalNumber: number = 100;
  pageSize: number = 10;
  pageIndex: number = 0;
  pageSizeOptions: number[] = [5, 10, 20];
  characters: MatTableDataSource<Character>;
  displayedColumns: string[] = ['name', 'gender', 'born', 'aliases'];

  constructor(private requestrService: RequestrService) {
  }

  ngOnInit() {
    this.getCharacters()
  };

  onPaginateChange(event) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getCharacters();
  }

  getCharacters() {
    let _this = this;
    this.requestrService.get(this.getRequestURL()).then(function (response) {
      _this.characters = new MatTableDataSource<Character>(response.body);
    });
  }

  private getRequestURL(): string {
    return BASE_URL + `?page=${this.pageIndex}&pageSize=${this.pageSize}`;
  }
}
