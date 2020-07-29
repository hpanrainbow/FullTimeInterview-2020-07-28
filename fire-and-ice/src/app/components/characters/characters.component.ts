import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Character } from 'src/app/interfaces/character';
import { RequestrService } from 'src/app/services/requestr.service';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit{
  @Input() url: string;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  currentCharacter: Character;

  constructor(private requestrService: RequestrService) { }

  ngOnInit() {
    // this.getCharacter();
  }

  @Input() set character(url) {
    let self = this;
    console.log("url----", url);
    this.requestrService.get(url).then(function(response) {
      self.currentCharacter = response.body;
      console.log('test ', response.body);
    }).catch(function(error) {
      console.log("ERROR WHEN GETTING CHARACTERS!", error);
    });
  };
}
