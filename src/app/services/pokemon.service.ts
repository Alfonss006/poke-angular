import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  baseURL = 'https://pokeapi.co/api/v2/';
  constructor(private _http: HttpClient) {}

  public getAllPokemons(): Observable<any>{
      return this._http.get(this.baseURL + 'pokemon?limit=25');
  }

  public getPokemonByURL(URL: string): Observable<any> {
      return this._http.get(URL);
  }

  public getPokemonByNumber(id: string): Observable<any>{
    return this._http.get(this.baseURL + 'pokemon/' + id);
  }

  public getPokemonSpecies(id: string): Observable<any>{
    return this._http.get(this.baseURL + 'pokemon-species/' + id);
  }
}
