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
  // @Input() readonly = false;
  // @Output() selected = new EventEmitter();
  // @Output() deleted = new EventEmitter();

  character: Character;
  birth: string;
  titles: string;
  aliases: string;

  constructor(private requestrService: RequestrService) { }

  ngOnInit() {
    let _this = this;
    console.log("url----", this.url);
    this.requestrService.get(this.url).then(function(response) {
      _this.character = response.body;
      _this.birth = _this.character.birth ? _this.character.birth.toDateString() : "";
      _this.titles = _this.character.titles ? _this.character.titles.join(",") : "";
      _this.aliases = _this.character.aliases ? this.character.aliases.join(",") : "";
      console.log('test ', response.body);
    }).catch(function(error) {
      console.log("ERROR WHEN GETTING CHARACTERS!", error);
    });
  }
}
