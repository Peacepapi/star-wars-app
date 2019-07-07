import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CharacterCardComponent } from './modules/characters/components/character-card/character-card.component';
import { CharacterListComponent } from './modules/characters/components/character-list/character-list.component';
import { Routes, RouterModule } from '@angular/router';
import { CharactersSerivce } from './modules/characters/services/characters.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: CharacterListComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    CharacterCardComponent,
    CharacterListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CharactersSerivce],
  bootstrap: [AppComponent]
})
export class AppModule { }
