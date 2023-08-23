import { Component, OnDestroy, OnInit } from '@angular/core';
import { AxiosError } from 'axios';
import { Pokemon } from 'src/types';
import { api } from '../services/api.service';
import { PokemonService } from '../services/pokemon.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-captured-pokemon-list',
  templateUrl: './captured-pokemon-list.component.html',
  styleUrls: ['./captured-pokemon-list.component.scss'],
  providers: [PokemonService]
})
export class CapturedPokemonListComponent implements OnInit, OnDestroy {
  error?: Error;
  loading: boolean = false;
  capturedPokemonList: Pokemon[] = [];
  
  private _socketSub!: Subscription;
  
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getAllPokemons();
    this._socketSub = this.pokemonService.createdPokemon.subscribe(pok => this.capturedPokemonList.push(pok));
  }

  ngOnDestroy(): void {
    this._socketSub.unsubscribe();
  }

  async getAllPokemons() {
    this.error = undefined;
    this.loading = true;

    try {
      const res = await api.get("captured_pokemons");
      this.capturedPokemonList = res.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        const status = err.status || err.request?.status || err.response?.status;
        this.error = err;
      }
    }

    this.loading = false;
  }
}
