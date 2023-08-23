import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Pokemon } from 'src/types';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  createdPokemon = this.socket.fromEvent<Pokemon>('pokemon.created');

  constructor(private socket: Socket) { }
}