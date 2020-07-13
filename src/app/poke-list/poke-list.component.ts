import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.sass']
})
export class PokeListComponent implements OnInit {
  pokemons = new MatTableDataSource<any>();

  constructor(public pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getAllPokemons().subscribe(res =>   {
      this.pokemons.data = res.results;
    });
  }

  applyFilter(filterValue: string) {
    this.pokemons.filter = filterValue.trim().toLowerCase();
  }


}
