import { Component, OnInit, Input } from '@angular/core';
import { CharactersSerivce } from '../../services/characters.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.sass']
})
export class CharacterCardComponent implements OnInit {

  @Input()
  private character: any;

  private $characterInfo: Observable<any>;
  private $characterMovies: Observable<any[]>;

  private characterInfo: any;
  private characterMovies: any;
  private errorMessage: any;
  constructor(private characterService: CharactersSerivce) { }

  ngOnInit() {

  }

  getCharacterInfo(url: string) {
    this.$characterInfo = this.characterService.callCharacterInfo(url);
    this.$characterInfo.subscribe(
      ((characterInfo: any) => {
        this.characterInfo = characterInfo;
        if(characterInfo.films)
          this.getCharacterMovies(characterInfo.films);
        }),
      (error => this.errorMessage = error.message)
    );
  }

  getCharacterMovies(urls: string[]) {
    this.$characterMovies = this.characterService.callCharacterMovies(urls);
    this.$characterMovies.subscribe(
      (movies => this.characterMovies = movies),
      (error => this.errorMessage = error.message)
    );
  }
}
