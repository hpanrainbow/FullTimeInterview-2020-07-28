import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { Character } from 'src/app/interfaces/character';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { isEmpty } from 'lodash';
import { RequestrService } from 'src/app/services/requestr.service';
// import { CharacterDialogComponent } from '../../characters/character-dialog/character-dialog.component';
import { CharacterDialogComponent } from 'src/app/components/characters/character-dialog/character-dialog.component';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @Input() book: Book;
  characters: Character[] = [];
  releasedYear: string="";

  constructor(private requestrService: RequestrService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.releasedYear = new Date(this.book.released).getFullYear().toString();
    let _this = this;

    if (!isEmpty(this.book.povCharacters)) {
      this.book.povCharacters.forEach(characterUrl => {
        this.requestrService.get(characterUrl).then(function (response) {
          _this.characters.push(response.body);  
        })
      });
    }
  }

  openCharacterDialog(character : Character) {
    this.dialog.open(CharacterDialogComponent, {
      data: character
    });
  }

}
