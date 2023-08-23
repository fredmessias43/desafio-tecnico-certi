import { Component, OnDestroy, OnInit } from '@angular/core';
import { AxiosError } from 'axios';
import { Pokemon } from 'src/types';
import { api } from '../services/api.service';
import { PokemonService } from '../services/pokemon.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit, OnDestroy {
  error?: Error;
  loading: boolean = false;
  pokemonList: Pokemon[] = [];
  
  private _socketSub!: Subscription;
  
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getAllPokemons();
    this._socketSub = this.pokemonService.createdPokemon.subscribe(pok => this.pokemonList.push(pok));
  }

  ngOnDestroy(): void {
    this._socketSub.unsubscribe();
  }

  async getAllPokemons() {
    this.error = undefined;
    this.loading = true;

    try {
      const res = await api.get("pokemons");
      this.pokemonList = res.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        const status = err.status || err.request?.status || err.response?.status;
        this.error = err;
      }
    }

    this.loading = false;
  }
}
