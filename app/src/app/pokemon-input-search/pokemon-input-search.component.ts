import { Component, EventEmitter, Input, Output } from '@angular/core';
import axios, { AxiosError } from 'axios';
import { Pokemon } from 'src/types';

@Component({
  selector: 'app-pokemon-input-search',
  templateUrl: './pokemon-input-search.component.html',
  styleUrls: ['./pokemon-input-search.component.scss']
})
export class PokemonInputSearchComponent {
  @Input() disabled = false;
  @Output() pokemonFoundEvent = new EventEmitter<Pokemon>();
  @Output() pokemonNotFoundEvent = new EventEmitter();

  error?: Error;
  empty: boolean = false;
  loading: boolean = false;
  inputValue: string = "";

  pokemonData?: Pokemon;

  inputChange(ev: Event) {
    this.inputValue = ((ev.target as HTMLInputElement).value).toLowerCase().trim();
    this.searchPokemon(this.inputValue);
  }

  async searchPokemon(name: string) {
    this.error = undefined;
    this.empty = false;
    this.loading = true;
    this.pokemonData = undefined;

    try {
      const res = await axios({
        method: "get",
        url: `https://pokeapi.co/api/v2/pokemon/${name}`
      });

      this.pokemonData = {
        name: res.data.name,
        image_url: res.data.sprites.front_default,
      };
      this.pokemonFoundEvent.emit(this.pokemonData);
    } catch (err) {
      if (err instanceof AxiosError) {
        const status = err.status || err.request?.status || err.response?.status;        
        this.empty = status === 404;
        this.error = err;
      }
      this.pokemonFoundEvent.emit();
    }
    this.loading = false;
  }
}
