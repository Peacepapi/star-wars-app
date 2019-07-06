import { Component, OnInit, Input } from '@angular/core';
import { CharactersSerivce } from '../../services/characters.service';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.sass']
})
export class CharacterCardComponent implements OnInit {

  @Input()
  private character: any;
  private $characterInfo: any;

  constructor(private characterService: CharactersSerivce) { }

  ngOnInit() {
    console.log(this.character);
  }

  getCharacterInfo(url: string) {
    this.$characterInfo = this.characterService.getCharacterInfo(url);
    this.$characterInfo.subscribe(
      (data => {
        console.log(data);
        return data;
      }),
      (error => console.log(error)));
  }
}
