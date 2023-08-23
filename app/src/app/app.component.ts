import { Component } from '@angular/core';
import { AxiosError } from 'axios';
import { Pokemon } from 'src/types';
import { api } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  newPokemonData?: Pokemon;
  error?: Error;
  loading: boolean = false;

  handleNewPokemon(pokemon :Pokemon) {
    this.newPokemonData = pokemon;
  }

  async insertInPokedex() {
    this.error = undefined;
    this.loading = true;

    try {
      const res = await api.post("captured_pokemons", {
        name: this.newPokemonData?.name,
        image_url: this.newPokemonData?.image_url,
      });
    } catch (err) {
      if (err instanceof AxiosError) {
        const status = err.status || err.request?.status || err.response?.status;
        this.error = err;
      }
    }

    this.newPokemonData = undefined;
    this.loading = false;
  }
}
