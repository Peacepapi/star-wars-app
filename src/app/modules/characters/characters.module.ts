import { NgModule } from '@angular/core';
import { CharacterRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './components/characters.component';

@NgModule({
  declarations: [CharactersComponent ],
  imports: [CharacterRoutingModule],
  exports: [],
  providers: []
})
export class CharactersModule { }
