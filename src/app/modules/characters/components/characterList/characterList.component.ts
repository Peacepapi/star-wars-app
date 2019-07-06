import { Component, OnInit, OnDestroy } from '@angular/core';
import { CharactersSerivce } from '../../services/characters.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.sass']
})
export class CharacterListComponent implements OnInit, OnDestroy {

  private $characters: Observable<any>;

  constructor(private characterService: CharactersSerivce) { }
  ngOnDestroy() {
  }
  ngOnInit() {
    this.$characters = this.characterService.getStarWarChar()
  }

}
