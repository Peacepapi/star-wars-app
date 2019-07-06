import { NgModule } from '@angular/core';
import { CharacterRoutingModule } from './characters-routing.module';
import { CharacterListComponent } from './components/characterList/characterList.component';
import { CharactersSerivce } from './services/characters.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CharacterListComponent],
  imports: [CharacterRoutingModule, HttpClientModule],
  exports: [],
  providers: [CharactersSerivce]
})
export class CharactersModule { }
