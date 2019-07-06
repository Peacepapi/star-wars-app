import { NgModule } from '@angular/core';
import { CharacterRoutingModule } from './characters-routing.module';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharactersSerivce } from './services/characters.service';
import { HttpClientModule } from '@angular/common/http';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CharacterListComponent, CharacterCardComponent],
  imports: [CommonModule, CharacterRoutingModule, HttpClientModule],
  exports: [],
  providers: [CharactersSerivce]
})
export class CharactersModule { }
