import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-poke-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.sass']
})

export class PokeDetailsComponent implements OnInit {
  pokeId;
  pokemon;
  specie;
  isLoadingPoke = true;
  isLoadingSpecie = true;

  constructor(private _route: ActivatedRoute,
              private _pokeService: PokemonService,
              private location: Location) { }

  ngOnInit(): void {
    this.pokeId = this._route.snapshot.paramMap.get('id');
    this.getPokemon(this.pokeId);
    this.getPokemonSpecies(this.pokeId);
  }

  getPokemon(id: string) {
    this._pokeService.getPokemonByNumber(id).subscribe(result => {
      this.pokemon = result;
      this.isLoadingPoke = false;
    });
  }

  getPokemonSpecies(id: string){
    this._pokeService.getPokemonSpecies(id).subscribe(result => {
      this.specie = result;
      this.isLoadingSpecie = false;
    });
  }

  goBack(){
    this.location.back();
  }
}
