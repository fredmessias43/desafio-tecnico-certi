import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { PokemonCreatedEvent } from '../events/pokemon-created.event';
import { WebSocketGateway } from '@nestjs/websockets';
import { EventsGateway } from 'src/events/events.gateway';

@Injectable()
export class PokemonCreatedListener {
  constructor(private readonly gateway: EventsGateway) { }

  @OnEvent('pokemon.created')
  handlePokemonCreatedEvent(event: PokemonCreatedEvent) {
    this.gateway.server.emit("pokemon.created", event);
  }
}