import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.sass']
})
export class PokeCardComponent implements OnInit {
  pokemon;
  ancestor;
  isLoading = true;
  @Input() url: string;

  constructor(public _pokemonService: PokemonService,
              public _router: Router) { }

  ngOnInit(): void {
    this.getpokemon();
  }

  getpokemon() {
    this._pokemonService.getPokemonByURL(this.url).subscribe(result => {
      this.pokemon = result;
      this.isLoading = false;
      this.getPokemonSpecies(this.pokemon.id);
    });
  }

  getPokemonSpecies(id: string) {
    this._pokemonService.getPokemonSpecies(id).subscribe(result => {
      if (result.evolves_from_species){
        this.ancestor = result.evolves_from_species.name;
      }
    });
  }
  onClick(){
    this._router.navigate(['/detalles/' + this.pokemon.id]);
  }
}
