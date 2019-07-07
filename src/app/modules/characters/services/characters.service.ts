import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

const charData = {
    "characters": [
    {
        "name": "Luke Skywalker",
        "url": "https://swapi.co/api/people/1/"
    },
    {
        "name": "Darth Vader",
        "url": "https://swapi.co/api/people/4/"
    },
    {
        "name": "Obi-wan Kenobi",
        "url": "https://swapi.co/api/people/unknown/"
    }, 
    {
        "name": "R2-D2",
        "url": "https://swapi.co/api/people/3/"
    }
    ]
};

@Injectable()
export class CharactersSerivce {

        constructor(private http: HttpClient) {
        }

        getCharacters(): Observable<any> {
            return new Observable(x => x.next(charData.characters));
        }

        callCharacterInfo(url: string): Observable<any> {
            return this.http.get(url);    
        }

        callCharacterMovies(urls: string[]): Observable<any[]>  {
            let httpCall = urls.map(url => this.http.get(url));
            return forkJoin(...httpCall);
        }
}