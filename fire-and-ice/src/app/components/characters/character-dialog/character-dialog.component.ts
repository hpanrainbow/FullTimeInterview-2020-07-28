import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Character } from 'src/app/interfaces/character';
import { isEmpty } from 'lodash';
import { RequestrService } from 'src/app/services/requestr.service';

export interface CharacterInfo {
  title: string,
  value: string
}

@Component({
  selector: 'app-character-dialog',
  templateUrl: './character-dialog.component.html',
  styleUrls: ['./character-dialog.component.scss']
})
export class CharacterDialogComponent implements OnInit {
  characterInfos: CharacterInfo[] =[];
  books: string[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public character: Character,
              private requestrService: RequestrService) { }

  ngOnInit() {
    
    this.characterInfos.push({title: "Name", value: this.character.name});
    this.characterInfos.push({title: "Culture", value: this.character.culture});
    this.characterInfos.push({title: "Birth", value: this.character.born});
    this.characterInfos.push({title: "Titles", value: (this.character.titles || []).join(", ")});
    this.characterInfos.push({title: "Aliases", value: (this.character.aliases || []).join(", ")});
    
    this.getBooks(this.character.books);
    this.characterInfos.push({
      title: 'Books Appeared',
      value: this.books.join(", ")
    });

    this.characterInfos = this.characterInfos.filter(c => !isEmpty(c.value));
  };

  getBooks(bookUrls: string[]) {
    let _this = this;
    bookUrls.forEach(bookUrl => {
      this.requestrService.get(bookUrl).then(function(response) {
        _this.books.push(response.body.name);
      })
    });
  }
}
