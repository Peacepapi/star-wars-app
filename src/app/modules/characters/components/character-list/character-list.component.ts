import { Component, OnInit, OnDestroy } from '@angular/core';
import { CharactersSerivce } from '../../services/characters.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.sass']
})
export class CharacterListComponent implements OnInit {

  private $characters: Observable<any>;

  constructor(private characterService: CharactersSerivce) { }

  ngOnInit() {
    this.$characters = this.characterService.getCharacters()
  }

}
